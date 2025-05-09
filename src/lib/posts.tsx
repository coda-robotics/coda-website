// src/lib/posts.ts

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { Post, PostMeta } from '@/types/post'

const postsDir = path.join(process.cwd(), 'posts')

export function getAllPostsMeta(): PostMeta[] {
  return fs
    .readdirSync(postsDir)
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const { data } = matter(fs.readFileSync(path.join(postsDir, fileName), 'utf8'))

      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        link: data.link,      // ← grab link if present
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPost(slug: string): Promise<Post> {
  const fullPath = path.join(postsDir, `${slug}.md`)
  const { data, content } = matter(fs.readFileSync(fullPath, 'utf8'))

  // if front-matter has `link`, we only need that
  if (data.link) {
    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      longExcerpt: data.longExcerpt,
      link: data.link,
    }
  }

  const contentHtml = String(await remark().use(html).process(content))
  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    longExcerpt: data.longExcerpt,
    contentHtml,
  }
}
