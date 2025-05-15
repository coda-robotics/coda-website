'use client';

import '@/styles/globals.css'
import { useState } from 'react';
import MainArticle from '@components/main_article';
import SideArticle from '@components/side_article';
import SideNav from '@components/side_nav';
import StayUpdated from '@components/footer_nav/stay_update';
import ExternalLinks from '@components/footer_nav/external_links';

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

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < 2) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="flex min-h-fit">
      <SideNav />
      
      <main className="flex-1 pl-3 sm:pl-32">
        <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 mb-20">
          <div className="relative px-3 sm:px-6 md:px-8 lg:px-50">
            <h1 className="text-[calc(2.5rem)] pt-4 leading-[1.2] my-4 w-full transition-all duration-300 ease-in-out text-left">
              INFRASTRUCTURE
            </h1>

            {/* Carousel layout with arrows below sm */}
            <div className="sm:hidden relative overflow-hidden w-full">
              <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                <div className="flex-shrink-0 w-full">
                  <MainArticle
                    date={featuredMain.date}
                    title={featuredMain.title}
                    image_url={featuredMain.image}
                    href={featuredMain.href}
                  />
                </div>
                <div className="flex-shrink-0 w-full">
                  <SideArticle
                    title={featuredSide1.title}
                    date={featuredSide1.date}
                    image_url={featuredSide1.image}
                    href={featuredSide1.href}
                  />
                </div>
                <div className="flex-shrink-0 w-full">
                  <SideArticle
                    title={featuredSide2.title}
                    date={featuredSide2.date}
                    image_url={featuredSide2.image}
                    href={featuredSide2.href}
                  />
                </div>
              </div>
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2`}
              >
                ←
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === 2}
                className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2`}
              >
                →
              </button>
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