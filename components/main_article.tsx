// src/components/sections/infrastructure/components/main_article.tsx
import Image from 'next/image';
import Link from 'next/link';
import { StaticImageData } from 'next/image';

interface MainArticle {
  date: string;
  title: string;
  image_url: string | StaticImageData;
  href: string;
}

export default function Main_Article({ date, title, image_url, href }: MainArticle) {
  return (
    <Link href={href} className="block group">
      <div
        className="
          relative
          w-full
          sm:max-w-[450px]
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
          className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-[5px] hover:rounded-[5px]"
          priority
        />
        <div className="absolute left-4 bottom-4 text-black">
          <time className="coda-font text-[clamp(12px,2vw,16px)]">{date}</time>
          <h3 className="mt-1 max-w-[75%] coda-font text-[clamp(10px,5vw,30px)] leading-none">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}