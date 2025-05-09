'use client';

import { articles } from '../data/articles';
import Image from 'next/image';
import Link from 'next/link';
import SideNav from '@components/side_nav';
import { useState, useMemo } from 'react';

// Define categories based on article content
const categories = [
    'all',
    'robotics',
    'AI',
    'infrastructure',
    'research'
];

function NewsPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState<'date' | 'title'>('date');

    // Filter and sort articles based on search, category, and sort criteria
    const filteredAndSortedArticles = useMemo(() => {
        let filtered = [...articles];

        // Apply search filter
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(article =>
                article.title.toLowerCase().includes(query) ||
                article.description.toLowerCase().includes(query) ||
                article.content.toLowerCase().includes(query)
            );
        }

        // Apply category filter
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(article =>
                article.content.toLowerCase().includes(selectedCategory.toLowerCase())
            );
        }

        // Apply sorting
        return filtered.sort((a, b) => {
            if (sortBy === 'date') {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            } else {
                return a.title.localeCompare(b.title);
            }
        });
    }, [articles, searchQuery, selectedCategory, sortBy]);

    const featuredArticle = filteredAndSortedArticles[0];
    const remainingArticles = filteredAndSortedArticles.slice(1);

    if (!featuredArticle) {
        return (
            <div className="flex min-h-screen">
                <SideNav />
                <main className="flex-1 pl-32">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative px-4 sm:px-6 md:px-8 lg:px-50">
                            <h1 className="coda-font mb-12 mt-8">NEWS</h1>
                            <div className="text-center py-12">
                                <p className="text-gray-600 text-lg">No articles found.</p>
                            </div>
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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative px-4 sm:px-6 md:px-8 lg:px-50">
                        <div className="flex justify-between items-center mb-12">
                            <h1 className="coda-font mb-0 mt-8">NEWS</h1>
                            <div className="flex items-center space-x-4">
                                {/* Search Bar */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search articles..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Sort Dropdown */}
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value as 'date' | 'title')}
                                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="date">Sort by Date</option>
                                    <option value="title">Sort by Title</option>
                                </select>
                            </div>
                        </div>

                        {/* Category Filters */}
                        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-full transition-colors whitespace-nowrap ${
                                        selectedCategory === category
                                            ? 'bg-gray-600 text-white'
                                            : 'bg-gray-100 hover:bg-gray-200'
                                    }`}
                                >
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </button>
                            ))}
                        </div>

                        {/* Featured Article */}
                        <div className="mb-16">
                            <Link 
                                href={`/infrastructure/${featuredArticle.slug}`}
                                className="group block"
                            >
                                <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-6">
                                    <Image
                                        src={featuredArticle.image_url}
                                        alt={featuredArticle.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        priority
                                    />
                                </div>
                                <div className="max-w-3xl">
                                    <h2 className="text-3xl font-bold mb-3 group-hover:text-blue-600 transition-colors coda-font">
                                        {featuredArticle.title}
                                    </h2>
                                    <div className="text-gray-600 mb-4">
                                        <span>CODA Lab</span>
                                        <span className="mx-2">•</span>
                                        <span>{featuredArticle.date}</span>
                                    </div>
                                    <p className="text-gray-700 text-lg">
                                        {featuredArticle.description}
                                    </p>
                                </div>
                            </Link>
                        </div>

                        {/* Article Grid */}
                        {remainingArticles.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                                {remainingArticles.map((article) => (
                                    <Link 
                                        key={article.slug}
                                        href={`/infrastructure/${article.slug}`}
                                        className="group block"
                                    >
                                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-4">
                                            <Image
                                                src={article.image_url}
                                                alt={article.title}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors coda-font">
                                            {article.title}
                                        </h3>
                                        <div className="text-gray-600 text-sm mb-3">
                                            <span>CODA Lab</span>
                                            <span className="mx-2">•</span>
                                            <span>{article.date}</span>
                                        </div>
                                        <p className="text-gray-700 line-clamp-2">
                                            {article.description}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default NewsPage; 