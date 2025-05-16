'use client';

import { FooterNav } from '../../components/footer_nav/home_footernav';
import { TopNav }    from '../../components/home_topnav';
import AnnouncementBar from '../../components/AnnouncementBar';
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AnnouncementBar />
        <TopNav />
        <main >
          {children}
        </main>
        <FooterNav />
      </body>
    </html>
  );
}
