'use client';

import Image from 'next/image';
import Link from 'next/link';
import SideNav from '@components/side_nav';
import { useState } from 'react';

const teamMembers = [
    {
        id: 'leadership-1',
        name: 'Dr. Sarah Chen',
        role: 'Chief Executive Officer',
        image: '/company/leadership/sarah-chen.jpg',
        bio: 'Leading CODA\'s vision in advancing robotics and AI research.'
    },
    {
        id: 'leadership-2',
        name: 'Dr. James Rodriguez',
        role: 'Chief Research Officer',
        image: '/company/leadership/james-rodriguez.jpg',
        bio: 'Directing groundbreaking research in embodied intelligence.'
    },
    {
        id: 'leadership-3',
        name: 'Dr. Maya Patel',
        role: 'Head of Engineering',
        image: '/company/leadership/maya-patel.jpg',
        bio: 'Leading the development of our core robotics infrastructure.'
    }
];

const values = [
    {
        title: 'Innovation First',
        description: 'Pushing the boundaries of what\'s possible in robotics and AI.',
    },
    {
        title: 'Ethical Development',
        description: 'Ensuring responsible advancement of AI and robotics technologies.',
    },
    {
        title: 'Collaborative Growth',
        description: 'Fostering an environment of shared learning and development.',
    },
    {
        title: 'Global Impact',
        description: 'Creating solutions that benefit humanity on a global scale.',
    }
];

