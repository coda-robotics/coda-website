// src/components/sections/infrastructure/components/side_article.tsx
import Image from 'next/image';
import Link from 'next/link';
import { StaticImageData } from 'next/image';

interface SideArticle {
  title: string;
  date: string;
  image_url: string | StaticImageData;
  href: string;
  description?: string;
}

export default function Side_Article({ title, date, image_url, href, description }: SideArticle) {
  return (
    <Link href={href} className="block group">
      <div
        className="
          relative
          w-full
          sm:max-w-[540px]
          sm:aspect-[1/1.3]
          aspect-square
          overflow-hidden
          rounded-[5px]
        "
      >
        <Image
          src={image_url}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute left-2 sm:left-4 bottom-4 sm:bottom-10 text-white">
          <time className="text-[clamp(10px,2vw,14px)] font-normal">{date}</time>
          <h3 className="mt-0 mb-4 max-w-full font-normal text-[clamp(12px,4vw,20px)] leading-tight text-white line-clamp-2">
            {title}
          </h3>
          {description && (
            <p className="block sm:hidden md:block mt-1 mb-2 text-white text-[clamp(10px,3vw,14px)] font-normal line-clamp-3">
              {description}
            </p>
          )}
        </div>
        <span className="absolute left-2 sm:left-4 bottom-1 sm:bottom-3 text-white text-base select-none">↗</span>
      </div>
    </Link>
  );
}