'use client';

import Image from 'next/image';

interface ArticleDisplayProps {
    title: string;
    date: string;
    content: string;
    image_url: string;
}

export default function ArticleDisplay({ title, date, content, image_url }: ArticleDisplayProps) {
    return (
        <article className="max-w-4xl mx-auto px-4 py-8">
            <header className="mb-8">
                <h1 className="text-4xl font-bold mb-4 coda-font">{title}</h1>
                <div className="text-gray-600 mb-6">
                    <span>Coda Robotics Lab</span>
                    <span className="mx-2">•</span>
                    <span>{date}</span>
                </div>
                <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
                    <Image
                        src={image_url}
                        alt={title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </header>
            <div className="prose prose-lg max-w-none">
                {content.split('\n\n').map((paragraph, index) => {
                    if (paragraph.trim().startsWith('-')) {
                        return (
                            <ul key={index} className="list-disc pl-4">
                                {paragraph.split('\n').map((item, itemIndex) => (
                                    <li key={`${index}-${itemIndex}`}>
                                        {item.trim().replace('-', '')}
                                    </li>
                                ))}
                            </ul>
                        );
                    }
                    return (
                        <p key={index} className="mb-4">
                            {paragraph}
                        </p>
                    );
                })}
            </div>
        </article>
    );
} 