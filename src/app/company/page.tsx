'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { StaticImageData } from 'next/image';

interface CompanyMainArticleProps {
  date: string;
  title: string;
  image_url: string | StaticImageData;
  href: string;
  description?: string;
}

function CompanyMainArticle({ date, title, image_url, href, description }: CompanyMainArticleProps) {
  return (
    <Link href={href} className="block group">
      <div
        className="
          relative
          w-full
          sm:max-w-[540px]
          sm:aspect-[1/1.3]
          aspect-square
          overflow-hidden
          bg-gray-100
          rounded-[5px]
        "
      >
        <Image
          src={image_url}
          alt={title}
          fill
          className="object-cover rounded-[5px]"
          priority
        />
        <div className="absolute left-4 right-4 bottom-8 text-white">
          <h3 className="text-[32px] font-normal leading-tight text-white mb-3">
            {title}
          </h3>
          {description && (
            <p className="text-white text-[16px] leading-normal font-normal">
              {description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}

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
        <main className="flex-1">
            <section className="max-w-[65rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="relative">
                    {/* Mission Section */}
                    <div className="mb-16">
                    {/* <p className="text-[15px] mt-6 mb-12">
                            <Link href="/why-coda" className="underline underline-offset-2">Why Build Coda Robotics <span>↗</span></Link>
                        </p> 
                    */}

                        <h1 className="text-[calc(2.5rem)] pt-8 leading-[1.2] mb-2 w-full text-left uppercase">
                            Mission, Vision, & Culture
                        </h1>
                        <p className="text-[15px] mt-0 mb-12">
                            <Link href="/why-coda" className="underline underline-offset-2">Why Build Coda Robotics <span>↗</span></Link>
                        </p> 
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 items-stretch">
                            <Link href = "/company/mission">
                                <div className="h-full">
                                    <div className="relative w-full h-full sm:aspect-[1/1.3] aspect-square overflow-hidden bg-gray-100 rounded-[5px] flex flex-col">
                                        <Image
                                            src={"/Mission.png"}
                                            alt="MISSION"
                                            fill
                                            className="object-cover rounded-[5px]"
                                            priority
                                        />
                                        <div className="absolute left-4 right-4 bottom-6 text-white">
                                            <h3 className="text-[32px] font-normal leading-tight text-white mb-3">MISSION</h3>
                                            <p className="text-white text-[16px] leading-normal font-normal">
                                            Coda Robotics was founded on the belief that robotic foundation models need to adopt key principles behind the advancements of NLP and vision models: positive transfer from scale and scalable evaluations. 
                                            </p>
                                            <p className = 'mt-4'>↗</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href = 'company/vision'>
                                <div className="relative w-full h-full sm:aspect-[1/1.3] aspect-square overflow-hidden bg-gray-100 rounded-[5px] flex flex-col">
                                    <Image
                                        src={"/vision.png"}
                                        alt="VISION"
                                        fill
                                        className="object-cover rounded-[5px]"
                                        priority
                                    />
                                    <div className="absolute left-4 right-4 bottom-6 text-white">
                                        <h3 className="text-[32px] font-normal leading-tight text-white mb-3">VISION</h3>
                                        <p className="text-white text-[16px] leading-normal font-normal">
                                            We're building data engines, tooling, and evaluation systems to improve the generalization of robotic foundation models with the long-term goal of training models capable of achieving the Physical Turing Test.
                                        </p>
                                        <p className = 'mt-4'>↗</p>
                                    </div>
                                </div>
                            </Link>
                            <Link href = 'company/culture'>
                                <div>
                                    <div className="relative w-full h-full sm:aspect-[1/1.3] aspect-square overflow-hidden bg-gray-100 rounded-[5px] flex flex-col">
                                        <Image
                                            src={"/culture.png"}
                                            alt="CULTURE"
                                            fill
                                            className="object-cover rounded-[5px]"
                                            priority
                                        />
                                        <div className="absolute left-4 right-4 bottom-6 text-white">
                                            <h3 className="text-[32px] font-normal leading-tight text-white mb-3">CULTURE</h3>
                                            <p className="text-white text-[16px] leading-normal font-normal">
                                                Extremely high sense of urgency, ownership, and agency. Learn to move fast and learn faster, find meaning in tackling important challenges, and embrace limitless possibilities.
                                            </p>
                                            <p className = 'mt-4'>↗</p>
                                        </div>
                                    </div>
                                </div>
                            </Link> 
                        </div>

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
            </section>
        </main>
    );
} 