// src/types/post.tsx

export interface PostMeta {
    title: string
    date: string
    excerpt: string
    slug: string
    longExcerpt?: string
  }
  
  export interface Post extends PostMeta {
    contentHtml: string
  }
  