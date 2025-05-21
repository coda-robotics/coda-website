'use client';

import { FooterNav } from '../../components/footer_nav/home_footernav';
import { TopNav }    from '../../components/home_topnav';
import AnnouncementBar from '../../components/AnnouncementBar';
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import "../styles/globals.css";
import { PostHogProvider } from '../../components/PostHogProvider';

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/coda3d.png" type="image/png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <PostHogProvider>
          <AnnouncementBar />
          <Suspense fallback={<div className="w-full pt-4 sm:pt-6 px-4 h-[60px]">Loading...</div>}>
            <TopNav />
          </Suspense>
          <main>
            {children}
          </main>
          <FooterNav />
        </PostHogProvider>
      </body>
    </html>
  );
}