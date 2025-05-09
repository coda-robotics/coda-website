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

export default function Side_Article({ title, date, image_url, href }: SideArticle) {
  return (
    <Link href={href} className="block group">
      <div
        className="
          relative
          w-full
          sm:max-w-[308.49px]
          aspect-square sm:aspect-[308.49/212.71]
          overflow-hidden
          rounded-[5px]
        "
      >
        <Image
          src={image_url}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute left-4 bottom-4 text-black">
          <time className="coda-font text-[clamp(5px,2vw,14px)]">{date}</time>
          <h3 className="mt-1 max-w-[75%] coda-font text-[clamp(5px,5vw,22px)] leading-none">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}