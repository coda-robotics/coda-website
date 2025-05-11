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

  // Find specific articles by title
  const embodiedReasoningArticle = sortedArticles.find(article => 
    article.title.includes("Embodied Reasoning")) ?? fallbackArticle;
    
  const policyDistributionArticle = sortedArticles.find(article => 
    article.title.includes("VLA Arena")) ?? fallbackArticle;
    
  const digitalCousinsArticle = sortedArticles.find(article => 
    article.title.includes("Digital Cousins")) ?? fallbackArticle;

  // Filter out featured articles for the ArticleList
  const featuredSlugs = [
    embodiedReasoningArticle.slug, 
    policyDistributionArticle.slug, 
    digitalCousinsArticle.slug
  ].filter(slug => slug !== 'fallback');
  
  const otherArticles = sortedArticles.filter(article => !featuredSlugs.includes(article.slug));

  return (
    <Infra_Section
      featuredMain={embodiedReasoningArticle}
      featuredSide1={policyDistributionArticle}
      featuredSide2={digitalCousinsArticle}
      articles={otherArticles}
    />
  );
}