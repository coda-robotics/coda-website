// components/topnav.js
'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import Image from 'next/image';

export function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname()
  
  if (pathname.startsWith('/posts/')) {
    return null;
  }
  
  return (
    <header className="relative z-50 bg-[#F5F5F5] border-b border-gray-200">
      <div className="flex flex-row sm:justify-between md:justify-center items-center px-4 sm:px-8 py-4 max-w-7xl mx-auto">
        {/* Left side - CODA logo */}
        <div className="w-[120px] sm:w-[200px] md:flex-1">
          <Link href="/" className="flex items-center">
            <Image
              src="/coda.svg"
              alt="CODA Logo"
              width={24}
              height={24}
              className="mr-2"
            />
            <span className="text-xl font-normal">CODA</span>
          </Link>
        </div>

        {/* Center navigation items - centered on desktop, left-aligned on mobile */}
        <nav className="flex items-center space-x-2 md:space-x-8 ml-auto sm:ml-0 md:flex-0">
          <Link 
            href="/company" 
            className="text-gray-700 hover:text-gray-900 text-sm"
          >
            Company
          </Link>
          <Link 
            href="/infrastructure" 
            className="text-gray-700 hover:text-gray-900 text-sm"
          >
            Infrastructure
          </Link>
          {/* News link hidden with display-none but kept in DOM */}
          <Link 
            href="/infrastructure/news" 
            className="hidden text-gray-700 hover:text-gray-900 text-sm"
          >
            News
          </Link>
          {/* <Link 
            href="/vla_arena" 
            className="text-gray-700 hover:text-gray-900 text-sm"
          >
            VLA Arena
          </Link> */}
          <Link 
            href="/careers" 
            className="text-gray-700 hover:text-gray-900 text-sm"
          >
            Careers
          </Link>
        </nav>

        {/* Right side - empty div for desktop balance */}
        <div className="hidden sm:block md:flex-1"></div>
      </div>
    </header>
  );
}