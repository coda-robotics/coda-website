// src/components/sections/infrastructure/components/ArticleList.tsx
import Link from 'next/link';

interface Article {
  title: string;
  date: string;
  shortDescription: string;
  href: string;
}

interface ArticleList {
  articles: Article[];
}

export default function Article_List({ articles }: ArticleList) {
  return (
    <div className="mt-16 space-y-12 w-108/108">
      {articles.map((article, index) => (
        <article
          key={index}
          className={`group pb-12 ${index !== articles.length - 1 ? 'border-b' : ''}`}
          style={{ color: '#000' }}
        >
          <div className="w-107/108 mx-auto">
            <Link href={article.href}>
              <h3 className="coda-font mb-2 text-[25px]">
                {article.title}
              </h3>
              <time className="coda-font text-[15px]">
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
                {article.shortDescription}
              </p>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
