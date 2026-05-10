import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

export const metadata: Metadata = {
  title: "بيانو مان مصر — تأجير بيانو، دوزان وترميم في القاهرة",
  description:
    "بيانو مان مصر — تأجير بيانو، دوزان (ضبط)، صيانة وترميم البيانو في القاهرة ومصر. رد في نفس اليوم.",
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "https://pianoman-eg.com/ar",
    siteName: "Pianoman Egypt — بيانو مان مصر",
    title: "بيانو مان مصر — تأجير بيانو، دوزان وترميم في القاهرة",
    description:
      "بيانو مان مصر — تأجير بيانو، دوزان (ضبط)، صيانة وترميم البيانو في القاهرة. رد في نفس اليوم.",
    images: [{ url: "/piano-studio.jpg", width: 1200, height: 630, alt: "بيانو مان مصر" }],
  },
  alternates: {
    canonical: "https://pianoman-eg.com/ar",
    languages: {
      ar: "https://pianoman-eg.com/ar",
      en: "https://pianoman-eg.com",
      "x-default": "https://pianoman-eg.com",
    },
  },
};

export default function ArLayout({ children }: { children: React.ReactNode }) {
  return <LanguageProvider initialLang="ar">{children}</LanguageProvider>;
}
