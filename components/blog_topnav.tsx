'use client';

import Link from 'next/link';

const navPaths = ['/infrastructure', '/careers', '/about'];

export function BlogTopNav() {
  return (
    <header className="w-full py-6">
      <div className="flex items-center -ml-31"> {/* Shifts whole navbar left */}
        {/* Logo */}
        <Link href="/" className="flex items-center cursor-pointer">
          <img src="/coda.svg" alt="Coda Logo" className="w-7 h-7 mr-5" />
          <span className="text-[30px] text-black font-[400]">CODA</span>
        </Link>

        {/* Nav buttons */}
        <nav className="hidden md:flex space-x-5 ml-84">
          {navPaths.map((path) => {
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
    </header>
  );
}
