
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    template: "%s | İstanbul Endüstriyel Buzdolabı Tamircisi",
    default: "Endüstriyel Buzdolabı Tamircisi - 7/24 Profesyonel Servis",
  },
  description: "İstanbul geneli endüstriyel buzdolabı tamiri, bakımı ve teknik servisi. Empero, İnoksan, Öztiryakiler ve tüm markalar için aynı gün servis hizmeti.",
  metadataBase: new URL("https://endustriyelbuzdolabitamircisi.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "Endüstriyel Buzdolabı Tamircisi",
              "image": "https://endustriyelbuzdolabitamircisi.com/logo.png",
              "telephone": "0536 931 96 67",
              "url": "https://endustriyelbuzdolabitamircisi.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "İstanbul",
                "addressRegion": "TR",
                "addressCountry": "TR"
              },
              "priceRange": "₺₺",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "08:00",
                  "closes": "20:00"
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
