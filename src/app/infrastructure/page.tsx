'use client';

import '../styles/globals.css';
import { useState } from 'react';
import MainArticle from './components/main_article';
import SideArticle from './components/side_article';
import ArticleList from './components/article_list';
import MainImage from './assets/article_images/robo_article_image_1.jpg';
import SideImage1 from './assets/article_images/robo_article_image_2.png';
import SideImage2 from './assets/article_images/robo_article_image_3.png';
import SideNav from './components/side_nav';

const articles = [
  {
    title: 'From Reflex to Reasoning',
    date: 'March 15, 2023',
    description: 'We transferred end-to-end policies based hybrid systems that incorporate symbolic reasoning, enabling more structured learning.',
    href: '/infrastructure/reflex-to-reasoning'
  },
  {
    title: 'Policy-Aware Data Filtering at Scale',
    date: 'March 18, 2023',
    description: 'We developed a selective filtering facing law that conditions data selection on current policy uncertainty. This reduced overfitting in high-confidence regions by 35% on real-world navigation agents.',
    href: '/infrastructure/policy-aware-filtering'
  },
  {
    title: 'Logs to Curriculum',
    date: 'April 8, 2023',
    description: 'We implemented an automated data curriculum builder that sequences training data by difficulty using logged model errors and task level success.',
    href: '/infrastructure/logs-curriculum'
  }
];

export default function Infra_Section() {
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
    <section className="w-full px-4 sm:px-6 lg:px-8 -translate-x-60">
      <div className="px-0 lg:px-22">
      </div>
      
      <div className="relative px-4 sm:px-6 md:px-8 lg:px-50">
        <div className="grid grid-cols-[1fr_3fr] gap-8">
          <SideNav />
          <div>
            <h1 className="coda-font mb-12">INFRASTRUCTURE</h1>

            {/* Carousel layout with arrows below sm */}
            <div className="sm:hidden relative overflow-hidden">
              <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                <div className="flex-shrink-0 w-full">
                  <MainArticle
                    date="April 20, 2023"
                    title="Embodied Reasoning"
                    image_url={MainImage}
                    href="/infrastructure/embodied-reasoning"
                  />
                </div>
                <div className="flex-shrink-0 w-full">
                  <SideArticle
                    title="Policy Distribution"
                    date="May 10, 2025"
                    image_url={SideImage1}
                    href="/infrastructure/policy-distribution"
                  />
                </div>
                <div className="flex-shrink-0 w-full">
                  <SideArticle
                    title="Scaling Synthetic Data Generation"
                    date="May 12, 2025"
                    image_url={SideImage2}
                    href="/infrastructure/synthetic-data"
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
                date="April 20, 2023"
                title="Embodied Reasoning"
                image_url={MainImage}
                href="/infrastructure/embodied-reasoning"
              />
              <div className="space-y-7">
                <SideArticle
                  title="Policy Distribution"
                  date="May 10, 2025"
                  image_url={SideImage1}
                  href="/infrastructure/policy-distribution"
                />
                <SideArticle
                  title="Scaling Synthetic Data Generation"
                  date="May 12, 2025"
                  image_url={SideImage2}
                  href="/infrastructure/synthetic-data"
                />
              </div>
            </div>

            <ArticleList articles={articles} />
          </div>
        </div>
      </div>
      <div className="px-0 lg:px-30">
      </div>
    </section>
  );
}