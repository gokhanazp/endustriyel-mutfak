
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
  description: "İstanbul genelinde en yakın endüstriyel buzdolabı tamircisi olarak 7/24 profesyonel tamir, bakım ve teknik servis hizmeti sunuyoruz. Orijinal parça garantili.",
  metadataBase: new URL("https://endustriyelbuzdolabitamircisi.com"),
  robots: { index: true, follow: true },
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
      </body>
    </html>
  );
}
