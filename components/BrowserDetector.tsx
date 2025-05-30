'use client';

import { useEffect, useState } from 'react';

interface BrowserDetectorProps {
  children: (isSafari: boolean) => React.ReactNode;
}

export default function BrowserDetector({ children }: BrowserDetectorProps) {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      const userAgent = navigator.userAgent;
      const isSafari = userAgent.includes('Safari') && !userAgent.includes('Chrome');
      setIsSafari(isSafari);
    }
  }, []);

  return <>{children(isSafari)}</>;
}
