// components/home_footernav.js
import Link from 'next/link';

export function FooterNav() {
  return (
    <footer className="px-6 md:px-28 py-30 bg-gray-50">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 space-x-20">
        {/* Email subscription section */}
        <div className="w-full md:w-1/2 flex md:justify-end">
          <div className="w-full max-w-md">
            <h3 className="text-[50px] mb-2 whitespace-nowrap">STAY UPDATED</h3>
            <p className="mb-2">Get research updates, news, and events.</p>
            <div className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Email Address"
                className="border-b p-2 w-full focus:outline-none"
              />
              <button className="bg-black text-white py-2 px-6 rounded w-[100px] mb-10">
                ENTER
              </button>
            </div>
          </div>
        </div>

        {/* Navigation section */}
        <nav className="w-full md:w-1/2 flex flex-col sm:flex-row space-x-[70px]">
          <div className="flex flex-col space-y-4 mb-6 sm:mb-0">
            <Link href="/research" className="hover:underline text-gray-600">
              RESEARCH
            </Link>
            <Link href="/careers" className="hover:underline text-gray-600">
              CAREERS
            </Link>
            <Link href="/about" className="hover:underline text-gray-600">
              ABOUT
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <Link href="https://linkedin.com" target="_blank" className="hover:underline text-gray-600">
              LINKEDIN
            </Link>
            <Link href="https://x.com" target="_blank" className="hover:underline text-gray-600">
              X
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
}
