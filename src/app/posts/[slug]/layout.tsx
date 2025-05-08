// src/app/posts/[slug]/layout.tsx
import {Logo} from '../../../../components/logo';
import type { ReactNode } from 'react';

export default function PostLayout({ children }: { children: ReactNode }) {
  return (
    <div className="post-layout">
        <div className = "p-4">
            <Logo/>
        </div>
      {children}
    </div>
  );
}