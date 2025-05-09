// components/topnav.js
'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link';

export function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname()
  
  if (pathname.startsWith('/posts/')) {
    return null; // Hide the navbar for anything under /posts/
  }
  
  return (
    <header className="relative z-50">
      <div className="flex items-center justify-between px-16 lg:px-80 md:px-22 py-10 transition-all duration-300 ease-in-out">
        <div className="flex items-center space-x-20">
          <Link href="/" className="flex items-center cursor-pointer">
            <img src="/coda.svg" alt="Coda Logo" className="w-7 h-7 mr-5" />
            <span className="text-[30px] text-black font-[400]">CODA</span>
          </Link>
          <nav className="hidden md:flex space-x-5">
            {['/infrastructure', '/careers', '/about'].map((path) => {
              const label = path.slice(1);
              const capitalized = label.charAt(0).toUpperCase() + label.slice(1);
              return (
                <Link
                  key={path}
                  href={path}
                  className="bg-black text-white border border-black py-1 rounded-[4px] hover:bg-white hover:text-black text-[10px] w-20 text-center transition"
                >
                  {capitalized}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      <MobileMenu is_open={menu_open} on_close={() => set_menu_open(false)}>
        <NavLinks 
          links={NAV_LINKS} 
          on_link_click={() => set_menu_open(false)} 
          is_mobile={true} 
        />
      </MobileMenu>
    </header>
  );
}