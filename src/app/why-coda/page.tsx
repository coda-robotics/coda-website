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
                            <h1 className="coda-font text-[40px] mb-8 mt-8">WHY CODA? WHY NOW?</h1>
                            <div className="w-[800px] mx-auto">
                                <p className="text-lg mb-5">
                                    AI is now realizing its immense transformative potential, demonstrated by the emergence of AI-powered innovations in text, images, <a href="https://a16z.com/why-2023-was-ai-videos-breakout-year-and-what-to-expect-in-2024/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">video</a>, <a href="https://a16z.com/the-future-of-music-how-generative-ai-is-transforming-the-music-industry/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">audio</a>, and <a href="https://a16z.com/ai/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">more</a>. However, one domain remains significantly behind - physical intelligence. Similar to NLP's early stages, robotic physical actions have remained largely constrained by <a href="https://en.wikipedia.org/wiki/Moravec%27s_paradox" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Moravec's paradox</a>, experiencing substantially slower progress compared to other AI domains.
                                </p>
                                
                                <p className="text-lg mb-5">
                                    Yet over the last 18 months, there has been a strong push to learn from the advancements in other modalities and apply the same breakthroughs to robotics. It is clear that research across the best labs worldwide is converging towards the hope of a generalist physically embodied agent. Through these efforts Vision Language Action (VLA) models were born with Google's release of RT-1 in 2022. Since then the best professors have started their own commercial companies in the pursuit of building general robotic intelligence and billions of dollars in capital have been allocated towards robotics startups in 2024 alone. The confluence of talent, capital, and technology advancements suggests we are in the midst of providing the opportunity to innovate in this field.
                                </p>
                                
                                <p className="text-lg mb-5">
                                    While in the NLP domain, LLMs success is largely contributed to the years of humans sharing text since the inception of the internet resulting in a large text corpus to train on. It is widely known that the scaling laws applied to LLMs - training on more data improves these models. However taking the same approach towards building VLAs faces different challenges. Data collection for robotics is hard and frankly there is no way close amount of videos of robots as there is text. This has hindered the generalization of VLAs where today we are no where near GPT-2 performance. It has also led to a unique methods of scaling robot data:
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
                                        Highest quality data yet very hard to scale. Recent VLA papers show companies with large resources like Google taking a year to collect the 10,000 hours needed and the costs of this end up in the hundreds of thousands. Additionally, for researchers wanting to post-train these foundation models with 10-20 hours of data per task, depending on the task complexity, they spend days collecting data for a few tasks.
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
                                        Promising solution to scale data collection without quadratically increasing costs and is used in recent model data sources like Gr00t, yet these simulations still exhibit a sim2real gap meaning the deployment of these policies on a real robot in the real world may perform slightly worse. Additionally, the biggest bottleneck for simulations is to generate the environments manually which is a timely process and needs specific expertise.
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
                                        Promising avenue to lead to unsupervised learning and is very much favored in academia because of the significant cost cuts yet there is still an embodiment gap resulting in industry players not relying on this technique as much given their resources (yet).
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
                                    Across all these techniques, the current data infrastructure is in its infancy. Traditionally this has led to researchers relying on in-house first-person data collection, but modern scaling requirements require more robust infrastructure. A lack of significant advancements in robotic data intelligence will hinder the robotic community to achieve general physical intelligence.
                                </p>
                                <p className="text-lg mb-6">
                                    Our team at Coda sees this as an opportunity to innovate and build the most durable products at the robotic data layer to help robotics researchers build better models faster.
                                </p>
                                <p className="text-lg font-semibold">
                                    CODA Team
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