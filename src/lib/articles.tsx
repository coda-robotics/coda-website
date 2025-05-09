import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface Article {
  slug: string;
  title: string;
  date: string;
  shortDescription: string;
  href: string;
  image: string;
}

export function getArticles(): Article[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const articles = fileNames.map(fileName => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return {
      slug: fileName.replace(/\.md$/, ''),
      title: data.title,
      date: data.date,
      shortDescription: data.shortDescription || '',
      href: data.link, // Map YAML 'link' to 'href'
      image: data.image || '/assets/article_images/default.jpg' // Fallback image
    };
  });
  return articles;
}