'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { captureEvent } from './PostHogProvider';

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
        // The careers page will handle applying the filter automatically
      }
    }
  }, [pathname, searchParams]);

  // Reset dropdown state when pathname changes
  useEffect(() => {
    setActiveDropdown(null);
  }, [pathname]);

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
              <Link 
                href="/" 
                className="flex items-center"
                onClick={() => {
                  captureEvent('topnav_coda_logo_clicked', {
                    section: 'top_navigation',
                    page: typeof window !== 'undefined' ? window.location.pathname : ''
                  });
                }}
              >
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

            {/* Regular navigation - always visible, smaller on small screens */}
            <nav className="flex sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 items-center space-x-2 sm:space-x-4 md:space-x-8">
              <div className="relative">
                <Link
                  href="/company"
                  className="text-gray-700 hover:text-gray-900 text-xs sm:text-sm font-medium"
                  onMouseEnter={() => handleMouseEnter('company')}
                  onClick={() => {
                    captureEvent('topnav_company_clicked', {
                      section: 'top_navigation',
                      page: typeof window !== 'undefined' ? window.location.pathname : ''
                    });
                  }}
                >
                  Company
                </Link>
              </div>
              <div className="relative">
                <Link
                  href="/why-coda"
                  className="text-gray-700 text-xs sm:text-sm font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    captureEvent('topnav_why_coda_clicked', {
                      section: 'top_navigation',
                      page: typeof window !== 'undefined' ? window.location.pathname : ''
                    });
                    window.location.href = '/why-coda';
                  }}
                >
                  World Models
                </Link>
              </div>
              <div className="relative">
                <Link
                  href="/careers"
                  className="text-gray-700 hover:text-gray-900 text-xs sm:text-sm font-medium"
                  onMouseEnter={() => handleMouseEnter('careers')}
                  onClick={() => {
                    captureEvent('topnav_careers_clicked', {
                      section: 'top_navigation',
                      page: typeof window !== 'undefined' ? window.location.pathname : ''
                    });
                  }}
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
                <Link 
                  href="/robotic_world_models" 
                  className="block p-6 rounded-l-lg hover:bg-gray-200"
                  onClick={() => {
                    captureEvent('topnav_robotic_world_models_clicked', {
                    parent_menu: 'infrastructure',
                      section: 'top_navigation',
                      page: typeof window !== 'undefined' ? window.location.pathname : ''
                    });
                  }}
                >
                  <div className="font-medium text-gray-800 mb-2">Robotic World Models</div>
                  <p className="text-sm text-black">Scale your teleoperation data at the lowest costs</p>
                </Link>
                <Link 
                  href="/data_weighting" 
                  className="block p-6 hover:bg-gray-200 md:border-t-0 border-t border-gray-300"
                  onClick={() => {
                    captureEvent('topnav_data_weighting_clicked', {
                      parent_menu: 'infrastructure',
                      section: 'top_navigation',
                      page: typeof window !== 'undefined' ? window.location.pathname : ''
                    });
                  }}
                >
                  <div className="font-medium text-gray-800 mb-2">Data Weighting</div>
                  <p className="text-sm text-black">Autonomously select the best data generated by the world model</p>
                </Link>
                <Link 
                  href="/infrastructure/ecot" 
                  className="block p-6 hover:bg-gray-200 md:border-t-0 border-t border-gray-300"
                  onClick={() => {
                    captureEvent('topnav_embodied_reasoning_clicked', {
                      parent_menu: 'infrastructure',
                      section: 'top_navigation',
                      page: typeof window !== 'undefined' ? window.location.pathname : ''
                    });
                  }}
                >
                  <div className="font-medium text-gray-800 mb-2">Embodied Reasoning</div>
                  <p className="text-sm text-black">Improve your robot policies by adding reasoning to your datasets</p>
                </Link>
                <Link 
                  href="/vla_arena" 
                  className="block p-6 rounded-r-lg hover:bg-gray-200 md:border-t-0 border-t border-gray-300"
                  onClick={() => {
                    captureEvent('topnav_vla_arena_clicked', {
                      parent_menu: 'infrastructure',
                      section: 'top_navigation',
                      page: typeof window !== 'undefined' ? window.location.pathname : ''
                    });
                  }}
                >
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
                <div 
                  onClick={(e) => {
                    handleDepartmentClick('Engineering', e);
                    captureEvent('topnav_engineering_department_clicked', {
                      parent_menu: 'careers',
                      section: 'top_navigation',
                      page: typeof window !== 'undefined' ? window.location.pathname : ''
                    });
                  }} 
                  className="block p-6 rounded-l-lg hover:bg-gray-200 cursor-pointer"
                >
                  <div className="font-medium text-gray-800 mb-2">Engineering</div>
                  <p className="text-sm text-black">Build the infrastructure to advance robotics</p>
                </div>
                <div 
                  onClick={(e) => {
                    handleDepartmentClick('Research', e);
                    captureEvent('topnav_research_department_clicked', {
                      parent_menu: 'careers',
                      section: 'top_navigation',
                      page: typeof window !== 'undefined' ? window.location.pathname : ''
                    });
                  }} 
                  className="block p-6 hover:bg-gray-200 md:border-t-0 border-t border-gray-300 cursor-pointer"
                >
                  <div className="font-medium text-gray-800 mb-2">Research</div>
                  <p className="text-sm text-black">Hard solve problems by pushing our knowledge of what is currently capable</p>
                </div>
                <div 
                  onClick={(e) => {
                    handleDepartmentClick('Product', e);
                    captureEvent('topnav_product_department_clicked', {
                      parent_menu: 'careers',
                      section: 'top_navigation',
                      page: typeof window !== 'undefined' ? window.location.pathname : ''
                    });
                  }} 
                  className="block p-6 hover:bg-gray-200 md:border-t-0 border-t border-gray-300 cursor-pointer"
                >
                  <div className="font-medium text-gray-800 mb-2">Product</div>
                  <p className="text-sm text-black">Provide the best experience for roboticists worldwide</p>
                </div>
                <div 
                  onClick={(e) => {
                    handleDepartmentClick('Media', e);
                    captureEvent('topnav_media_department_clicked', {
                      parent_menu: 'careers',
                      section: 'top_navigation',
                      page: typeof window !== 'undefined' ? window.location.pathname : ''
                    });
                  }} 
                  className="block p-6 rounded-r-lg hover:bg-gray-200 md:border-t-0 border-t border-gray-300 cursor-pointer"
                >
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
                <Link 
                  href="/why-coda" 
                  className="block p-6 rounded-l-lg hover:bg-gray-200"
                  onClick={() => {
                    captureEvent('topnav_why_build_coda_clicked', {
                      parent_menu: 'company',
                      section: 'top_navigation',
                      page: typeof window !== 'undefined' ? window.location.pathname : ''
                    });
                  }}
                >
                  <div className="font-medium text-gray-800 mb-2">Why Build Coda Robotics</div>
                  <p className="text-sm text-black">Understand why we're doubling down on infrastructure for AI Robotics</p>
                </Link>
                <Link 
                  href="/company" 
                  className="block p-6 hover:bg-gray-200 md:border-t-0 border-t border-gray-300"
                  onClick={() => {
                    captureEvent('topnav_mission_vision_clicked', {
                      parent_menu: 'company',
                      section: 'top_navigation',
                      page: typeof window !== 'undefined' ? window.location.pathname : ''
                    });
                  }}
                >
                  <div className="font-medium text-gray-800 mb-2">Mission, Vision, Culture, Core Values</div>
                  <p className="text-sm text-black">Understand our way of approaching hard problems</p>
                </Link>
                <div 
                  onClick={(e) => {
                    handleContactClick(e);
                    captureEvent('topnav_contact_email_clicked', {
                      parent_menu: 'company',
                      section: 'top_navigation',
                      page: typeof window !== 'undefined' ? window.location.pathname : ''
                    });
                  }} 
                  className="block p-6 rounded-r-lg hover:bg-gray-200 md:border-t-0 border-t border-gray-300 cursor-pointer"
                >
                  <div className="font-medium text-gray-800 mb-2">Contact</div>
                  <p className="text-sm text-black">Get in touch with our founding team</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}