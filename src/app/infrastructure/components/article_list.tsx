// src/components/sections/infrastructure/components/ArticleList.tsx
import Link from 'next/link';

interface Article {
  title: string;
  date: string;
  description: string;
  href: string;
}

interface ArticleList {
  articles: Article[];
}

export default function Article_List({ articles }: ArticleList) {
  return (
    <div className="mt-16 space-y-12">
      {articles.map((article, index) => (
        <article 
          key={index} 
          className={`group ${index !== articles.length - 1 ? 'border-b pb-12' : ''}`}
          style={{
            color: '#000',
          }}
        >
          <Link href={article.href}>
            <h3
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: 25,
                lineHeight: '100%',
                letterSpacing: 0,
                verticalAlign: 'middle',
                color: '#000',
              }}
            >
              {article.title}
            </h3>
            <time
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: 15,
                lineHeight: '100%',
                letterSpacing: 0,
                verticalAlign: 'middle',
                color: '#000',
              }}
              className="block mt-1"
            >
              {article.date}
            </time>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: 15,
                lineHeight: '23px',
                letterSpacing: 0,
                verticalAlign: 'middle',
                color: '#000',
              }}
              className="mt-3"
            >
              {article.description}
            </p>
          </Link>
        </article>
      ))}
    </div>
  );
}