'use client';

import Image from 'next/image';
import Link from 'next/link';
import SideNav from '@components/side_nav';
import { useState } from 'react';

export default function WhyCodaPage() {
    const [expandedSection, setExpandedSection] = useState<number | null>(null);

    const toggleSection = (sectionId: number) => {
        setExpandedSection(expandedSection === sectionId ? null : sectionId);
    };

    return (
        <div className="flex min-h-screen">
            <SideNav />
            
            <main className="flex-1 pl-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative px-4 sm:px-6 md:px-8 lg:px-50">
                        {/* Main Heading */}
                        <div className="mb-20">
                            <h1 className="coda-font text-[40px] mb-8 mt-8">Why Build CODA?</h1>
                            <div className="w-[800px] mx-auto">
                                <p className="text-lg mb-5">
                                AI is now delivering on its long-promised potential, evident in the explosion of services across text, images, <a href="https://a16z.com/why-2023-was-ai-videos-breakout-year-and-what-to-expect-in-2024/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">video</a>, <a href="https://a16z.com/the-future-of-music-how-generative-ai-is-transforming-the-music-industry/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">audio</a>, and <a href="https://a16z.com/ai/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">more</a>. Yet one modality is still years behind - physical intelligence. Much like the early days of NLP, robotic policies have been constrained within <a href="https://en.wikipedia.org/wiki/Moravec%27s_paradox" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Moravec's paradox</a>, and have not seen the same pace of policy generalization as in other modalities.
                                </p>
                                
                                <p className="text-lg mb-5">
                                Yet over the last 18 months, there has been a strong push to learn from the advancements in NLP and vision and apply the same breakthroughs to robotics. This push has led the best labs, both industry and academic, worldwide to collaborate towards the hope of a generalist physically embodied agent. Through these efforts Vision Language Action (VLA) models were born with Google’s release of RT-1 in 2022. Since the release of RT-1 the best professors have started their own companies and billions of dollars in capital have been allocated towards robotics startups in 2024 alone. The confluence of talent, capital, and policy improvements suggests we are getting closer to a major breakthrough in robotics. 
                                </p>
                                
                                <p className="text-lg mb-5">
                                However when comparing the NLP or vision domain to robotics a lot of core principles is missing to build a robotics-first foundation model. CODA was started on the idea that we need to make significant progress on two principles seen from NLP and vision models: 
                                </p>

                                <p className="text-lg mb-5">
                                <span className="coda-font text-[25px]">1. Positive Transfer from Scale </span>
                                </p>

                                <p className="text-lg mb-5">
                                LLMs success is largely contributed to the years of humans collectively sharing text online since the inception of the internet resulting in a large text corpus to train these text models on. It is widely known that the scaling laws applied to LLMs - training on more data improves these models. However taking the same approach towards building VLAs faces different challenges. Data collection for robotics is hard and frankly there is no way close amount of videos of robots as there is text. This has hindered the generalization of VLAs where today we are no where near GPT-2 performance. It has also led to a unique methods of scaling robot data:
                                </p>
                            </div>
                        </div>

                        {/* Data Collection Methods */}
                        <div className="mb-20">
                            <div className="border-t border-b border-gray-200 py-8 mb-4 w-[800px] mx-auto">
                                <div className="flex items-center w-full">
                                    <div className="flex items-center flex-1">
                                        <span className="text-xl font-bold mr-4">01</span>
                                        <span className="coda-font text-[25px]">Teleoperation data</span>
                                    </div>
                                </div>
                                <div className="mt-6 ml-10">
                                    <p className="text-lg">
                                        Highest quality data yet very hard to scale. Pre-training data collection efforts can take up to a year to collect the 10,000 hours needed and the costs of this end up in the hundreds of thousands. Additionally, for researchers wanting to post-train these foundation models with 10-20 hours of data per task, depending on the task complexity, they spend days collecting data for a few tasks. 
                                    </p>
                                </div>
                            </div>
                            
                            <div className="border-t border-b border-gray-200 py-8 mb-4 w-[800px] mx-auto">
                                <div className="flex items-center w-full">
                                    <div className="flex items-center flex-1">
                                        <span className="text-xl font-bold mr-4">02</span>
                                        <span className="coda-font text-[25px]">Physics simulations</span>
                                    </div>
                                </div>
                                <div className="mt-6 ml-10">
                                    <p className="text-lg">
                                    Promising solution to scale data collection without quadratically increasing costs and is leveraged to pre-trainrecent models like Gr00t N1, yet these simulations still exhibit the widely known sim-to-real gap. Additionally, the biggest bottleneck for simulations is that the environments are generated manually which is a labor-intensive process and needs specific expertise. 
                                    </p>
                                </div>
                            </div>
                            
                            <div className="border-t border-b border-gray-200 py-8 mb-4 w-[800px] mx-auto">
                                <div className="flex items-center w-full">
                                    <div className="flex items-center flex-1">
                                        <span className="text-xl font-bold mr-4">03</span>
                                        <span className="coda-font text-[25px]">Human videos</span>
                                    </div>
                                </div>
                                <div className="mt-6 ml-10">
                                    <p className="text-lg">
                                    A path to lead towards unsupervised learning and is very much favored in academia because of the significant cost cuts yet there is still an embodiment gap leading industry players not relying on this technique as much given their resources (yet). 
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CODA Logo */}
                        <div className="w-[800px] mx-auto mb-16 text-center">
                            <img
                                src="/coda3d.png" 
                                alt="CODA Logo"
                                className="mx-auto h-[450px] w-auto"
                            />
                        </div>

                        {/* Conclusion */}
                        <div className="mb-20 w-[800px] mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
                            <div className="mb-10">
                                <p className="text-lg mb-6">
                                Given the current robotics data pyramid, we see a clear need to build scalable data engines that support positive transfer. These engines will focus on two priorities: enhancing data quality and increasing quantity, while maintaining high diversity. Explore our Data Engines here. In parallel, we’re investing much of our resources to build durable tooling at the data layer to manage the larger datasets we expect in the future.
                                </p>

                                <p className="text-lg mb-5">
                                <span className="coda-font text-[25px]">2. Scalable Evaluations </span>
                                </p>

                                <p className="text-lg mb-6">
                                All paths point toward generalist models—but since they’re capable of doing “anything”, they must be evaluated on “everything”. Labs working on pre-training robotics foundation models typically run 3,000–3,600 trials per evaluation cycle, often taking over a month since setting up the evaluation environment (real or sim) is done manually. This significantly slows down iteration. We view in-browser physics simulations with embedded simulation MCPs that run head-to-head model evaluations as a promising approach to offer more scalable and low-cost evaluations. 
                                </p>
                                <p className="text-lg mb-6">
                                To close the gap between today’s fragmented approaches and tomorrow’s embodied general intelligence, the robotics community needs more than better models—it needs better infrastructure. The future of robotics hinges on scalable data pipelines, robust evaluation frameworks, and tooling that can keep pace with the ambitions of generalist systems. At CODA, we’re building the data foundation for this next era: high-integrity engines for collection and evaluation, tools that enable fast iteration, and infrastructure designed to endure. As the field accelerates, we aim to serve as the backbone that helps robotics transition from research to real-world impact.
                                </p>
                                <p className="text-lg">
                                    Julian Saks 
                                </p>
                                <p className="text-lg">
                                    Founder, CEO
                                </p>
                                {/* <div className="h-12 w-40 border-b border-black my-2"></div> */}
                            </div>

                            {/* <div className="mt-20">
                                <h2 className="text-[25px] mb-4 coda-font">Learn How We Can Help</h2>
                                <p className="mb-8" style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', lineHeight: '23px' }}>
                                    Interested in exploring how CODA's robotics data infrastructure can accelerate your research?
                                    Contact our team to learn more about our solutions.
                                </p>
                                <Link 
                                    href="/contact" 
                                    className="inline-block bg-black text-white px-6 py-3 text-[15px] hover:bg-gray-800 transition-colors"
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                >
                                    Get In Touch
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
} 