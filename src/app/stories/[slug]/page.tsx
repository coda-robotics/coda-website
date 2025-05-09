'use client';

import { useParams } from 'next/navigation';
import ArticleDisplay from '@components/article_display';
import SideNav from '@components/side_nav';

const stories = [
    {
        id: 'robot-learning',
        title: 'Teaching Robots to Learn Like Humans',
        date: 'April 2024',
        image: '/stories/robot_learning.jpg',
        preview: 'Follow our journey in developing robots that can learn and adapt through natural interactions, just like humans do.',
        content: `Our team has been working on groundbreaking approaches to robot learning that mirror human cognitive development. This research represents a significant shift in how we approach machine learning and artificial intelligence.

The Challenge of Natural Learning:
- Traditional machine learning often relies on massive datasets
- Human learning is more efficient and adaptable
- Bridging this gap requires new approaches to AI

Our Approach:
We've developed a novel framework that combines:
- Observational learning mechanisms
- Interactive feedback loops
- Adaptive neural architectures
- Real-time learning capabilities

Key Innovations:
- Multi-modal learning integration
- Dynamic knowledge representation
- Adaptive behavior patterns
- Real-time skill acquisition

Results and Impact:
Our initial results show promising improvements in:
- Learning efficiency (40% faster than traditional methods)
- Skill retention (60% better long-term retention)
- Adaptability to new scenarios
- Natural interaction capabilities

Future Directions:
- Enhanced social learning capabilities
- Improved transfer learning
- Real-time adaptation mechanisms
- Expanded application domains`,
        category: 'Research'
    },
    {
        id: 'lab-expansion',
        title: 'CODA Lab Expands Research Facilities',
        date: 'March 2024',
        image: '/stories/lab_expansion.jpg',
        preview: 'Exciting developments as we expand our research facilities to accommodate more innovative projects.',
        content: `The expansion of our research facilities marks a significant milestone in CODA Lab's journey toward advancing robotics and AI research. This expansion represents our commitment to pushing the boundaries of what's possible in artificial intelligence and robotics.

A New Chapter in Research:
- 50,000 square feet of new research space
- State-of-the-art robotics testing facilities
- Advanced AI computing infrastructure
- Collaborative workspace design

Key Features:
Our new facilities include:
- Robotics testing arena
- High-performance computing center
- Interactive AI development labs
- Collaborative research spaces

Research Capabilities:
The expansion enables:
- Large-scale robotics experiments
- Advanced simulation environments
- Real-world testing scenarios
- Cross-disciplinary collaboration

Impact on Research:
This expansion will:
- Accelerate research timelines
- Enable more complex experiments
- Foster collaboration
- Support larger research teams

Looking Forward:
- Increased research capacity
- New collaboration opportunities
- Enhanced testing capabilities
- Expanded educational programs`,
        category: 'Lab News'
    },
    {
        id: 'student-success',
        title: 'Student Researchers Lead Breakthrough Project',
        date: 'February 2024',
        image: '/stories/student_success.jpg',
        preview: 'Our student researchers achieve remarkable success in autonomous navigation project.',
        content: `The dedication and innovation of our student researchers have led to a breakthrough in autonomous navigation systems. This achievement showcases the incredible talent and potential of our next generation of robotics researchers.

Project Overview:
- Novel approach to autonomous navigation
- Integration of multiple sensor systems
- Real-time decision-making capabilities
- Adaptive path planning algorithms

Technical Innovations:
The team developed:
- Advanced sensor fusion algorithms
- Dynamic obstacle avoidance systems
- Real-time mapping capabilities
- Efficient path optimization methods

Key Achievements:
- 30% improvement in navigation accuracy
- 40% reduction in computational overhead
- Real-time adaptation to dynamic environments
- Successful real-world testing

Impact and Recognition:
- Published in leading robotics journals
- Presented at international conferences
- Industry partnership opportunities
- Patent applications filed

Future Development:
- Extended testing in complex environments
- Integration with other autonomous systems
- Commercial application development
- Further research opportunities`,
        category: 'Student Achievement'
    }
];

export default function StoryPage() {
    const params = useParams();
    const story = stories.find(s => s.id === params.slug);

    if (!story) {
        return (
            <div className="flex min-h-screen">
                <SideNav />
                <main className="flex-1 pl-32">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center py-12">
                            <p className="text-gray-600 text-lg">Story not found.</p>
                        </div>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen">
            <SideNav />
            <main className="flex-1 pl-32">
                <ArticleDisplay
                    title={story.title}
                    date={story.date}
                    content={story.content}
                    image_url={story.image}
                />
            </main>
        </div>
    );
} 