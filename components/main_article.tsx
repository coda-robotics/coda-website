// src/components/sections/infrastructure/components/main_article.tsx
import Image from 'next/image';
import Link from 'next/link';
import { StaticImageData } from 'next/image';

interface MainArticle {
  date: string;
  title: string;
  image_url: string | StaticImageData;
  href: string;
  description?: string;
}

export default function Main_Article({ date, title, image_url, href, description }: MainArticle) {
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
          bg-gray-100
          rounded-[5px]
        "
      >
        <Image
          src={image_url}
          alt={title}
          fill
          className="object-cover rounded-[5px]"
          priority
        />
        <div className="absolute left-2 sm:left-4 bottom-4 sm:bottom-10 text-white">
          <time className="text-[clamp(10px,2vw,14px)] font-normal">{date}</time>
          <h3 className="mt-1 mb-4 max-w-full font-normal text-[clamp(12px,4vw,20px)] leading-tight text-white line-clamp-2">
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