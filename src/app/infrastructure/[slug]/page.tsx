import { articles } from '../data/articles';
import ArticleDisplay from '@components/article_display';
import { notFound } from 'next/navigation';

interface ArticlePageProps {
    params: {
        slug: string;
    };
}

export default function ArticlePage({ params }: ArticlePageProps) {
    const article = articles.find(a => a.slug === params.slug);

    if (!article) {
        notFound();
    }

    return (
        <ArticleDisplay
            title={article.title}
            date={article.date}
            content={article.content}
            image_url={article.image_url}
        />
    );
}

// Generate static pages for all articles at build time
export function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
} 