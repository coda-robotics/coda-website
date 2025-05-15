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
                <span className="hidden sm:inline"><br /></span> DATA INFRASTRUCTURE 
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
              <p className="text-[18px] mb-10 leading-[2] w-full sm:w-[540px] transition-all duration-300 ease-in-out">
                Build better robotic foundation models faster. 
                <br />
                CODA builds data infrastructure to power the
                <br />
                next generation of generalist embodied agents.
              </p>
              <div className="flex space-x-4">
                <a href="https://x.com/juliansaks" target="_blank" rel="noopener noreferrer">
                  <img src="/xlogo.png" alt="X logo" className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/juliansaks/" target="_blank" rel="noopener noreferrer">
                  <img src="/linkedinlogo.png" alt="LinkedIn logo" className="w-6 h-6" />
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

        {/* Highlights Section with image */}
        <section className="mt-10 px-6 md:px-10 lg:px-20 flex flex-col md:flex-row">
          {/* Left Image */}
          <div className="hidden md:block w-full md:w-auto md:flex-shrink-0 md:pr-6 md:ml-16">
            <img
              src="/coda3d.png"
              alt="Coda 3D"
              className="w-full md:w-105 h-auto"
            />
          </div>
          {/* Highlights Content */}
          <div className=" -ml-6 md:ml-[2rem] mt-6 md:mt-12 w-full md:flex-1">
            <h1 className="md:pl-6">Highlights</h1>

            {/* Static Highlights based on the image */}
            <ul className="mt-6 space-y-6 md:pl-6 max-w-md">
              <li className="border-b pb-4 w-[95%]">
                <div className="pb-[4px]">
                  <Link href="/why-coda" className="block w-full text-[18px]">
                    Why Build CODA?
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
                  <Link href="/vla_arena" className="block w-full text-[18px]">
                    VLA Arena
                  </Link>
                </div>
                <p className="text-gray-600 text-sm pb-[2px]">
                  Evaluate VLA models head-to-head 
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