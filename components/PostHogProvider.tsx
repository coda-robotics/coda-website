"use client"

import { Suspense, useEffect, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { DirectPostHogCapture, captureEvent } from "./DirectPostHogCapture"

// Type for stored events
interface StoredEvent {
  name: string;
  properties: Record<string, any>;
  time: number;
}

// Function to process stored events from localStorage
const processStoredEvents = () => {
  if (typeof window === 'undefined' || !window.posthog) return;
  
  try {
    const storedEvents = JSON.parse(localStorage.getItem('ph_events') || '[]') as StoredEvent[];
    if (storedEvents.length === 0) return;
    
    console.log(`Processing ${storedEvents.length} stored events`);
    
    // Process events in batches
    const batch = storedEvents.splice(0, 10);
    
    batch.forEach(event => {
      try {
        window.posthog.capture(event.name, {
          ...event.properties,
          from_local_storage: true,
          stored_at: new Date(event.time).toISOString()
        });
      } catch (e) {
        console.error(`Failed to process stored event ${event.name}:`, e);
      }
    });
    
    // Update localStorage with remaining events
    localStorage.setItem('ph_events', JSON.stringify(storedEvents));
    
    // If there are more events, schedule another processing
    if (storedEvents.length > 0) {
      setTimeout(processStoredEvents, 2000);
    }
  } catch (error) {
    console.error('Error processing stored events:', error);
  }
};

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (isInitialized) return;

    try {
      // Set up event listener for page visibility changes to process events when user returns
      if (typeof window !== 'undefined') {
        document.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'visible' && window.posthog) {
            processStoredEvents();
          }
        });
        
        // Set up a timer to process stored events after PostHog is loaded
        const checkPostHogAndProcess = () => {
          if (window.posthog) {
            processStoredEvents();
          } else {
            setTimeout(checkPostHogAndProcess, 1000);
          }
        };
        
        // Start checking after a delay to allow PostHog to initialize
        setTimeout(checkPostHogAndProcess, 2000);
      }
      
      setIsInitialized(true);
    } catch (error) {
      console.error('Error initializing analytics:', error);
    }
  }, [isInitialized]);

  return (
    <>
      <DirectPostHogCapture 
        apiKey={process.env.NEXT_PUBLIC_POSTHOG_KEY || ''}
        apiHost={process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com'}
      />
      {children}
    </>
  )
}

// Export the custom capture function for use in components
export { captureEvent };