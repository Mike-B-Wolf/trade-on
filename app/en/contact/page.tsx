import type { Metadata } from "next";
import ContactPageContent from "../../components/contact/ContactPageContent";
import { en } from "@/locales/en";
import { ogImage } from "../../metadata";

export const metadata: Metadata = {
  title: en.contactPage.meta.title,
  description: en.contactPage.meta.description,
  openGraph: {
    title: en.contactPage.meta.title,
    description: en.contactPage.meta.description,
    url: "/en/contact",
    locale: "en_US",
    images: [ogImage],
  },
  twitter: {
    title: en.contactPage.meta.title,
    description: en.contactPage.meta.description,
    images: [ogImage.url],
  },
  alternates: {
    canonical: "/en/contact",
  },
};

export default function ContactPage() {
  return <ContactPageContent lang="en" dict={en.contactPage} />;
}
