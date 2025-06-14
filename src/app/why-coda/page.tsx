'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function WhyCodaPage() {
    const [expandedSection, setExpandedSection] = useState<number | null>(null);
    const [useMp4, setUseMp4] = useState(false);

    const toggleSection = (sectionId: number) => {
        setExpandedSection(expandedSection === sectionId ? null : sectionId);
    };

    const videoRef = useRef<HTMLVideoElement | null>(null);
    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 1.75;
    }, []);

    useEffect(() => {
        // Detect iOS or Safari
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        console.log('isIOS:', isIOS, 'isSafari:', isSafari, 'userAgent:', navigator.userAgent);
        setUseMp4(isIOS || isSafari);
    }, []);

    return (
        <div className="min-h-screen">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative px-0 sm:px-6 md:px-8 lg:px-40">
                        {/* Main Heading */}
                        <div className="mb-10 sm:mb-20">
                            <h1 className="coda-font text-[32px] sm:text-[40px] mb-6 sm:mb-8 mt-6 sm:mt-8 px-0">Why Build Coda Robotics?</h1>
                            <div className="w-full max-w-[800px] md:max-w-[780px] mx-0 px-0">
                                <p className="text-base sm:text-lg mb-5">
                                AI is now delivering on its long-promised potential, evident in the explosion of services across text, images, <a href="https://a16z.com/why-2023-was-ai-videos-breakout-year-and-what-to-expect-in-2024/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">video</a>, <a href="https://a16z.com/the-future-of-music-how-generative-ai-is-transforming-the-music-industry/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">audio</a>, and <a href="https://a16z.com/ai/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">more</a>. Yet one modality is still years behind - physical intelligence. Much like the early days of NLP, robotic policies have been constrained within <a href="https://en.wikipedia.org/wiki/Moravec%27s_paradox" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Moravec's paradox</a>, and have not seen the same pace of policy generalization as in other modalities.
                                </p>
                                
                                <p className="text-base sm:text-lg mb-5">
                                Yet over the last 18 months, there has been a strong push to learn from the advancements in NLP and vision and apply the same breakthroughs to robotics. This push has led the best labs, both industry and academic, worldwide to collaborate towards the hope of a generalist physically embodied agent. Through these efforts Vision Language Action (VLA) models were born with Google's release of RT-1 in 2022. Since the release of RT-1 the best professors have started their own companies and billions of dollars in capital have been allocated towards robotics startups in 2024 alone. The confluence of talent, capital, and policy improvements suggests we are getting closer to a major breakthrough in robotics.
                                </p>
                                
                                <p className="text-base sm:text-lg mb-5">
                                However when comparing the NLP or vision domain to robotics a lot of core principles is missing to build a robotics-first foundation model. Coda Robotics was started on the idea that we need to make significant progress on two principles seen from NLP and vision models:
                                </p>

                                <h2 className="coda-font text-[20px] sm:text-[25px] mb-4">1. Positive Transfer from Scale</h2>

                                <p className="text-base sm:text-lg mb-5">
                                LLMs success is largely contributed to the years of humans collectively sharing text online since the inception of the internet resulting in a large text corpus to train these text models on. It is widely known that the scaling laws applied to LLMs - training on more data improves these models. However taking the same approach towards building VLAs faces different challenges. Data collection for robotics is hard and frankly there is no way close amount of videos of robots as there is text. This has hindered the generalization of VLAs where today we are no where near GPT-2 performance. It has also led to a unique methods of scaling robot data:
                                </p>
                            </div>
                        </div>

                        {/* Data Collection Methods */}
                        <div className="mb-0 sm:-mb-[3rem]">
                            <div className="py-6 sm:py-8 mb-4 w-full max-w-[800px] md:max-w-[780px] mx-0 px-0">
                                <div className="flex items-center w-full">
                                    <div className="flex items-center flex-1">
                                        <span className="text-lg sm:text-xl font-bold mr-3 sm:mr-4">01</span>
                                        <span className="coda-font text-[20px] sm:text-[25px]">Teleoperation data</span>
                                    </div>
                                </div>
                                <div className="mt-4 sm:mt-6 ml-8 sm:ml-10">
                                    <p className="text-base sm:text-lg">
                                        Highest quality data yet very hard to scale. Pre-training data collection efforts can take up to a year to collect the 10,000 hours needed and the costs of this end up in the hundreds of thousands. Additionally, for researchers wanting to post-train these foundation models with 10-20 hours of data per task, depending on the task complexity, they spend days collecting data for a few tasks.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="py-6 sm:py-8 mb-4 w-full max-w-[800px] md:max-w-[780px] mx-0 px-0">
                                <div className="flex items-center w-full">
                                    <div className="flex items-center flex-1">
                                        <span className="text-lg sm:text-xl font-bold mr-3 sm:mr-4">02</span>
                                        <span className="coda-font text-[20px] sm:text-[25px]">Physics simulations</span>
                                    </div>
                                </div>
                                <div className="mt-4 sm:mt-6 ml-8 sm:ml-10">
                                    <p className="text-base sm:text-lg">
                                    Promising solution to scale data collection without quadratically increasing costs and is leveraged to pre-train recent models like Gr00t N1, yet these simulations still exhibit the widely known sim-to-real gap. Additionally, the biggest bottleneck for simulations is that the environments are generated manually which is a labor-intensive process and needs specific expertise.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="py-6 sm:py-8 mb-4 w-full max-w-[800px] md:max-w-[780px] mx-0 px-0">
                                <div className="flex items-center w-full">
                                    <div className="flex items-center flex-1">
                                        <span className="text-lg sm:text-xl font-bold mr-3 sm:mr-4">03</span>
                                        <span className="coda-font text-[20px] sm:text-[25px]">Human videos</span>
                                    </div>
                                </div>
                                <div className="mt-4 sm:mt-6 ml-8 sm:ml-10">
                                    <p className="text-base sm:text-lg">
                                    A path to lead towards unsupervised learning and is very much favored in academia because of the significant cost cuts yet there is still an embodiment gap leading industry players not relying on this technique as much given their resources (yet).
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CODA Logo */}
                        <div className="h-[500px] flex justify-center items-center">
                            <video
                                ref={videoRef}
                                autoPlay
                                loop
                                muted
                                playsInline
                                onContextMenu={(e) => e.preventDefault()}
                                className="w-[500px] h-[500px] -ml-[8rem]"
                                style={{
                                    backgroundColor: 'transparent',
                                    objectPosition: 'center center',
                                }}
                            >
                                {useMp4 ? (
                                    <source src="/codalogo.mov" type="video/mov" />
                                ) : (
                                    <source src="/codalogo.webm" type="video/webm" />
                                )}
                            </video>
                        </div>
                        
                        {/* Conclusion */}
                        <div className="mb-10 sm:mb-20 w-full max-w-[800px] md:max-w-[780px] mx-0 px-0" style={{ fontFamily: 'Inter, sans-serif' }}>
                            <p className="text-base sm:text-lg mb-5">
                            Given the current robotics data pyramid, we have a strong belief that world models that use a combination of human videos and robot data will be able to generate high quality data at the lowest costs for model training. These world models will also support training a policy via RL which will be crucial for RL in-the-wild.
                            </p>

                            <p className="text-base sm:text-lg mb-5">
                            Given the current robotics data pyramid, we believe that world models leveraging both human videos and robot-collected data can generate high-quality training data at significantly lower costs. This approach not only enhances data collection efficiency but also enables scalable policy learning through reinforcement learning. Crucially, world models will serve as a backbone for training policies <em>in the wild</em>, where real-world data is limited, noisy, or expensive to collect.
                            </p>

                            <h2 className="coda-font text-[20px] sm:text-[25px] mb-4 mt-10">2. Robust Safety</h2>

                            <p className="text-base sm:text-lg mb-5">
                            All paths point toward generalist models, but since they're capable of doing "anything", they must be evaluated on "everything". Labs working on pre-training robotics foundation models typically run 3,000–3,600 trials per evaluation cycle, often taking over a month since setting up the evaluation environment (real or sim) is done manually. This significantly slows down iteration.
                            </p>

                            <p className="text-base sm:text-lg mb-5">
                            All roads lead to generalist models, but because they can do "anything," they must be tested on <em>everything</em>. Robotic labs developing foundation models typically run 3,000–3,600 trials per evaluation cycle. These cycles often stretch over a month due to the manual setup required for both real-world and simulated environments, severely slowing iteration.
                            </p>

                            <p className="text-base sm:text-lg mb-5">
                            World models offer a scalable alternative. By simulating diverse environments, they allow rapid testing of robotic systems across out-of-distribution scenarios. We're particularly excited by their ability to replay failure events: instead of recreating scenes manually, roboticists can feed a sequence of frames into the world model to simulate alternative trajectories, gather data on successful trajectories.
                            </p>

                            <p className="text-base sm:text-lg mb-5">
                            To bridge the gap between today's labor-intensive approaches and tomorrow's general-purpose robotics, the community needs to adopt faster, cheaper, and safer ways to scale foundation models. At Coda Robotics, we're building world models that make this possible - infusing scalability and safety into the core of robotic learning.
                            </p>

                            <p className="text-base sm:text-lg mt-10">
                                Julian Saks
                            </p>
                            <p className="text-base sm:text-lg">
                                Co-Founder, CEO
                            </p>
                            <p className="text-base sm:text-lg mt-4">
                                Juan Vera
                            </p>
                            <p className="text-base sm:text-lg">
                                Co-Founder, Chief Scientist
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}