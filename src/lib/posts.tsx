// src/lib/posts.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { Post, PostMeta } from '@/types/post'

const postsDir = path.join(process.cwd(), 'posts')

// Get all posts' metadata
export function getAllPostsMeta(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDir)

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDir, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
    } as PostMeta
  }).sort((a, b) => (a.date < b.date ? 1 : -1))
}

// Get a single post's data
export async function getPost(slug: string): Promise<Post> {
  const fullPath = path.join(postsDir, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const processed = await remark().use(html).process(content)
  const contentHtml = processed.toString()

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    longExcerpt: data.longExcerpt,
    contentHtml,
  }
}