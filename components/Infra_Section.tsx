'use client';

import '@/styles/globals.css'
import { useState, useEffect, useRef } from 'react';
import MainArticle from '@components/main_article';
import SideArticle from '@components/side_article';
import SideNav from '@components/side_nav';
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
          <div className="absolute left-4 bottom-4 text-black">
            <time className="coda-font text-[clamp(5px,2vw,14px)]">{featuredSide1.date}</time>
            <h3 className="mt-1 max-w-[75%] coda-font text-[clamp(5px,5vw,22px)] leading-none">
              {featuredSide1.title}
            </h3>
          </div>
        </div>
      </Link>
    );
  };

  // Array of articles for easier rendering on mobile
  const articles = [
    {
      component: 
        <MainArticle
          date={featuredMain.date}
          title={featuredMain.title}
          image_url={featuredMain.image}
          href={featuredMain.href}
        />
    },
    {
      component: currentIndex === 1 ? 
        <CustomVLAComponent /> :
        <SideArticle
          title={featuredSide1.title}
          date={featuredSide1.date}
          image_url={featuredSide1.image}
          href={featuredSide1.href}
        />
    },
    {
      component: 
        <SideArticle
          title={featuredSide2.title}
          date={featuredSide2.date}
          image_url={featuredSide2.image}
          href={featuredSide2.href}
        />
    }
  ];

  return (
    <div className="flex min-h-fit">
      <SideNav />
      
      <main className="flex-1 pl-3 sm:pl-32">
        <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 mb-20">
          <div className="relative px-3 sm:px-6 md:px-8 lg:px-50">
            <h1 className="text-[calc(2.5rem)] pt-4 leading-[1.2] my-4 w-full transition-all duration-300 ease-in-out text-left">
              INFRASTRUCTURE
            </h1>

            {/* Mobile view - Show only current article with swipe */}
            <div className="sm:hidden">
              <div 
                ref={slideContainerRef}
                className="mx-auto max-w-[95%] overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {articles[currentIndex].component}
              </div>
              
              {/* Dots navigation */}
              <div className="flex justify-center mt-4 space-x-3">
                {articles.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      currentIndex === index ? 'bg-black w-4' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Original grid layout at sm and above */}
            <div className="hidden sm:grid grid-cols-[3fr_2fr] gap-6">
              <MainArticle
                date={featuredMain.date}
                title={featuredMain.title}
                image_url={featuredMain.image}
                href={featuredMain.href}
              />
              <div className="space-y-7">
                <SideArticle
                  title={featuredSide1.title}
                  date={featuredSide1.date}
                  image_url={featuredSide1.image}
                  href={featuredSide1.href}
                />
                <SideArticle
                  title={featuredSide2.title}
                  date={featuredSide2.date}
                  image_url={featuredSide2.image}
                  href={featuredSide2.href}
                />
              </div>
            </div>
          </div>
          
          {/* Footer section - aligned with content above */}
          <div className="relative px-3 sm:px-6 md:px-8 lg:px-50 mt-20">
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
        </div>
      </main>
    </div>
  );
}