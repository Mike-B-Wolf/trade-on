import type { Metadata } from "next";
import ContactPageContent from "../components/contact/ContactPageContent";
import { ja } from "@/locales/ja";

export const metadata: Metadata = {
  title: ja.contactPage.meta.title,
  description: ja.contactPage.meta.description,
  openGraph: {
    title: ja.contactPage.meta.title,
    description: ja.contactPage.meta.description,
    url: "/contact",
    locale: "ja_JP",
  },
  twitter: {
    title: ja.contactPage.meta.title,
    description: ja.contactPage.meta.description,
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactPageContent lang="ja" dict={ja.contactPage} />;
}
