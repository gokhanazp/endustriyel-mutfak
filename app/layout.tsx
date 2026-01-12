
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Snowflake, Clock, Phone } from 'lucide-react';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// BAKIM MODU AYARI (Google indekslemesini her zaman engeller)
const isMaintenanceMode = true;

export const metadata: Metadata = {
  title: isMaintenanceMode ? "Sitemiz Yapım Aşamasında" : {
    template: "%s | İstanbul Endüstriyel Buzdolabı Tamircisi",
    default: "Endüstriyel Buzdolabı Tamircisi - 7/24 Profesyonel Servis",
  },
  description: "İstanbul genelinde en yakın endüstriyel buzdolabı tamircisi olarak 7/24 profesyonel tamir, bakım ve teknik servis hizmeti sunuyoruz. Orijinal parça garantili.",
  metadataBase: new URL("https://endustriyelbuzdolabitamircisi.com"),
  robots: { index: false, follow: false }, // Yapım aşamasında indeksleme kapalı
};

// İstemci tarafı kontrolü için küçük bir script
const maintenanceBypassScript = `
  (function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('onizleme') === 'ac') {
      localStorage.setItem('maintenance_bypass', 'true');
      // URL'deki parametreyi temizle (şık dursun)
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <script dangerouslySetInnerHTML={{ __html: maintenanceBypassScript }} />
        <style dangerouslySetInnerHTML={{
          __html: `
          .maintenance-overlay {
            position: fixed;
            inset: 0;
            z-index: 9999;
            background: #f8fafc;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          /* Eğer localstorage'da izin varsa overlay'i gizle */
          html.authorized .maintenance-overlay {
            display: none !important;
          }
        `}} />
      </head>
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
        {/* Bakım Modu Katmanı */}
        <div id="maintenance-screen" className="maintenance-overlay">
          <div className="max-w-xl w-full text-center p-4">
            <div className="mb-8 inline-flex items-center justify-center p-4 bg-primary-600 rounded-3xl shadow-xl text-white animate-pulse">
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
                <a href="tel:05369319667" className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-600 transition-all">
                  <Phone className="h-5 w-5" /> 0536 931 96 67
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Gerçek İçerik (Sadece yetkili kullanıcı ve build sonrası görünür) */}
        <div id="main-content">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>

        {/* Yetki Kontrol Scripti */}
        <script dangerouslySetInnerHTML={{
          __html: `
          (function() {
            if (localStorage.getItem('maintenance_bypass') === 'true') {
              document.documentElement.classList.add('authorized');
              document.getElementById('maintenance-screen').style.display = 'none';
            }
          })();
        `}} />
      </body>
    </html>
  );
}
