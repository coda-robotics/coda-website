'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export function TopNav() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isIphone, setIsIphone] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  // On mount, check if we have a department filter in URL
  useEffect(() => {
    if (pathname === '/careers') {
      const department = searchParams.get('department');
      if (department) {
        // The careers page will handle applying the filter automatically
      }
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    if (typeof navigator !== 'undefined' && /iPhone/.test(navigator.userAgent)) {
      setIsIphone(true);
    }
  }, []);

  if (pathname.startsWith('/posts/')) {
    return null;
  }

  const handleMouseEnter = (dropdownName: string) => {
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Handler for department selection
  const handleDepartmentClick = (department: string, e: React.MouseEvent) => {
    e.preventDefault();
    router.push(`/careers?department=${department}`);
    setActiveDropdown(null); // Close dropdown after selection
  };

  // Handler for email contact
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = 'mailto:founders@codarobotics.ai';
    setActiveDropdown(null); // Close dropdown after click
  };

  return (
    <div className="w-full pt-4 sm:pt-6 px-4 relative z-50">
      <div className="bg-[#F5F5F5] bg-opacity-20 rounded-2xl shadow-sm mx-auto max-w-[95%] sm:max-w-[90%] lg:max-w-[1200px] transition-all duration-300"
           onMouseLeave={handleMouseLeave}>
        <header>
          <div className="flex flex-row items-center justify-between px-4 sm:px-8 py-3 mx-auto relative">
            {/* Left side - CODA logo */}
            <div className="w-[120px] sm:w-[200px]">
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

            {/* Hamburger button for mobile (render only if not iPhone) */}
            {!isIphone && (
              <button
                className="sm:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                <div className="space-y-1">
                  <span className="block w-6 h-0.5 bg-gray-600"></span>
                  <span className="block w-6 h-0.5 bg-gray-600"></span>
                  <span className="block w-6 h-0.5 bg-gray-600"></span>
                </div>
              </button>
            )}

            {/* Regular navigation for larger screens */}
            <nav className={`${isIphone ? "flex" : "hidden sm:flex absolute left-1/2 transform -translate-x-1/2"} items-center space-x-2 md:space-x-8`}>
              <div className="relative">
                <Link
                  href="/company"
                  className="text-gray-700 hover:text-gray-900 text-sm font-medium"
                  onMouseEnter={() => handleMouseEnter('company')}
                >
                  Company
                </Link>
              </div>
              <div className="relative">
                <Link
                  href="/infrastructure"
                  className="text-gray-700 hover:text-gray-900 text-sm font-medium"
                  onMouseEnter={() => handleMouseEnter('infrastructure')}
                >
                  Infrastructure
                </Link>
              </div>
              <div className="relative">
                <Link
                  href="/careers"
                  className="text-gray-700 hover:text-gray-900 text-sm font-medium"
                  onMouseEnter={() => handleMouseEnter('careers')}
                >
                  Careers
                </Link>
              </div>
            </nav>
          </div>
        </header>

        {/* Dropdown content for larger screens */}
        {activeDropdown === 'infrastructure' && (
          <div className="pb-4">
            <div className="px-4 sm:px-8 mt-2">
              <div className="grid grid-cols-1 md:grid-cols-4 md:divide-x divide-gray-300 md:bg-transparent bg-gray-100 rounded-lg">
                <Link href="/robotic_world_models" className="block p-6 rounded-l-lg hover:bg-gray-200">
                  <div className="font-medium text-gray-800 mb-2">Robotic World Models</div>
                  <p className="text-sm text-black">Scale your teleoperation data at the lowest costs</p>
                </Link>
                <Link href="/data_weighting" className="block p-6 hover:bg-gray-200 md:border-t-0 border-t border-gray-300">
                  <div className="font-medium text-gray-800 mb-2">Data Weighting</div>
                  <p className="text-sm text-black">Autonomously select the best data generated by the world model</p>
                </Link>
                <Link href="/infrastructure/ecot" className="block p-6 hover:bg-gray-200 md:border-t-0 border-t border-gray-300">
                  <div className="font-medium text-gray-800 mb-2">Embodied Reasoning</div>
                  <p className="text-sm text-black">Improve your robot policies by adding reasoning to your datasets</p>
                </Link>
                <Link href="/vla_arena" className="block p-6 rounded-r-lg hover:bg-gray-200 md:border-t-0 border-t border-gray-300">
                  <div className="font-medium text-gray-800 mb-2">VLA Arena</div>
                  <p className="text-sm text-black">Evaluate VLAs head-to-head in an in-browser physics simulation</p>
                </Link>
              </div>
            </div>
          </div>
        )}

        {activeDropdown === 'careers' && (
          <div className="pb-4">
            <div className="px-4 sm:px-8 mt-2">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:divide-x divide-gray-300 md:bg-transparent bg-gray-100 rounded-lg">
                <div onClick={(e) => handleDepartmentClick('Engineering', e)} className="block p-6 rounded-l-lg hover:bg-gray-200 cursor-pointer">
                  <div className="font-medium text-gray-800 mb-2">Engineering</div>
                  <p className="text-sm text-black">Build the infrastructure to advance robotics</p>
                </div>
                <div onClick={(e) => handleDepartmentClick('Research', e)} className="block p-6 hover:bg-gray-200 md:border-t-0 border-t border-gray-300 cursor-pointer">
                  <div className="font-medium text-gray-800 mb-2">Research</div>
                  <p className="text-sm text-black">Hard solve problems by pushing our knowledge of what is currently capable</p>
                </div>
                <div onClick={(e) => handleDepartmentClick('Product', e)} className="block p-6 hover:bg-gray-200 md:border-t-0 border-t border-gray-300 cursor-pointer">
                  <div className="font-medium text-gray-800 mb-2">Product</div>
                  <p className="text-sm text-black">Provide the best experience for roboticists worldwide</p>
                </div>
                <div onClick={(e) => handleDepartmentClick('Media', e)} className="block p-6 rounded-r-lg hover:bg-gray-200 md:border-t-0 border-t border-gray-300 cursor-pointer">
                  <div className="font-medium text-gray-800 mb-2">Media</div>
                  <p className="text-sm text-black">Share Coda's story with the world</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeDropdown === 'company' && (
          <div className="pb-4">
            <div className="px-4 sm:px-8 mt-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x divide-gray-300 md:bg-transparent bg-gray-100 rounded-lg">
                <Link href="/why-coda" className="block p-6 rounded-l-lg hover:bg-gray-200">
                  <div className="font-medium text-gray-800 mb-2">Why Build Coda Robotics</div>
                  <p className="text-sm text-black">Understand why we're doubling down on infrastructure for AI Robotics</p>
                </Link>
                <Link href="/company" className="block p-6 hover:bg-gray-200 md:border-t-0 border-t border-gray-300">
                  <div className="font-medium text-gray-800 mb-2">Mission, Vision, Culture, Core Values</div>
                  <p className="text-sm text-black">Understand our way of approaching hard problems</p>
                </Link>
                <div onClick={handleContactClick} className="block p-6 rounded-r-lg hover:bg-gray-200 md:border-t-0 border-t border-gray-300 cursor-pointer">
                  <div className="font-medium text-gray-800 mb-2">Contact</div>
                  <p className="text-sm text-black">Get in touch with our founding team</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Full-screen mobile navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white/60 backdrop-blur-sm z-50 flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-4 right-4 text-black"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              Close
            </button>
            <nav className="flex flex-col space-y-4 text-center">
              <div className = 'mb-10'>
                <Link href="/company" onClick={() => setIsMobileMenuOpen(false)} className="font-medium text-[23px] mb-[10px]">
                  Company
                </Link>
                <div className="mt-2 space-y-2">
                  <Link href="/why-coda" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-black">
                    Why Build Coda Robotics
                  </Link>
                  <Link href="/company" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-black">
                    Mission, Vision, Culture, Core Values
                  </Link>
                  <a href="mailto:founders@codarobotics.ai" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-black">
                    Contact
                  </a>
                </div>
              </div>
              <div className = 'mb-10'>
                <Link href="/infrastructure" onClick={() => setIsMobileMenuOpen(false)} className="font-medium text-[23px] mb-[10px]">
                  Infrastructure
                </Link>
                <div className="mt-2 space-y-2">
                  <Link href="/robotic_world_models" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-black">
                    Robotic World Models
                  </Link>
                  <Link href="/data_weighting" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-black">
                    Data Weighting
                  </Link>
                  <Link href="/infrastructure/ecot" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-black">
                    Embodied Reasoning
                  </Link>
                  <Link href="/vla_arena" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-black">
                    VLA Arena
                  </Link>
                </div>
              </div>
              <div>
                <Link href="/careers" onClick={() => setIsMobileMenuOpen(false)} className="font-medium text-[23px] mb-[10px]">
                  Careers
                </Link>
                <div className="mt-2 space-y-2">
                  <Link href="/careers?department=Engineering" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-black">
                    Engineering
                  </Link>
                  <Link href="/careers?department=Research" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-black">
                    Research
                  </Link>
                  <Link href="/careers?department=Product" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-black">
                    Product
                  </Link>
                  <Link href="/careers?department=Media" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-black">
                    Media
                  </Link>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}