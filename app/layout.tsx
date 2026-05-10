import type { Metadata } from "next";
import { Ubuntu, Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import RouteTracker from "@/components/RouteTracker";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pianoman-eg.com"),
  title: {
    default: "بيانو مان مصر | Pianoman Egypt — تأجير بيانو، دوزان وترميم في القاهرة",
    template: "%s | Pianoman Egypt — بيانو مان مصر",
  },
  description:
    "بيانو مان مصر — تأجير بيانو، دوزان (ضبط)، صيانة وترميم البيانو في القاهرة. رد في نفس اليوم. | Pianoman Egypt: piano rental, tuning & restoration across Cairo. Same-day response.",
  keywords: [
    // Arabic — primary targets (Google ignores this tag but Bing/Yahoo use it)
    "تأجير بيانو",
    "تأجير بيانو القاهرة",
    "إيجار بيانو",
    "بيانو للإيجار في القاهرة",
    "دوزان بيانو",
    "دوزان بيانو القاهرة",
    "دوزان بيانو مصر",
    "ضبط بيانو",
    "ضبط بيانو القاهرة",
    "ضبط بيانو مصر",
    "صيانة بيانو",
    "صيانة بيانو القاهرة",
    "صيانة بيانو مصر",
    "تصليح بيانو",
    "تصليح بيانو مصر",
    "إصلاح بيانو",
    "ترميم بيانو",
    "ترميم بيانو مصر",
    "ترميم بيانو القاهرة",
    "شراء بيانو مصر",
    "بيع بيانو مصر",
    "بيانو مستعمل مصر",
    "بيانو مان مصر",
    "بيانو مصر",
    "محل بيانو القاهرة",
    "فني بيانو القاهرة",
    "متخصص بيانو مصر",
    "خدمات بيانو القاهرة",
    "زيارة منزلية بيانو",
    "تأجير بيانو للمناسبات",
    "تأجير بيانو للحفلات",
    "بيانو عمودي للإيجار",
    "بيانو جراند للإيجار",
    // English — service + location
    "piano rental cairo",
    "piano tuning cairo",
    "piano restoration cairo",
    "piano repair cairo",
    "piano tuning egypt",
    "piano restoration egypt",
    "rent a piano cairo",
    "rent a piano egypt",
    "piano technician cairo",
    "piano home visit cairo",
    "upright piano rental cairo",
    "grand piano rental egypt",
    "piano maintenance egypt",
    "piano service cairo",
    "piano shop cairo",
    "pianoman egypt",
  ],
  openGraph: {
    type: "website",
    locale: "ar_EG",
    alternateLocale: "en_US",
    url: "https://pianoman-eg.com",
    siteName: "Pianoman Egypt — بيانو مان مصر",
    title: "بيانو مان مصر | Pianoman Egypt — تأجير بيانو، دوزان وترميم القاهرة",
    description:
      "بيانو مان مصر — تأجير بيانو، دوزان (ضبط)، صيانة وترميم البيانو في القاهرة. رد في نفس اليوم. | Piano rental, tuning & restoration Cairo.",
    images: [
      {
        url: "/piano-studio.jpg",
        width: 1200,
        height: 630,
        alt: "Pianoman Egypt — بيانو مان مصر: تأجير وضبط وترميم البيانو في القاهرة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "بيانو مان مصر | Pianoman Egypt — تأجير بيانو القاهرة",
    description:
      "تأجير بيانو، دوزان، صيانة وترميم في القاهرة. Piano rental, tuning & restoration Cairo. رد في نفس اليوم.",
    images: ["/piano-studio.jpg"],
  },
  alternates: {
    canonical: "https://pianoman-eg.com",
    languages: {
      "en": "https://pianoman-eg.com",
      "ar": "https://pianoman-eg.com",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicStore",
  "@id": "https://pianoman-eg.com",
  name: "Pianoman Egypt",
  alternateName: ["Pianoman", "بيانو مان مصر", "Piano Man Egypt", "بيانو مان"],
  description:
    "بيانو مان مصر — تأجير بيانو، دوزان (ضبط) وصيانة وترميم البيانو في القاهرة ومصر. | Cairo's premier piano rental, home tuning, and full restoration service.",
  url: "https://pianoman-eg.com",
  telephone: "+201555001233",
  email: "info@pianoman-eg.com",
  sameAs: [
    "https://www.instagram.com/pianoman.eg/",
    "https://www.facebook.com/piano.maneg",
    "https://www.linkedin.com/company/pianoman-eg",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cairo",
    addressRegion: "Cairo Governorate",
    addressCountry: "EG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.0444,
    longitude: 31.2357,
  },
  areaServed: [
    { "@type": "City", name: "Cairo" },
    { "@type": "City", name: "القاهرة" },
    { "@type": "Country", name: "Egypt" },
    { "@type": "Country", name: "مصر" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Piano Services | خدمات البيانو",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "تأجير بيانو — Piano Rental",
          alternateName: ["إيجار بيانو", "بيانو للإيجار", "تأجير بيانو القاهرة"],
          description:
            "تأجير بيانو بالقاهرة — خطط مرنة للمنازل والفعاليات والاستوديوهات. | Flexible piano rental plans for homes, events, and studios in Cairo.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "دوزان وضبط بيانو — Piano Tuning & Home Visit",
          alternateName: ["ضبط بيانو", "دوزان بيانو", "صيانة بيانو", "فني بيانو"],
          description:
            "دوزان وضبط البيانو في المنزل بالقاهرة ومصر — فنيون متخصصون يأتون إليك. | Professional on-site piano tuning and regulation across Cairo and Egypt.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "ترميم وتصليح بيانو — Piano Restoration",
          alternateName: ["تصليح بيانو", "إصلاح بيانو", "ترميم بيانو مصر", "تجديد بيانو"],
          description:
            "ترميم وتصليح البيانو في مصر — إعادة بناء كاملة للأوتار والمطارق والهيكل. | Full piano restoration and rebuilding — soundboard, strings, action, and finish.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className={`${ubuntu.variable} ${cairo.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="48x48" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" type="image/x-icon" />
        <link rel="icon" href="/icon.png?v=2" sizes="512x512" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png?v=2" sizes="512x512" />
        <link rel="alternate" hrefLang="en" href="https://pianoman-eg.com" />
        <link rel="alternate" hrefLang="ar" href="https://pianoman-eg.com" />
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-ML5KKNX5');` }} />
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/*
          TODO — Meta Pixel:
          1. Go to business.facebook.com → Events Manager → create Pixel → get Pixel ID
          2. Add the script below, replacing PIXEL_ID with your ID

          <script dangerouslySetInnerHTML={{ __html: `
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init','PIXEL_ID');fbq('track','PageView');
          `}} />
        */}
      </head>
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-ML5KKNX5" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }} />
        {/* End Google Tag Manager (noscript) */}
        <LanguageProvider>
          <RouteTracker />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
