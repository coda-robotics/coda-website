'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import posthog from 'posthog-js';
import { motion, Variants } from 'framer-motion';
import '../styles/globals.css';
import Head from 'next/head';
import Link from 'next/link';

// Page view tracking (unchanged)
function TrackPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      let url = window.origin + pathname;
      const search = searchParams.toString();
      if (search) url += '?' + search;

      posthog.capture('$pageview', {
        $current_url: url,
        page_title: document.title,
        page_path: pathname,
      });

      if (pathname === '/') {
        posthog.capture('home_page_viewed', {
          referrer: document.referrer,
          url: window.location.href,
        });
      }
    }
  }, [pathname, searchParams]);

  return null;
}

// TrackedButton component (unchanged)
type TrackedButtonProps = {
  children: React.ReactNode;
  eventName: string;
  eventProperties?: Record<string, any>;
  onClick?: () => void;
  className?: string;
};
const TrackedButton = ({
  children,
  eventName,
  eventProperties = {},
  onClick,
  className = '',
  ...props
}: TrackedButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const handleClick = (e:

 React.MouseEvent<HTMLButtonElement>) => {
    posthog.capture(eventName, {
      ...eventProperties,
      element: (e.target as HTMLElement).textContent,
      timestamp: new Date().toISOString(),
    });
    onClick?.(e);
  };
  return (
    <button className={className} onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const phrases = ['DATA INFRASTRUCTURE', 'WORLD MODELS', 'DATA WEIGHTING', 'EMBODIED REASONING', 'EVALUATIONS'];

  // Video playback rate (unchanged)
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 1.75;
  }, []);

  // Phrase animation (unchanged)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Pyramid animation variants (unchanged)
  const floatTop: Variants = {
    animate: {
      x: [0, 8, 0, -8, 0],
      y: [0, -6, 0, 6, 0],
      scale: [1, 1.04, 1, 1.04, 1],
      transition: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  const floatMid: Variants = {
    animate: {
      x: [0, -12, 0, 12, 0],
      y: [0, 10, 0, -10, 0],
      scale: [1, 1.06, 1, 1.06, 1],
      transition: { duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 },
    },
  };

  const floatBottom: Variants = {
    animate: {
      x: [0, 6, 0, -6, 0],
      y: [0, 8, 0, -8, 0],
      scale: [1, 1.05, 1, 1.05, 1],
      transition: { duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
    },
  };

  return (
    <div className="text-black font-inter">
      <TrackPageView />

      <Head>
        <title>CODA</title>
        <meta name="description" content="CODA delivers data infrastructure for AI robotics." />
      </Head>

      <main className="px-4 sm:px-6 lg:px-28 py-5">
        {/* Hero Section (unchanged) */}
        <section className="relative flex justify-center items-center text-center mt-8 px-4">
          <div className="relative w-full max-w-[48rem] mx-auto">
            <motion.div
              className="absolute top-0 left-1/2 transform -translate-x-[17rem] -translate-y-[2.5rem] z-0"
              variants={floatTop}
              animate="animate"
            >
              <Image
                src="/toppyramid.png"
                alt="Top Pyramid"
                width={400}
                height={400}
                className="w-[50px] md:w-[150px] h-auto"
              />
            </motion.div>
            <motion.div
              className="absolute top-1/3 left-1/2 transform translate-x-[10rem] -translate-y-[12rem] z-0"
              variants={floatMid}
              animate="animate"
            >
              <Image
                src="/midpyramid.png"
                alt="Middle Pyramid"
                width={500}
                height={500}
                className="w-[200px] md:w-[300px] h-auto"
              />
            </motion.div>
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-[25rem] -translate-y-[13rem] z-0"
              variants={floatBottom}
              animate="animate"
            >
              <Image
                src="/bottompyramid.png"
                alt="Bottom Pyramid"
                width={600}
                height={600}
                className="w-[120px] md:w-[220px] h-auto"
              />
            </motion.div>
            <div className="relative z-10 px-4">
              <p className="text-[14px] md:text-[15px]">
                Announcing{' '}
                <Link href="/infrastructure/ecot" className="underline underline-offset-2">
                  Embodied Reasoning <span>↗</span>
                </Link>
              </p>
              <h1 className="text-[calc(1.8rem)] sm:text-[calc(2.2rem)] md:text-[calc(2.5rem)] pt-3 md:pt-4 leading-[1.2] my-3 md:my-4 transition-all duration-300 ease-in-out h1-custom-2">
                CODA DELIVERS
                <br />
                <motion.span
                  key={phrases[currentPhrase]}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  {phrases[currentPhrase]}
                </motion.span>
                <br /> FOR AI ROBOTICS
              </h1>
              <div className="flex justify-center flex-wrap gap-x-6 md:gap-x-8 my-6 md:my-8 font-inter">
                <Link
                  href="/infrastructure"
                  className="text-black text-[18px] md:text-[20px] underline underline-offset-4 decoration-[1.5px]"
                >
                  Infrastructure
                </Link>
                <Link
                  href="/careers"
                  className="text-black text-[18px] md:text-[20px] underline underline-offset-4 decoration-[1.5px]"
                >
                  Join Us
                </Link>
              </div>
              <p className="text-[15px] mb-10 leading-[2] max-w-[540px] mx-auto transition-all duration-300 ease-in-out">
                Coda delivers high-quality, large-scale data pipelines to power robotic neural networks.
                We specialize in collecting, labeling, and structuring the complex datasets needed for
                intelligent machines to learn and operate in the real world. From perception to
                decision-making, we accelerate robotics innovation by providing the data infrastructure AI systems need to continuously evolve.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="https://x.com/juliansaks" target="_blank" rel="noopener noreferrer">
                  <Image src="/xlogo.png" alt="X logo" width={24} height={24} />
                </a>
                <a href="https://www.linkedin.com/in/juliansaks/" target="_blank" rel="noopener noreferrer">
                  <Image src="/linkedinlogo.png" alt="LinkedIn logo" width={24} height={24} />
                </a>
                <a href="https://huggingface.co/Coda-Robotics" target="_blank" rel="noopener noreferrer">
                  <Image src="/hf.png" alt="Hugging Face logo" width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Commented out Flywheel Section */}
        {/*
        <div className="relative">
          <section className="grid grid-cols-2 sm:grid-cols-2 px-[18rem] gap-y-16 mt-[8rem] mb-[8rem]">
            <div className="relative w-full h-[200px]">
              <Image
                src="/dataweighting.png"
                alt="data weighting"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-full h-[200px]">
              <Image
                src="/embodiedreasoning.png"
                alt="embodied reasoning"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-full h-[200px]">
              <Image
                src="/worldmodels.png"
                alt="world models"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-full h-[200px]">
              <Image
                src="/vlaarena.png"
                alt="vla arena"
                fill
                className="object-contain"
              />
            </div>
          </section>
          
          {arrows.map((arrow, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentArrow === index ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="absolute"
              style={{ top: arrow.top, left: arrow.left }}
            >
              <Image
                src="/arrow.png"
                alt={arrow.alt}
                width={24}
                height={24}
                className={arrow.rotation}
              />
            </motion.div>
          ))}
        </div>
        */}

        {/* Highlights Section (unchanged) */}
        <section className="mt-8 md:mt-36 px-4 sm:px-6 lg:px-20">
          <div className="max-w-[48rem] w-full mx-auto flex flex-col md:flex-row">
            <div className="hidden md:block md:pr-6 flex-shrink-0 md:w-[400px] lg:w-fit">
              <div className="aspect-square">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  onContextMenu={(e) => e.preventDefault()}
                  className="object-cover mt-[-6rem] ml-[-3rem] w-[500px] h-[500px]"
                  style={{
                    backgroundColor: 'transparent',
                    objectPosition: 'center center',
                  }}
                >
                  <source src="/codalogo.webm" type="video/webm" />
                </video>
              </div>
            </div>
            <div className="mt-4 md:mt-0 md:ml-0 flex-1">
              <h1 className="text-[28px] md:text-[35px]">Highlights</h1>
              <ul className="mt-4 md:mt-6 space-y-4 md:space-y-6 max-w-md">
                <li className="border-b pb-4">
                  <div className="pb-[4px]">
                    <Link href="/why-coda" className="block text-[18px]">
                      Why Build Coda Robotics?
                    </Link>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Why data infrastructure is key to advance embodied AI
                  </p>
                </li>
                <li className="border-b pb-4">
                  <div className="pb-[4px]">
                    <Link href="/infrastructure/ecot" className="block text-[18px]">
                      Embodied Reasoning
                    </Link>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Achieve +30% policy improvements with embodied reasoning
                  </p>
                </li>
                <li className="border-b pb-4">
                  <div className="pb-[4px]">
                    <Link href="/robotic_world_models" className="block text-[18px]">
                      Robotic World Models
                    </Link>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Scale your teleoperation data at the lowest costs
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}