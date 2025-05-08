'use client';

import Image from 'next/image';
import Link from 'next/link';
import SideNav from '../infrastructure/components/side_nav';

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
    return (
        <section className="w-full px-4 sm:px-6 lg:px-8 -translate-x-57">
            <div className="relative px-4 sm:px-6 md:px-8 lg:px-50">
                <div className="grid grid-cols-[1fr_3fr] gap-8">
                    <SideNav />
                    <div>
                        <h1 className="coda-font text-[40px] mb-12">COMPANY</h1>

                        {/* Mission Statement */}
                        <div className="mb-16">
                            <div className="relative w-full h-[500px] rounded-[5px] overflow-hidden">
                                <Image
                                    src="/company/mission-banner.jpg"
                                    alt="CODA Lab Mission"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                                    <div className="p-12 max-w-3xl">
                                        <h2 className="text-[clamp(24px,5vw,40px)] mb-4 coda-font text-white">Our Mission</h2>
                                        <p className="text-[17px] leading-[1.7] text-white/90" style={{ fontFamily: 'Inter, sans-serif' }}>
                                            To advance the frontiers of robotics and artificial intelligence,
                                            creating intelligent systems that enhance human capabilities and
                                            solve real-world challenges.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Values */}
                        <div className="mb-20">
                            <h2 className="text-[25px] mb-12 coda-font">Our Values</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                {values.map((value, index) => (
                                    <div key={index} className="group">
                                        <h3 className="text-[20px] mb-3 coda-font">{value.title}</h3>
                                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', lineHeight: '23px' }}>
                                            {value.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Leadership Team */}
                        <div className="mb-20">
                            <h2 className="text-[25px] mb-12 coda-font">Leadership Team</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {teamMembers.map((member) => (
                                    <div key={member.id} className="group">
                                        <div className="relative w-full aspect-square rounded-[5px] overflow-hidden mb-6">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                        <h3 className="text-[20px] mb-1 coda-font">{member.name}</h3>
                                        <p className="text-[15px] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                                            {member.role}
                                        </p>
                                        <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', lineHeight: '23px' }}>
                                            {member.bio}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Join Us Section */}
                        <div className="mb-20">
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 