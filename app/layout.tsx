import type { Metadata } from "next";
import { Noto_Sans_JP, Playfair_Display } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "シオンとの架け橋 | A Bridge between Zion and Japan",
  description: "イスラエルの現地メディアから取材した最新情報を、週2回の無料メールマガジンで配信しています。4000年の歴史、文化、そして今を知る旅へようこそ。",
  keywords: ["イスラエル", "イスラエルニュース", "メシアニック", "ユダヤ人", "israel", "聖書", "イエス", "キリスト"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} ${playfairDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
