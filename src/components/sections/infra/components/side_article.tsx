// src/components/sections/infrastructure/components/side_article.tsx
import Image from 'next/image';
import Link from 'next/link';
import { StaticImageData } from 'next/image';

interface SideArticle {
  title: string;
  date: string;
  image_url: string | StaticImageData;
  href: string;
}

export default function Side_Article({ 
  title, 
  date,
  image_url, 
  href 
}: SideArticle) {
  return (
    <Link href={href} className="block group p-2">
      <div
        className="relative overflow-hidden rounded-[5px] "
        style={{ width: 308.49, height: 212.71 }}
      >
        <Image
          src={image_url}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute left-4 bottom-4 text-black">
          <time
            className="block mb-1"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 14,
              lineHeight: '100%',
              letterSpacing: 0,
              verticalAlign: 'middle',
            }}
          >
            {date}
          </time>
          <h3
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 20,
              lineHeight: '120%',
              letterSpacing: 0,
              verticalAlign: 'middle',
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
              maxWidth: '65%'
            }}
          >
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}