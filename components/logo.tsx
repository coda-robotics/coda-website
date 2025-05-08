// src/components/Logo.tsx
'use client';

import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center cursor-pointer">
      <img src="/coda.svg" alt="Coda Logo" className="w-7 h-7 mr-5" />
      <span className="text-[30px] text-black font-[400]">CODA</span>
    </Link>
  );
}