import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pianoman-eg.com"),
  title: {
    default: "Pianoman Egypt — Piano Rental, Tuning & Restoration Cairo",
    template: "%s | Pianoman Egypt",
  },
  description:
    "Cairo's premier piano service: flexible rental plans, home tuning visits, and full restoration. Professional piano care across Egypt.",
  keywords: [
    "piano rental cairo",
    "piano tuning egypt",
    "piano restoration cairo",
    "rent a piano egypt",
    "piano repair cairo",
    "تأجير بيانو القاهرة",
    "ضبط بيانو مصر",
    "pianoman",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pianoman-eg.com",
    siteName: "Pianoman Egypt",
    title: "Pianoman Egypt — Piano Rental, Tuning & Restoration Cairo",
    description:
      "Cairo's premier piano service: flexible rental plans, home tuning visits, and full restoration.",
    images: [
      {
        // TODO: Replace piano-studio.jpg with a proper 1200×630 OG image for best social sharing
        url: "/piano-studio.jpg",
        width: 1200,
        height: 630,
        alt: "Pianoman Egypt — Professional Piano Services in Cairo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pianoman Egypt — Piano Rental, Tuning & Restoration Cairo",
    description:
      "Cairo's premier piano service: flexible rental plans, home tuning visits, and full restoration.",
    images: ["/piano-studio.jpg"],
  },
  alternates: {
    canonical: "https://pianoman-eg.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://pianoman-eg.com",
  name: "Pianoman Egypt",
  description:
    "Cairo's premier piano rental, home visit tuning, and full restoration service.",
  url: "https://pianoman-eg.com",
  telephone: "+201555001233",
  email: "info@pianoman-eg.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cairo",
    addressCountry: "EG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.0444,
    longitude: 31.2357,
  },
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
    name: "Piano Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Piano Rental",
          description:
            "Flexible piano rental plans for homes, events, and studios in Cairo.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Piano Tuning — Home Visit",
          description:
            "Professional on-site piano tuning and regulation across Cairo and Egypt.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Piano Restoration",
          description:
            "Full piano restoration and rebuilding — soundboard, strings, action, and finish.",
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
    <html lang="en" className={`${ubuntu.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/*
          TODO — Google Analytics GA4:
          1. Go to analytics.google.com → create property → get Measurement ID (G-XXXXXXXXXX)
          2. Add the two script tags below, replacing G-XXXXXXXXXX with your ID

          <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
          <script dangerouslySetInnerHTML={{ __html: `
            window.dataLayer=window.dataLayer||[];
            function gtag(){dataLayer.push(arguments);}
            gtag('js',new Date());
            gtag('config','G-XXXXXXXXXX');
          `}} />
        */}
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
