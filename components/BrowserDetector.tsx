'use client';

import { useEffect, useState } from 'react';

interface BrowserDetectorProps {
  children: (isSafari: boolean) => React.ReactNode;
}

export default function BrowserDetector({ children }: BrowserDetectorProps) {
  const [isSafari, setIsSafari] = useState(false);

  // Detect Safari immediately
  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isSafari = userAgent.includes('Safari') && !userAgent.includes('Chrome');
    setIsSafari(isSafari);
  }, []);

  // Also check immediately on mount
  const isSafariImmediate = navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome');

  return <>{children(isSafari || isSafariImmediate)}</>;
}