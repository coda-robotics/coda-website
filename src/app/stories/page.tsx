'use client';

import Image from 'next/image';
import Link from 'next/link';
import SideNav from '@components/side_nav';

const stories = [
    {
        id: 'robot-learning',
        title: 'Teaching Robots to Learn Like Humans',
        date: 'April 2024',
        image: '/stories/robot_learning.jpg',
        preview: 'Follow our journey in developing robots that can learn and adapt through natural interactions, just like humans do.',
        content: `Our team has been working on groundbreaking approaches to robot learning...`,
        category: 'Research'
    },
    {
        id: 'lab-expansion',
        title: 'CODA Lab Expands Research Facilities',
        date: 'March 2024',
        image: '/stories/lab_expansion.jpg',
        preview: 'Exciting developments as we expand our research facilities to accommodate more innovative projects.',
        content: `The expansion of our research facilities marks a significant milestone...`,
        category: 'Lab News'
    },
    {
        id: 'student-success',
        title: 'Student Researchers Lead Breakthrough Project',
        date: 'February 2024',
        image: '/stories/student_success.jpg',
        preview: 'Our student researchers achieve remarkable success in autonomous navigation project.',
        content: `The dedication and innovation of our student researchers...`,
        category: 'Student Achievement'
    }
];

const categories = ['All', 'Research', 'Lab News', 'Student Achievement', 'Events'];

export default function StoriesPage() {
    return (
        <div className="flex min-h-screen">
            <SideNav />
            <main className="flex-1 pl-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative px-4 sm:px-6 md:px-8 lg:px-50">
                        <h1 className="coda-font mb-12 mt-8">STORIES</h1>
                        
                        {/* Featured Story */}
                        <div className="mb-20">
                            <Link href={`/stories/${stories[0].id}`} className="group block">
                                <div className="relative w-full h-[500px] rounded-[5px] overflow-hidden">
                                    <Image
                                        src={stories[0].image}
                                        alt={stories[0].title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                                        <div className="p-12 max-w-3xl">
                                            <div className="mb-4">
                                                <span className="text-[15px] text-white/90" style={{ fontFamily: 'Inter, sans-serif' }}>
                                                    {stories[0].category}
                                                </span>
                                                <span className="mx-2 text-white/90">•</span>
                                                <span className="text-[15px] text-white/90" style={{ fontFamily: 'Inter, sans-serif' }}>
                                                    {stories[0].date}
                                                </span>
                                            </div>
                                            <h2 className="text-[clamp(24px,5vw,40px)] mb-4 coda-font text-white">
                                                {stories[0].title}
                                            </h2>
                                            <p className="text-[17px] leading-[1.7] text-white/90" style={{ fontFamily: 'Inter, sans-serif' }}>
                                                {stories[0].preview}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Story Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {stories.slice(1).map((story) => (
                                <Link 
                                    key={story.id}
                                    href={`/stories/${story.id}`}
                                    className="group block"
                                >
                                    <div className="relative w-full aspect-[4/3] rounded-[5px] overflow-hidden mb-6">
                                        <Image
                                            src={story.image}
                                            alt={story.title}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <span className="text-[15px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                                            {story.category}
                                        </span>
                                        <span className="mx-2 text-gray-400">•</span>
                                        <span className="text-[15px] text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                                            {story.date}
                                        </span>
                                    </div>
                                    <h3 className="text-[25px] mb-3 coda-font group-hover:text-gray-600 transition-colors">
                                        {story.title}
                                    </h3>
                                    <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', lineHeight: '23px' }}>
                                        {story.preview}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
} 