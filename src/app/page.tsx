import './globals.css';
import Head from 'next/head';
import { FooterNav } from '../../components/home_footernav';
import { TopNav } from '../../components/home_topnav';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Head>
        <title>CODA</title>
        <meta name="description" content="CODA delivers data infrastructure for AI robotics." />
      </Head>

      {/* Header without navbar */}
      <TopNav />

      {/* Main Section */}
      <main className="px-6 lg:px-28 py-5">
        {/* Hero Section */}
        <section className="relative flex items-center overflow-hidden">
          {/* Text Column: shrinks responsively */}
          <div className="relative z-10 w-full sm:w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5 transition-all duration-300 ease-in-out">
            <p className="text-[15px]">
              Announcing{' '}
              <span className="underline underline-offset-2">OpenVLA-ER</span> ↗
            </p>
            <h1 className="text-[calc(2.5rem)] lg:text-[50px] leading-[1.2] my-4 max-w-[1000px] transition-all duration-300 ease-in-out">
              CODA DELIVERS <br /> DATA INFRASTRUCTURE <br /> FOR AI ROBOTICS
            </h1>
            <div className="flex flex-wrap gap-x-8 my-8">
              <Link
                href="/infrastructure"
                className="text-black text-[20px] underline underline-offset-4 decoration-[1.5px]"
              >
                Infrastructure
              </Link>
              <Link
                href="/careers"
                className="text-black text-[20px] underline underline-offset-4 decoration-[1.5px]"
              >
                Join Us
              </Link>
            </div>
            <p className="text-[17px] mb-10 leading-[2] w-full sm:w-[540px] transition-all duration-300 ease-in-out">
              Coda delivers high-quality, large-scale data pipelines to power robotic neural networks. We specialize in collecting, labeling, and structuring the complex datasets needed to fuel intelligent machines and systems in the real world. From perception to decision-making, we accelerate robotics innovation by providing the data infrastructure AI systems need to continually evolve.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/coda" target="_blank" rel="noopener noreferrer">
                <img src="/xlogo.png" alt="X logo" className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src="/linkedinlogo.png" alt="LinkedIn logo" className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Hero Image: shifts left responsively, hides below md */}
          <div className="absolute top-0 right-0 hidden md:block md:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-1/3 transition-transform duration-300 ease-in-out
              md:translate-x-0 lg:-translate-x-12 xl:-translate-x-24 
              md:opacity-100" >
            <img
              src="/homeimg.png"
              alt="Hero"
              className="w-[500px] h-[500px] max-w-[700px]"
            />
          </div>
        </section>
      </main>

      {/* Footer with imported FooterNav */}
      <FooterNav />
    </div>
  );
}