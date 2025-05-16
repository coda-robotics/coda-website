'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <section className="px-4 sm:px-6 lg:px-32">
      <div className="items-start px-[22px] sm:px-[20px] lg:px-[105px] py-20">
        <h1 className="coda-font text-[40px] mb-8 mt-8">ABOUT</h1>
        <p className="coda-font text-[20px] mb-12">
          To learn more about Coda Robotics, please visit our company page.
        </p>
        
        <Link
          href="/company"
          className="inline-block bg-black text-white px-6 py-3 text-[15px] hover:bg-gray-800 transition-colors"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Visit Company Page
        </Link>
      </div>
    </section>
  );
}