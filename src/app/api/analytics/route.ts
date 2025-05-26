import { NextRequest, NextResponse } from 'next/server';
import { PostHog } from 'posthog-node';

// Initialize server-side PostHog client
const serverPosthog = new PostHog(
  process.env.NEXT_PUBLIC_POSTHOG_KEY!,
  { 
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    flushAt: 1, // Flush immediately for testing
    flushInterval: 0
  }
);

export async function POST(req: NextRequest) {
  try {
    const { event, properties } = await req.json();
    
    // Forward the event to PostHog from your server
    serverPosthog.capture({
      distinctId: properties.distinct_id || 'anonymous',
      event,
      properties
    });
    
    // Ensure events are sent before response
    await serverPosthog.flush();
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in analytics API route:', error);
    return NextResponse.json({ success: false, error: 'Failed to process analytics' }, { status: 500 });
  }
}
