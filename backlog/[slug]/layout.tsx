// src/app/posts/[slug]/layout.tsx
import {BlogTopNav} from '../../../../components/blog_topnav';
import type { ReactNode } from 'react';

export default function PostLayout({ children }: { children: ReactNode }) {
  return (
    <div className="post-layout">
        <div className = "pl-90">
            <BlogTopNav/>
        </div>
      {children}
    </div>
  );
}