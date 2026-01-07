
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Snowflake, Clock, Phone } from 'lucide-react';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// BAKIM MODU AYARI
const isMaintenanceMode = true;

export const metadata: Metadata = {
  title: isMaintenanceMode ? "Sitemiz Yapım Aşamasında" : {
    template: "%s | İstanbul Endüstriyel Buzdolabı Tamircisi",
    default: "Endüstriyel Buzdolabı Tamircisi - 7/24 Profesyonel Servis",
  },
  description: "İstanbul geneli endüstriyel buzdolabı tamiri, bakımı ve teknik servisi.",
  metadataBase: new URL("https://endustriyelbuzdolabitamircisi.com"),
  robots: isMaintenanceMode ? { index: false, follow: false } : { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col bg-slate-50`}>
        {isMaintenanceMode ? (
          <div className="flex-grow flex items-center justify-center p-4 min-h-screen">
            <div className="max-w-xl w-full text-center">
              <div className="mb-8 inline-flex items-center justify-center p-4 bg-primary-600 rounded-3xl shadow-xl shadow-primary-500/20 text-white animate-pulse">
                <Snowflake className="h-12 w-12" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                Sitemiz Yapım Aşamasında
              </h1>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                Size daha iyi hizmet verebilmek için web sitemizi yeniliyoruz.
                Çok yakında profesyonel servis çözümlerimizle yayında olacağız.
              </p>

              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 mb-8">
                <div className="flex flex-col gap-6 items-center">
                  <div className="flex items-center gap-3 text-primary-600">
                    <Clock className="h-6 w-6" />
                    <span className="font-bold">7/24 Teknik Destek Aktif</span>
                  </div>
                  <p className="text-slate-500 text-sm">Acil arıza bildirimleri için bize her zaman ulaşabilirsiniz.</p>
                  <a href="tel:05369319667" className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-600 transition-all shadow-lg">
                    <Phone className="h-5 w-5" /> 0536 931 96 67
                  </a>
                </div>
              </div>

              <div className="text-slate-400 text-sm italic">
                Anlayışınız için teşekkür ederiz.
              </div>
            </div>
          </div>
        ) : (
          <>
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
          </>
        )}
      </body>
    </html>
  );
}
