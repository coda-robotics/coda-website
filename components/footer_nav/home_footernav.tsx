// components/home_footernav.js
'use client';

import StayUpdated from './stay_update';
import ExternalLinks from './external_links';
import {usePathname} from 'next/navigation'

export function FooterNav() {

  const pathname = usePathname()

  if (pathname.startsWith('/posts/')) {
    return null; // Hide the navbar for anything under /posts/
  }

  // Hide the footer for infrastructure pages as they have their own custom footer
  if (pathname === '/infrastructure' || pathname.startsWith('/infrastructure/')) {
    return null;
  }
  
  const isContentPage = pathname === '/careers' || pathname === '/company';

  return (
    <footer className={`text-black px-3 sm:px-15 pt-10 mb-14 ${isContentPage ? 'max-w-[65rem] mx-auto px-4 sm:px-6 lg:px-8' : ''}`}>
     <div className={`w-full mx-auto ${isContentPage ? 'px-0' : 'max-w-[62rem] px-4 sm:px-6 lg:px-28'}`}>
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-40">
          {/* Email subscription section */}
          <div className="w-full md:w-1/2 flex md:justify-end">
            <StayUpdated />
          </div>

          {/* Navigation section */}
          <nav className="w-full md:w-1/2 flex flex-col sm:flex-row space-x-0 sm:space-x-[50px] pt-4">
            <ExternalLinks />
          </nav>
        </div>
      </div>
    </footer>
  );
}
