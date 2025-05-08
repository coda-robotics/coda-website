// components/topnav.js
'use client';
import { useState, useEffect } from 'react';
import { NavLogo } from './top_nav/nav_logo';
import { NavLinks } from './top_nav/nav_links';
import { MobileMenu } from './top_nav/mobile_menu';

const NAV_LINKS = [
  { path: '/infrastructure', label: 'Infrastructure' },
  { path: '/careers', label: 'Careers' },
  { path: '/about', label: 'About' }
];

export function TopNav() {
  const [menu_open, set_menu_open] = useState(false);
  const [is_visible, set_is_visible] = useState(true);
  const [last_scroll, set_last_scroll] = useState(0);

  useEffect(() => {
    const handle_scroll = () => {
      const current_scroll = window.scrollY;
      
      if (current_scroll > last_scroll) {
        // Scrolling down
        set_is_visible(false);
      } else {
        // Scrolling up
        set_is_visible(true);
      }
      
      set_last_scroll(current_scroll);
    };

    window.addEventListener('scroll', handle_scroll);
    return () => window.removeEventListener('scroll', handle_scroll);
  }, [last_scroll]);

  return (
    <header className={`absolute top-0 left-0 w-full transition-transform duration-300 ${is_visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="px-6 lg:px-8 py-4">
        <div className="flex items-center justify-start space-x-8">
          <NavLogo logo_url="/coda.svg" company_name="CODA" />
          <NavLinks links={NAV_LINKS} />
          <button
            className="md:hidden text-[20px] text-black ml-auto"
            onClick={() => set_menu_open(!menu_open)}
          >
            {menu_open ? 'Close' : 'Menu'}
          </button>
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