
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Snowflake } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-primary-500 p-2 rounded-lg group-hover:rotate-12 transition-transform">
                                <Snowflake className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-white tracking-tight">
                                Endüstriyel<span className="text-primary-500">Servis</span>
                            </span>
                        </div>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            İstanbul genelinde endüstriyel soğutma ve mutfak ekipmanları için 7/24 profesyonel teknik servis hizmeti. Orijinal yedek parça ve garantili işçilik.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary-500 transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary-500 transition-colors"><Instagram className="h-5 w-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Hızlı Erişim</h3>
                        <ul className="space-y-3">
                            <li><Link href="/hizmetlerimiz" className="hover:text-primary-400 transition-colors">Tüm Hizmetler</Link></li>
                            <li><Link href="/markalar" className="hover:text-primary-400 transition-colors">Markalarımız</Link></li>
                            <li><Link href="/blog" className="hover:text-primary-400 transition-colors">Blog</Link></li>
                            <li><Link href="/iletisim" className="hover:text-primary-400 transition-colors">İletişim</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Popüler Hizmetler</h3>
                        <ul className="space-y-3">
                            <li><Link href="/hizmetlerimiz/endustriyel-buzdolabi-servisi" className="hover:text-primary-400 transition-colors">Endüstriyel Buzdolabı Servisi</Link></li>
                            <li><Link href="/hizmetlerimiz/soguk-oda-servisi" className="hover:text-primary-400 transition-colors">Soğuk Oda Servisi</Link></li>
                            <li><Link href="/hizmetlerimiz/tezgah-tip-buzdolabi-servisi" className="hover:text-primary-400 transition-colors">Tezgah Tipi Dolap Tamiri</Link></li>
                            <li><Link href="/hizmetlerimiz/market-dolabi-servisi" className="hover:text-primary-400 transition-colors">Market Dolabı Tamiri</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">İletişim</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <MapPin className="h-6 w-6 text-primary-500 shrink-0" />
                                <span>İstanbul Geneli Gezici Servis</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="h-6 w-6 text-primary-500 shrink-0" />
                                <a href="tel:05369319667" className="hover:text-primary-400 transition-colors">0536 931 96 67</a>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="h-6 w-6 text-primary-500 shrink-0" />
                                <a href="mailto:info@endustriyelbuzdolabitamircisi.com" className="hover:text-primary-400 transition-colors">info@site.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} Endüstriyel Buzdolabı Tamircisi. Tüm hakları saklıdır.</p>
                    <a href="https://gokhan-yildirim.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors flex items-center gap-2">
                        <span>Design & Developed by</span>
                        <span className="font-bold text-slate-300">Gökhan Yıldırım</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
