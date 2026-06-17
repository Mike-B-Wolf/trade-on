import type { Metadata } from "next";
import HomePage from "../components/HomePage";
import { en } from "@/locales/en";

export const metadata: Metadata = {
  title: en.meta.title,
  description: en.meta.description,
  openGraph: {
    title: en.meta.title,
    description: en.meta.description,
    url: "/en",
    locale: "en_US",
    images: ["/TRADEON_OGP.png"],
  },
  twitter: {
    title: en.meta.title,
    description: en.meta.description,
    images: ["/TRADEON_OGP.png"],
  },
  alternates: {
    canonical: "/en",
  },
};

export default function Page() {
  return <HomePage lang="en" dict={en} />;
}
