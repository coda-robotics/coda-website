// src/components/sections/infrastructure/components/FeaturedArticle.tsx
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
        className="overflow-hidden bg-gray-100 relative"
        style={{ width: 450, height: 450 }}
      >
        <Image
          src={image_url}
          alt={title}
          width={450}
          height={450}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority
        />
        <div className="absolute left-6 bottom-6 text-black">
          <time
            className="coda-font text-[16px]"
          >
            {date}
          </time>
          <h3
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 30,
              lineHeight: '100%',
              letterSpacing: 0,
              verticalAlign: 'middle',
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
              maxWidth: '75%'
            }}
          >
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}