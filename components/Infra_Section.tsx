'use client';

import '@/styles/globals.css'
import { useState, useEffect, useRef } from 'react';
import MainArticle from '@components/main_article';
import SideArticle from '@components/side_article';
import StayUpdated from '@components/footer_nav/stay_update';
import ExternalLinks from '@components/footer_nav/external_links';
import Image from 'next/image';
import Link from 'next/link';

export interface Article {
  title: string;
  date: string;
  shortDescription: string;
  href: string;
  image: string;
}

interface Infra_SectionProps {
  featuredMain: Article;
  featuredSide1: Article;
  featuredSide2: Article;
}

export default function Infra_Section({ featuredMain, featuredSide1, featuredSide2 }: Infra_SectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const slideContainerRef = useRef<HTMLDivElement>(null);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchEndX.current - touchStartX.current;
    const minSwipeDistance = 50;

    if (swipeDistance > minSwipeDistance && currentIndex > 0) {
      // Swiped right
      setCurrentIndex(currentIndex - 1);
    } else if (swipeDistance < -minSwipeDistance && currentIndex < 2) {
      // Swiped left
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Custom VLA Arena component for mobile view
  const CustomVLAComponent = () => {
    return (
      <Link href={featuredSide1.href} className="block group">
        <div
          className="
            relative
            w-full
            aspect-[1/1.2]
            overflow-hidden
            rounded-[5px]
          "
        >
          <Image
            src={featuredSide1.image}
            alt={featuredSide1.title}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute left-4 bottom-[24%] text-black z-10">
            <time className="coda-font text-[clamp(5px,2vw,14px)]">{featuredSide1.date}</time>
            <h3 className="mt-1 max-w-[75%] coda-font text-[clamp(5px,5vw,22px)] leading-none">
              {featuredSide1.title}
            </h3>
          </div>
        </div>
      </Link>
    );
  };

  // List of all articles with new filter categories
  const allArticles = [
    {
      type: 'main',
      title: featuredMain.title,
      filter: 'Data Engines',
      component: <MainArticle
        date={featuredMain.date}
        title={featuredMain.title}
        image_url={'/article_images/embodied-reasoning.png'}
        href={featuredMain.href}
        description="Improve your robot polciies by adding reasoning to your datasets"
      />
    },
    {
      type: 'tooling',
      title: 'SMCP',
      filter: 'Tooling',
      component: <SideArticle
        title="SMCP"
        date={''}
        image_url={'/article_images/SMCP.png'}
        href={'/smcp'}
        description="Co-design your environments 20x faster using our simulation MCP"
      />
    },
    {
      type: 'side2',
      title: featuredSide2.title,
      filter: 'Data Engines',
      component: <SideArticle
        title="Robotic World Models"
        date={''}
        image_url={'/article_images/Robotic World Models.png'}
        href={'/robotic_world_models'}
        description="Scale your teleoperation data at the lowest costs"
      />
    },
    {
      type: 'side1',
      title: featuredSide1.title,
      filter: 'Evaluations',
      component: <SideArticle
        title={featuredSide1.title}
        date={featuredSide1.date}
        image_url={'/article_images/vla-arena.png'}
        href={featuredSide1.href}
        description="Evaluate VLAs head-to-head in an in-browser physics simulation"
      />
    }
  ];

  // Filtered articles for desktop
  const filteredArticles = selectedFilter === 'All'
    ? allArticles
    : allArticles.filter(article => article.filter === selectedFilter);

  // Pagination for mobile carousel
  const articlesPerPage = 3;
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const [carouselPage, setCarouselPage] = useState(0);
  const pagedArticles = filteredArticles.slice(carouselPage * articlesPerPage, (carouselPage + 1) * articlesPerPage);

  return (
    <div className="flex min-h-fit">
      <main className="flex-1">
        <section className="max-w-[65rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="relative">
            <h1 className="text-[calc(2.5rem)] pt-4 leading-[1.2] my-4 w-full transition-all duration-300 ease-in-out text-left">
              INFRASTRUCTURE
            </h1>

            {/* Filter pill buttons */}
            <div className="mb-8 flex flex-wrap gap-4">
              {[
                { label: 'All', value: 'All' },
                { label: 'Data Engines', value: 'Data Engines' },
                { label: 'Evaluations', value: 'Evaluations' },
                { label: 'Tooling', value: 'Tooling' },
              ].map(option => (
                <button
                  key={option.value}
                  onClick={() => setSelectedFilter(option.value)}
                  className={`px-5 py-2 rounded-lg border transition-colors duration-200 focus:outline-none font-normal text-base
                    ${selectedFilter === option.value
                      ? 'border-black bg-white text-black'
                      : 'border-gray-400 bg-white text-black hover:bg-gray-100'}
                  `}
                  style={{ minWidth: 'fit-content' }}
                >
                  {option.label}
                </button>
              ))}
            </div>

            {/* Mobile view - Show only current article with swipe */}
            <div className="sm:hidden">
              {filteredArticles.length === 0 ? (
                <div className="text-center py-10 text-gray-600">
                  We're busy cooking something up! 
                </div>
              ) : (
                <>
                  <div className="mx-auto max-w-[95%] overflow-hidden">
                    {pagedArticles.map((article, idx) => (
                      <div key={idx}>{article.component}</div>
                    ))}
                  </div>
                  {/* Page number navigation */}
                  {totalPages > 1 && (
                    <div className="flex justify-center mt-4 space-x-2">
                      {Array.from({ length: totalPages }).map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCarouselPage(idx)}
                          className={`px-2 py-1 rounded-full border ${carouselPage === idx ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-400'}`}
                        >
                          {idx + 1}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Original grid layout at sm and above */}
            <div className="hidden sm:grid grid-cols-3 gap-6">
              {filteredArticles.length === 0 ? (
                <div className="col-span-3 text-center py-10 text-gray-600">
                  We're busy cooking something up! 
                </div>
              ) : (
                filteredArticles.map((article, idx) => (
                  <div key={idx}>{article.component}</div>
                ))
              )}
            </div>
          </div>
          
          {/* Footer section - aligned with content above */}
          <div className="relative mt-20">
            <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-20">
              {/* Email subscription section */}
              <div className="w-full md:w-1/2">
                <StayUpdated />
              </div>

              {/* Navigation section */}
              <nav className="w-full md:w-1/2 flex flex-col sm:flex-row space-x-0 sm:space-x-[50px] pt-4">
                <ExternalLinks />
              </nav>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}