// components/external_links.js
import Link from 'next/link';
import React from 'react';

export default function ExternalLinks() {
  return (
    <>
      <div className="flex flex-col space-y-4 mb-6 sm:mb-0 ml-1 sm:ml-0">
        <Link href="/infrastructure" className="hover:underline underline-offset-4 text-gray-600">
          INFRASTRUCTURE 
        </Link>
        <Link href="/careers" className="hover:underline underline-offset-4 text-gray-600">
          CAREERS
        </Link>
        <Link href="/company" className="hover:underline underline-offset-4 text-gray-600">
          COMPANY
        </Link>
      </div>
      <div className="flex flex-col space-y-4 ml-1 sm:ml-0">
        <Link href="https://www.linkedin.com/in/juliansaks/" target="_blank" className="hover:underline underline-offset-4 text-gray-600">
          LINKEDIN
        </Link>
        <Link href="https://x.com/juliansaks" target="_blank" className="hover:underline text-gray-600 underline-offset-4">
          X
        </Link>
      </div>
    </>
  );
}
