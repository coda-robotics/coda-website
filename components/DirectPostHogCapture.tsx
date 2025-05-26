'use client';

import { useEffect, useRef } from 'react';

interface DirectPostHogCaptureProps {
  apiKey: string;
  apiHost: string;
}

// This component directly injects the PostHog snippet with proper configuration
export function DirectPostHogCapture({ apiKey, apiHost }: DirectPostHogCaptureProps) {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Create and inject the PostHog script directly
    const script = document.createElement('script');
    script.innerHTML = `
      !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
      posthog.init('${apiKey}', {
        api_host: '${apiHost}',
        capture_pageview: true,
        capture_pageleave: true,
        autocapture: true,
        loaded: function(posthog) {
          // Mark events with a custom property to identify they're from the direct integration
          posthog.register({ direct_integration: true });
        }
      });
    `;
    document.head.appendChild(script);

    return () => {
      // Clean up if component unmounts
      document.head.removeChild(script);
    };
  }, [apiKey, apiHost]);

  return null;
}

// Helper function to capture events with the direct PostHog integration
export const captureEvent = (eventName: string, properties: Record<string, any> = {}) => {
  if (typeof window === 'undefined' || !window.posthog) {
    console.warn('PostHog not available for event:', eventName);
    return false;
  }
  
  try {
    // Add timestamp and other useful properties
    const eventProperties = {
      ...properties,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      direct_capture: true
    };
    
    console.log(`Capturing event directly: ${eventName}`, eventProperties);
    window.posthog.capture(eventName, eventProperties);
    return true;
  } catch (error) {
    console.error(`Error capturing event ${eventName}:`, error);
    return false;
  }
};

// Add the type definition for the global posthog object
declare global {
  interface Window {
    posthog: any;
  }
}
