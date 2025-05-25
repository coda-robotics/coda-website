'use client';

import React, { useRef, useEffect, useState, Suspense } from 'react';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import posthog from 'posthog-js';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import '../styles/globals.css';
import Head from 'next/head';
import Link from 'next/link';

// Page view tracking
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

// TrackedButton component
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
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
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
  const SWAP_INTERVAL = 5000; // 3s between phrase changes
  const ANIM_DURATION = 1.2; // 1.2s instead of 0.6s
  const DEPTH = 40; // Define DEPTH value

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const phrases = ['DATA INFRASTRUCTURE', 'WORLD MODELS', 'DATA WEIGHTING', 'EMBODIED REASONING', 'EVALUATIONS'];
  const [currentPhrase, setCurrentPhrase] = useState(0);

  // Video playback rate
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 1.75;
  }, []);

  // Phrase animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, SWAP_INTERVAL);
    return () => clearInterval(interval);
  }, [SWAP_INTERVAL]);

  // Pyramid animation variants
  const floatTop: Variants = {
    animate: {
      x: [0, 18, 0, -18, 0],
      y: [0, -16, 0, 16, 0],
      scale: [1, 1.04, 1, 1.04, 1],
      transition: { duration: 20, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  const floatMid: Variants = {
    animate: {
      x: [0, -20, 0, 20, 0],
      y: [0, 20, 0, -20, 0],
      scale: [1, 1.06, 1, 1.06, 1],
      transition: { duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 1 },
    },
  };

  const floatBottom: Variants = {
    animate: {
      x: [0, 16, 0, -16, 0],
      y: [0, 18, 0, -18, 0],
      scale: [1, 1.05, 1, 1.05, 1],
      transition: { duration: 23.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
    },
  };

  const cubeVariants: Variants = {
    initial: {
      rotateX: -90,
      translateZ: DEPTH,
      opacity: 0,
      transition: { duration: ANIM_DURATION, ease: 'easeInOut' },
    },
    animate: {
      rotateX: 0,
      translateZ: 0,
      opacity: 1,
      transition: { duration: ANIM_DURATION, ease: 'easeInOut' },
    },
    exit: {
      rotateX: 90,
      translateZ: DEPTH,
      opacity: 0,
      transition: { duration: ANIM_DURATION, ease: 'easeInOut' },
    },
  };

  return (
    <div className="text-black font-inter">
      <Suspense fallback={null}>
        <TrackPageView />
      </Suspense>
      <Head>
        <title>CODA</title>
        <meta name="description" content="CODA delivers data infrastructure for AI robotics." />
      </Head>

      <main className="px-4 sm:px-6 lg:px-28 py-10">
        {/* Hero Section */}
        <section className="relative flex justify-center items-center text-center mt-8 px-4">
          <div className="relative w-full max-w-[48rem] mx-auto">
            {/* Top Pyramid */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: .8 }}
            >
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-[10rem] sm:-translate-x-[10rem] md:-translate-x-[17rem] -translate-y-[4rem] z-0"
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
            </motion.div>
            {/* Mid Pyramid */}
            <motion.div
              className="absolute top-1/3 left-1/2 transform translate-x-[8rem] sm:translate-x-[10rem]  md:translate-x-[10rem] sm:-translate-y-[13rem] -translate-y-[8rem] z-0"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: .8 }}
            >
              <motion.div
                variants={floatMid}
                animate="animate"
                transition={{ delay: 0.9 }}
              >
                <Image
                  src="/midpyramid.png"
                  alt="Middle Pyramid"
                  width={500}
                  height={500}
                  className="w-[200px] md:w-[300px] h-auto"
                />
              </motion.div>
            </motion.div>
            {/* Bottom Pyramid */}
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-[18rem] sm:-translate-x-[15rem] md:-translate-x-[25rem] -translate-y-[15rem] sm:-translate-y-[13rem] md:-translate-y-[13rem] z-0"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: .8 }}
            >
              <motion.div
                variants={floatBottom}
                animate="animate"
                transition={{ delay: 1.0 }}
              >
                <Image
                  src="/bottompyramid.png"
                  alt="Bottom Pyramid"
                  width={600}
                  height={600}
                  className="w-[120px] md:w-[220px] h-auto"
                />
              </motion.div>
            </motion.div>
            {/* Rest of the section (text, links, etc.) */}
            <div className="relative z-10 px-4">
              <p className="text-[14px] md:text-[15px] mb-8">
                Announcing{' '}
                <Link href="/infrastructure/ecot" className="underline underline-offset-2">
                  Embodied Reasoning <span>↗</span>
                </Link>
              </p>
              <span
                className="
                  text-[clamp(30px,4vw,45px)]
                  pt-3 md:pt-4
                  leading-[1.2]
                  my-3 md:my-4
                  transition-all duration-200 ease-in-out
                "
              >
                CODA DELIVERS
                <br />
                <div
                  className="inline-block overflow-show"
                  style={{
                    perspective: 800,
                    display: 'inline-block',
                    verticalAlign: 'bottom',
                  }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={phrases[currentPhrase]}
                      variants={cubeVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      style={{
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'hidden',
                        transformOrigin: 'bottom center',
                      } as React.CSSProperties}
                      className="inline-block whitespace-nowrap"
                    >
                      {phrases[currentPhrase]}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <br /> FOR AI ROBOTICS
              </span>
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
              <p className="text-[15px] mb-10 leading-[2] max-w-[540px] mx-auto transition-all duration-300 ease-in-out overflow-show">
                Coda builds advanced data engines and evaluation systems to power the next generation of robotic foundation models.
                We specialize in creating scalable data pipelines that enable positive transfer from scale, addressing
                the unique challenges of robotics AI. From world models to embodied reasoning, we're building the
                infrastructure that bridges the gap between today's robotics research and tomorrow's embodied general intelligence.
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

        {/* Highlights Section */}
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