// components/topnav.js
'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link';
import Image from 'next/image';

export function TopNav() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // On mount, check if we have a department filter in URL
  useEffect(() => {
    if (pathname === '/careers') {
      const department = searchParams.get('department');
      if (department) {
        // If we navigated from the dropdown, the department filter will be in the URL
        // The careers page will handle applying the filter automatically
      }
    }
  }, [pathname, searchParams]);
  
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
      <div className={`bg-[#F5F5F5] rounded-2xl shadow-sm mx-auto max-w-[95%] sm:max-w-[90%] lg:max-w-[1200px] transition-all duration-300`}
           onMouseLeave={handleMouseLeave}>
        <header>
          <div className="flex flex-row sm:justify-between md:justify-center items-center px-4 sm:px-8 py-3 mx-auto">
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
              {/* Company link with dropdown */}
              <div className="relative">
                <Link 
                  href="/company" 
                  className="text-gray-700 hover:text-gray-900 text-sm font-medium"
                  onMouseEnter={() => handleMouseEnter('company')}
                >
                  Company
                </Link>
              </div>
              
              {/* Infrastructure dropdown trigger */}
              <div className="relative">
                <Link 
                  href="/infrastructure"
                  className="text-gray-700 hover:text-gray-900 text-sm font-medium"
                  onMouseEnter={() => handleMouseEnter('infrastructure')}
                >
                  Infrastructure
                </Link>
              </div>
              
              {/* News link hidden with display-none but kept in DOM */}
              <Link 
                href="/infrastructure/news" 
                className="hidden text-gray-700 hover:text-gray-900 text-sm font-medium"
              >
                News
              </Link>
              
              {/* Careers link with dropdown */}
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

            {/* Right side - empty div for desktop balance */}
            <div className="hidden sm:block md:flex-1"></div>
          </div>
        </header>
        
        {/* Infrastructure dropdown content */}
        {activeDropdown === 'infrastructure' && (
          <div className="pb-4">
            <div className="px-4 sm:px-8 mt-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x divide-gray-300 md:bg-transparent bg-gray-100 rounded-lg">
                {/* Embodied Reasoning */}
                <Link 
                  href="/infrastructure/ecot" 
                  className="block p-6 rounded-l-lg hover:bg-gray-200"
                >
                  <div className="font-medium text-gray-800 mb-2">Embodied Reasoning</div>
                  <p className="text-sm text-gray-600">Allow your foundation model to iteratively reason over complex tasks</p>
                </Link>
                
                {/* VLA Arena */}
                <Link 
                  href="/vla_arena" 
                  className="block p-6 hover:bg-gray-200 md:border-t-0 border-t border-gray-300"
                >
                  <div className="font-medium text-gray-800 mb-2">VLA Arena</div>
                  <p className="text-sm text-gray-600">Easily setup head-to-head model evaluations in an in-browser physics simulation</p>
                </Link>
                
                {/* Digital Cousins */}
                <Link 
                  href="/digital_cousins" 
                  className="block p-6 rounded-r-lg hover:bg-gray-200 md:border-t-0 border-t border-gray-300"
                >
                  <div className="font-medium text-gray-800 mb-2">Digital Cousins</div>
                  <p className="text-sm text-gray-600">Scale your data to unlocl positive transfer from scale</p>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Careers dropdown content */}
        {activeDropdown === 'careers' && (
          <div className="pb-4">
            <div className="px-4 sm:px-8 mt-2">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:divide-x divide-gray-300 md:bg-transparent bg-gray-100 rounded-lg">
                {/* Engineering */}
                <div 
                  onClick={(e) => handleDepartmentClick('Engineering', e)}
                  className="block p-6 rounded-l-lg hover:bg-gray-200 cursor-pointer"
                >
                  <div className="font-medium text-gray-800 mb-2">Engineering</div>
                  <p className="text-sm text-gray-600">Join our core technical team building next-gen AI systems</p>
                </div>
                
                {/* Research */}
                <div 
                  onClick={(e) => handleDepartmentClick('Research', e)}
                  className="block p-6 hover:bg-gray-200 md:border-t-0 border-t border-gray-300 cursor-pointer"
                >
                  <div className="font-medium text-gray-800 mb-2">Research</div>
                  <p className="text-sm text-gray-600">Work on cutting-edge AI and ML problems with our research team</p>
                </div>
                
                {/* Data */}
                <div 
                  onClick={(e) => handleDepartmentClick('Data', e)}
                  className="block p-6 hover:bg-gray-200 md:border-t-0 border-t border-gray-300 cursor-pointer"
                >
                  <div className="font-medium text-gray-800 mb-2">Data</div>
                  <p className="text-sm text-gray-600">Build data pipelines and infrastructure that power our AI models</p>
                </div>
                
                {/* Media */}
                <div 
                  onClick={(e) => handleDepartmentClick('Media', e)}
                  className="block p-6 rounded-r-lg hover:bg-gray-200 md:border-t-0 border-t border-gray-300 cursor-pointer"
                >
                  <div className="font-medium text-gray-800 mb-2">Media</div>
                  <p className="text-sm text-gray-600">Help tell the CODA story across digital and traditional channels</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Company dropdown - updated with requested changes */}
        {activeDropdown === 'company' && (
          <div className="pb-4">
            <div className="px-4 sm:px-8 mt-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x divide-gray-300 md:bg-transparent bg-gray-100 rounded-lg">
                {/* Why Build Coda Robotics (previously About) */}
                <Link 
                  href="/why-coda" 
                  className="block p-6 rounded-l-lg hover:bg-gray-200"
                >
                  <div className="font-medium text-gray-800 mb-2">Why Build Coda Robotics</div>
                  <p className="text-sm text-gray-600">Read why we're doubling down on infrastructure for AI Robotics</p>
                </Link>
                
                {/* Mission, Values, Culture, Core Values (previously Team) */}
                <Link 
                  href="/company" 
                  className="block p-6 hover:bg-gray-200 md:border-t-0 border-t border-gray-300"
                >
                  <div className="font-medium text-gray-800 mb-2">Mission, Values, Culture, Core Values</div>
                  <p className="text-sm text-gray-600">Understand our way of approaching hard problems</p>
                </Link>
                
                {/* Contact - email to founders@codarobotics.ai */}
                <div 
                  onClick={handleContactClick}
                  className="block p-6 rounded-r-lg hover:bg-gray-200 md:border-t-0 border-t border-gray-300 cursor-pointer"
                >
                  <div className="font-medium text-gray-800 mb-2">Contact</div>
                  <p className="text-sm text-gray-600">Get in touch with our founding team</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}