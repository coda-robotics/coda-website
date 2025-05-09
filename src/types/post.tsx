// src/types/post.tsx

export interface PostMeta {
  title: string
  date: string
  excerpt: string
  slug: string
  longExcerpt?: string
  link?: string        // ← add this
}

export interface Post extends PostMeta {
  contentHtml?: string // ← make optional, since “link”-only posts won’t have HTML
}
