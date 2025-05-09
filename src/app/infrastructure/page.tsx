import { getArticles, Article } from '../../lib/articles'
import Infra_Section from '../../../components/Infra_Section';

export default async function InfrastructurePage() {
  const allArticles: Article[] = await getArticles();

  // Fallback article
  const fallbackArticle: Article = {
    slug: 'fallback',
    title: 'Article Not Found',
    date: 'N/A',
    shortDescription: 'This article is not available.',
    href: '/infrastructure',
    image: '/assets/article_images/default.jpg'
  };

  // Sort articles by date (newest first)
  const sortedArticles = allArticles.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Select the top three most recent articles, with fallback
  const featuredMain = sortedArticles[0] ?? fallbackArticle;
  const featuredSide1 = sortedArticles[1] ?? fallbackArticle;
  const featuredSide2 = sortedArticles[2] ?? fallbackArticle;

  // Filter out featured articles for the ArticleList
  const featuredSlugs = [featuredMain.slug, featuredSide1.slug, featuredSide2.slug].filter(slug => slug !== 'fallback');
  const otherArticles = sortedArticles.filter(article => !featuredSlugs.includes(article.slug));

  return (
    <Infra_Section
      featuredMain={featuredMain}
      featuredSide1={featuredSide1}
      featuredSide2={featuredSide2}
      articles={otherArticles}
    />
  );
}