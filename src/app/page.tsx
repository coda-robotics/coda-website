'use client';

import '../styles/globals.css';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-black font-inter">
      <Head>
        <title>CODA</title>
        <meta name="description" content="CODA delivers data infrastructure for AI robotics." />
      </Head>

      {/* Header without navbar */}

      {/* Main Section */}
      <main className="px-4 sm:px-6 lg:px-28 py-5">
        {/* Hero Section */}
        <section className="relative flex items-center overflow-hidden">
          <div className="max-w-[48rem] w-full flex items-center relative mx-auto">
            {/* Text Column: shrinks responsively */}
            <div className="w-full sm:w-11/12 md:w-4/5 lg:w-3/5 xl:w-1/2 z-1">
              <p className="text-[14px] md:text-[15px]">
                Announcing{' '}
                <Link href="/infrastructure/ecot" className="underline underline-offset-2">Embodied Reasoning <span>↗</span></Link>
              </p>
              <h1 className="text-[calc(1.8rem)] sm:text-[calc(2.2rem)] md:text-[calc(2.5rem)] pt-3 md:pt-4 leading-[1.2] my-3 md:my-4 w-full transition-all duration-300 ease-in-out">
                CODA DELIVERS  
                <br /> DATA INFRASTRUCTURE 
                <br /> FOR AI ROBOTICS
              </h1>
              <div className="flex flex-wrap gap-x-6 md:gap-x-8 my-6 md:my-8 font-inter">
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
              <p className="text-[22px] mb-10 leading-[2] w-full sm:w-[540px] transition-all duration-300 ease-in-out">
                Data infrastructure to build better
                <br />
                robotic foundation models faster.
              </p>
              <div className="flex space-x-4">
                <a href="https://x.com/juliansaks" target="_blank" rel="noopener noreferrer">
                  <img src="/xlogo.png" alt="X logo" className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/juliansaks/" target="_blank" rel="noopener noreferrer">
                  <img src="/linkedinlogo.png" alt="LinkedIn logo" className="w-6 h-6" />
                </a>
                <a href="https://huggingface.co/Coda-Robotics" target="_blank" rel="noopener noreferrer">
                  <img src="/hf.png" alt="Hugging Face logo" className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Hero Image: shifts left responsively, hides below md */}
            <div
              className="absolute top-0 right-0 hidden md:block md:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-1/3 transition-transform duration-300 ease-in-out
              md:translate-x-0 lg:-translate-x-12 xl:-translate-x-24 
              md:opacity-100"
            >
              <img
                src="/homeimg.png"
                alt="Hero"
                className="w-[500px] h-[500px] max-w-[700px]"
              />
            </div>
          </div>
        </section>

        {/* TODO: add this back in once have all the notebooks done (x3 of them & ideally x6) */}
        {/* Build with Coda Section - Commented out for later use */}
        {/*
        <section className="mt-16 mb-16">
          <div className="py-16">
            <h2 className="text-center text-[28px] md:text-[35px] mb-12">
              Improve any robotic foundation model with Coda
            </h2>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { 
                    title: "OpenVLA", 
                    desc: "Fine-tune a vision-language model on your robotics data",
                    link: "/notebooks/openvla"
                  },
                  { 
                    title: "ACT", 
                    desc: "Fine-tune an action transformer for embodied tasks",
                    link: "/notebooks/act"
                  },
                  { 
                    title: "Pi-0", 
                    desc: "Improve reasoning capabilities for planning agents",
                    link: "/notebooks/pi-0"
                  },
                  { 
                    title: "Gr00t N1", 
                    desc: "Adapt embodied LLMs for your specific hardware",
                    link: "/notebooks/gr00t"
                  },
                  { 
                    title: "RDT-1B", 
                    desc: "Fine-tune diffusion models for robotic applications",
                    link: "/notebooks/rdt"
                  },
                  { 
                    title: "RT-2", 
                    desc: "Adapt robotic transformers to new environments",
                    link: "/notebooks/rt2"
                  },
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="rounded-lg border border-gray-300 bg-transparent hover:shadow-md transition-shadow duration-300 h-[400px] relative"
                  >
                    <div className="p-8 flex flex-col h-full">
                      <div className="mb-auto">
                        <h3 className="text-2xl font-medium mb-4">{item.title}</h3>
                        <p className="text-base leading-relaxed">{item.desc}</p>
                      </div>
                      
                      <div className="mt-6 pb-6">
                        <Link href={item.link} className="text-base font-medium underline underline-offset-4 decoration-1 flex items-center">
                          Run notebook
                          <svg className="ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        */}

        {/* Highlights Section with image */}
        <section className="mt-8 md:mt-10 px-3 sm:px-6 md:px-10 lg:px-20 flex flex-col md:flex-row">
          {/* Left Image */}
          <div className="hidden md:block w-full md:w-auto md:flex-shrink-0 md:pr-6 md:ml-16">
            <img
              src="/coda3d.png"
              alt="Coda 3D"
              className="w-full md:w-105 h-auto"
            />
          </div>
          {/* Highlights Content */}
          <div className="pl-4 sm:pl-0 -ml-3 sm:ml-0 md:ml-[2rem] mt-4 md:mt-12 w-full md:flex-1">
            <h1 className="text-[28px] md:text-[35px] md:pl-6">Highlights</h1>

            {/* Static Highlights based on the image */}
            <ul className="mt-4 md:mt-6 space-y-4 md:space-y-6 md:pl-6 max-w-md">
              <li className="border-b pb-4 w-[95%]">
                <div className="pb-[4px]">
                  <Link href="/why-coda" className="block w-full text-[18px]">
                    Why Build Coda Robotics?
                  </Link>
                </div>
                <p className="text-gray-600 text-sm pb-[2px]">
                  Why data infrastructure is key to advance embodied AI
                </p>
              </li>
              
              <li className="border-b pb-4 w-[95%]">
                <div className="pb-[4px]">
                  <Link href="/infrastructure/ecot" className="block w-full text-[18px]">
                    Embodied Reasoning
                  </Link>
                </div>
                <p className="text-gray-600 text-sm pb-[2px]">
                 Achieve +30% policy improvements with embodied reasoning
                </p>
              </li>
              
              <li className="border-b pb-4 w-[95%]">
                <div className="pb-[4px]">
                  <Link href="/robotic_world_models" className="block w-full text-[18px]">
                    Robotic World Models
                  </Link>
                </div>
                <p className="text-gray-600 text-sm pb-[2px]">
                  Scale your teleoperation data at the lowest costs
                </p>
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* Footer with imported FooterNav */}
    </div>
  );
}