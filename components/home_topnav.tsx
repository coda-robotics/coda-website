'use client';
import { useState } from 'react';
import Link from 'next/link';

export function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 lg:px-28 py-10 transition-all duration-300 ease-in-out">
        {/* Left group: logo + desktop nav */}
        <div className="flex items-center space-x-20">
          <div onClick={() => setMenuOpen(!menuOpen)} className="flex items-center cursor-pointer">
            <img src="/coda.svg" alt="Coda Logo" className="w-7 h-7 mr-5" />
            <span className="text-[30px] font-[400]">CODA</span>
          </div>

          {/* Desktop nav now *next to* logo */}
          <nav className="hidden md:flex space-x-5">
            {['/infrastructure', '/careers', '/about'].map((path) => {
              const label = path.slice(1);
              const capitalized = label.charAt(0).toUpperCase() + label.slice(1).toLowerCase();
              return (
                <Link
                  key={path}
                  href={path}
                  className="bg-black text-white border border-black py-1 rounded-[4px] hover:bg-white hover:text-black hover:border-black text-[10px] w-20 text-center transition"
                >
                  {capitalized}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right: Mobile menu toggle */}
        <button className="md:hidden text-[20px]" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 flex flex-col items-center justify-center z-40 transition-opacity duration-300 ease-in-out ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } bg-white/30 backdrop-blur-md`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-black text-xl font-bold"
        >
          ×
        </button>
        <nav className="flex flex-col space-y-6 mt-12">
          {['/infrastructure', '/careers', '/about'].map((path) => {
            const label = path.slice(1);
            const capitalized = label.charAt(0).toUpperCase() + label.slice(1).toLowerCase();
            return (
              <Link
                key={path}
                href={path}
                className="text-black text-xl font-medium hover:underline"
                onClick={() => setMenuOpen(false)} // Close on click
              >
                {capitalized}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
)}