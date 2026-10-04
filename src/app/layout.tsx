import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";
import JsonLd from "@/components/JsonLd";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://apextechsolution.in"),
  title: {
    default: "Apex Tech Solution | SEO, Digital Marketing & Software Development",
    template: "%s | Apex Tech Solution",
  },
  description:
    "Apex Tech Solution helps businesses grow with SEO, digital marketing, website development, custom software, and AI automation.",
  keywords: [
    "SEO India",
    "Digital Marketing Agency",
    "Website Development",
    "Custom Software Development",
    "AI Automation Solutions",
    "Local SEO India",
    "Apex Tech Solution",
    "Technology Partner India"
  ],
  authors: [{ name: "Apex Tech Solution" }],
  creator: "Apex Tech Solution",
  publisher: "Apex Tech Solution",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://apextechsolution.in",
    siteName: "Apex Tech Solution",
    title: "Apex Tech Solution | Digital Growth. Smart Technology.",
    description:
      "We help businesses grow online through SEO, digital marketing, high-performance websites, custom software, and AI-powered solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Apex Tech Solution - Digital Growth & Smart Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Tech Solution | Digital Growth. Smart Technology.",
    description:
      "We help businesses grow online through SEO, digital marketing, high-performance websites, custom software, and AI-powered solutions.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://apextechsolution.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} scroll-smooth`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-[#FAFAFC] text-slate-900 font-sans flex flex-col antialiased selection:bg-brand-500 selection:text-white">
        <Header />
        <main className="flex-1 overflow-hidden pt-20">{children}</main>
        <Footer />
        <MobileStickyCta />
      </body>
    </html>
  );
}