export default function CompanyPage() {
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
                        {/* Mission Section */}
                        <div className="mb-16">
                            <p className="text-[15px] mt-6">
                                <Link href="/why-coda" className="underline underline-offset-2">Why Build CODA <span>↗</span></Link>
                            </p>
                            <h1 className="text-[calc(2.5rem)] pt-4 leading-[1.2] my-4 w-full transition-all duration-300 ease-in-out">MISSION</h1>
                            <h2 className="coda-font text-[20px] mb-8 mt-8" style={{ maxWidth: '1200px', margin: '0 auto' }}>CODA was founded on the belief that robotic foundation models are missing two key principles behind NLP and vision breakthroughs: positive transfer from scale and scalable evaluations. We're building durable infrastructure to enable roboticists to achieve similar breakthroughs.</h2>
                            <div
                                style={{
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                                fontSize: 16,
                                lineHeight: '35px',
                                letterSpacing: 0,
                                verticalAlign: 'middle',
                                wordWrap: 'break-word',
                                overflowWrap: 'break-word',
                                maxWidth: '100%',
                                color: '#000',
                                }}
                                className="space-y-5"
                            >
                            </div>
                        </div>

                        {/* Vision Section */}
                        <div className="mb-16">
                            <h1 className="text-[calc(2.5rem)] pt-4 leading-[1.2] my-4 w-full transition-all duration-300 ease-in-out">VISION</h1>
                            <h2 className="coda-font text-[20px] mb-8 mt-8" style={{ maxWidth: '1200px', margin: '0 auto' }}> We're building data engines, tooling, and evaluation systems to improve the generalization of robotic foundation models with the long-term goal of contributing towards achieving the Physical Turing Test.</h2>
                            <div
                                style={{
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                                fontSize: 16,
                                lineHeight: '35px',
                                letterSpacing: 0,
                                verticalAlign: 'middle',
                                wordWrap: 'break-word',
                                overflowWrap: 'break-word',
                                maxWidth: '100%',
                                color: '#000',
                                }}
                                className="space-y-5"
                            >
                            </div>
                        </div>

                        {/* Culture Section */}
                        <div className="mb-16">
                            <h1 className="text-[calc(2.5rem)] pt-4 leading-[1.2] my-4 w-full transition-all duration-300 ease-in-out">CULTURE</h1>
                            <h2 className="coda-font text-[20px] mb-8 mt-8" style={{ maxWidth: '1200px', margin: '0 auto' }}>Extremely high sense of urgency, ownership, and agency.</h2>
                            <div
                                style={{
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                                fontSize: 16,
                                lineHeight: '35px',
                                letterSpacing: 0,
                                verticalAlign: 'middle',
                                wordWrap: 'break-word',
                                overflowWrap: 'break-word',
                                maxWidth: '100%',
                                color: '#000',
                                }}
                                className="space-y-5"
                            >
                            </div>
                        </div>

                        {/* Core Values Section */}
                        <div className="mb-20">
                            <h1 className="text-[calc(2.5rem)] pt-4 leading-[1.2] my-4 w-full transition-all duration-300 ease-in-out">CORE VALUES</h1>
                            
                            <div className="border-t border-b border-gray-200 py-8 mb-4 cursor-pointer" 
                                style={{ maxWidth: '800px' }}
                                onClick={() => toggleSection(1)}
                            >
                                <div className="flex items-center w-full">
                                <div className="flex items-center flex-1">
                                    <span className="text-xl font-bold mr-4">01</span>
                                    <span className="coda-font text-[25px]">Move Fast & Learn Faster</span>
                                </div>
                                <span 
                                    className="text-2xl font-bold"
                                    aria-label="Toggle section"
                                >
                                    {expandedSection === 1 ? '−' : '+'}
                                </span>
                                </div>
                                
                                {expandedSection === 1 && (
                                <div className="mt-6 ml-10 pr-4">
                                    <p className="text-lg">
                                    Adaptation is key to success and a high learning rate is even more crucial. We value both. 
                                    </p>
                                </div>
                                )}
                            </div>
                            
                            {/* Second core value */}
                            <div className="border-t border-b border-gray-200 py-8 mb-4 cursor-pointer" 
                                style={{ maxWidth: '800px' }}
                                onClick={() => toggleSection(2)}
                            >
                                <div className="flex items-center w-full">
                                <div className="flex items-center flex-1">
                                    <span className="text-xl font-bold mr-4">02</span>
                                    <span className="coda-font text-[25px]">Tackle Meaningful Challenges</span>
                                </div>
                                <span 
                                    className="text-2xl font-bold"
                                    aria-label="Toggle section"
                                >
                                    {expandedSection === 2 ? '−' : '+'}
                                </span>
                                </div>
                                
                                {expandedSection === 2 && (
                                <div className="mt-6 ml-10 pr-4">
                                    <p className="text-lg">
                                    Find happiness by solving hard and relevant problems at scale.
                                    </p>
                                </div>
                                )}
                            </div>
                            
                            {/* Third core value */}
                            <div className="border-t border-b border-gray-200 py-8 mb-4 cursor-pointer" 
                                style={{ maxWidth: '800px' }}
                                onClick={() => toggleSection(3)}
                            >
                                <div className="flex items-center w-full">
                                <div className="flex items-center flex-1">
                                    <span className="text-xl font-bold mr-4">03</span>
                                    <span className="coda-font text-[25px]">Embrace Limitless Possibilities</span>
                                </div>
                                <span 
                                    className="text-2xl font-bold"
                                    aria-label="Toggle section"
                                >
                                    {expandedSection === 3 ? '−' : '+'}
                                </span>
                                </div>
                                
                                {expandedSection === 3 && (
                                <div className="mt-6 ml-10 pr-4">
                                    <p className="text-lg">
                                    Be aggresively optimistic and adopt a champion mindset.
                                    </p>
                                </div>
                                )}
                            </div>
                            
                            <hr className="border-t border-gray-300 my-10" style={{ maxWidth: '800px' }} />
                        </div>

                        {/* Join Us Section - Kept from original company page */}
                        {/* <div className="mb-20">
                            <div className="max-w-2xl">
                                <h2 className="text-[25px] mb-4 coda-font">Join Our Team</h2>
                                <p className="mb-8" style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', lineHeight: '23px' }}>
                                    Be part of our mission to shape the future of robotics and AI.
                                    We're always looking for talented individuals to join our team.
                                </p>
                                <Link 
                                    href="/careers" 
                                    className="inline-block bg-black text-white px-6 py-3 text-[15px] hover:bg-gray-800 transition-colors"
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                >
                                    View Open Positions
                                </Link>
                            </div>
                        </div> */}
                    </div>
                </div>
            </main>
        </div>
    );
} 