import type { Metadata } from "next";
import HomePage from "./components/HomePage";
import { ja } from "@/locales/ja";
import { ogImage } from "./metadata";

export const metadata: Metadata = {
  title: ja.meta.title,
  description: ja.meta.description,
  openGraph: {
    title: ja.meta.title,
    description: ja.meta.description,
    url: "/",
    locale: "ja_JP",
    images: [ogImage],
  },
  twitter: {
    title: ja.meta.title,
    description: ja.meta.description,
    images: [ogImage.url],
  },
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return <HomePage lang="ja" dict={ja} />;
}
