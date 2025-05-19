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
        <div className="absolute left-4 bottom-10 text-white">
          <time className="text-[clamp(5px,2vw,14px)] font-normal">{date}</time>
          <h3 className="mt-1 max-w-full whitespace-nowrap font-normal text-[clamp(5px,5vw,22px)] leading-none text-white">
            {title}
          </h3>
          {description && (
            <p className="mt-1 text-white text-[clamp(8px,2vw,16px)] font-normal whitespace-normal">
              {description}
            </p>
          )}
        </div>
        <span className="absolute left-4 bottom-3 text-white text-base select-none">↗</span>
      </div>
    </Link>
  );
}