import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "TRADE-ON｜本物だけを、世界へ。";
const siteName = "TRADE-ON";
const siteDescription =
  "TRADE-ONは、食品・車両関連をはじめとした国内外の貿易・販売マッチングを支援する企業です。本物の価値を、必要とする市場へ届けます。";
const siteKeywords = [
  "TRADE-ON",
  "貿易",
  "輸出",
  "輸入",
  "海外販売",
  "車両輸出",
  "食品輸出",
  "international trade",
];
const ogImage = "/TRADEON_OGP.png";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, "") ||
  "https://trade-on-company.com";
const isDevSite = siteUrl.includes("dev.");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: siteKeywords,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: isDevSite
    ? {
        index: false,
        follow: true,
        nocache: true,
      }
    : {
        index: true,
        follow: true,
        nocache: true,
      },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const showAnalytics = !isDevSite && process.env.NEXT_PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN;

  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        {showAnalytics && (
          <Script
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={JSON.stringify({
              token: process.env.NEXT_PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN,
            })}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
