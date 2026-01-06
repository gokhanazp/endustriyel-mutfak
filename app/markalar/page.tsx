
import Link from 'next/link';
import { brands } from '@/lib/data';
import { ArrowRight, Star } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Markalar | Endüstriyel Buzdolabı Servisi',
    description: 'Empero, İnoksan, Öztiryakiler ve diğer tüm markalar için yetkili servis kalitesinde hizmet.',
};


export default function BrandsPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Premium Hero Section */}
            <div className="relative bg-slate-900 overflow-hidden py-24 border-b border-primary-900/50">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
                {/* Gradient Orbs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-500/10 rounded-full blur-3xl -ml-16 -mb-16"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-primary-300 text-sm font-semibold mb-6 border border-white/10 backdrop-blur-sm">
                        Profesyonel Servis Ağı
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        Hizmet Verdiğimiz <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Markalar</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Dünyanın önde gelen endüstriyel mutfak markaları için yetkili servis kalitesinde, orijinal yedek parça garantili bakım ve onarım hizmeti.
                    </p>
                </div>
            </div>

            {/* Brands Grid Section */}
            <div className="container mx-auto px-4 py-20 -mt-20 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {brands.map((brand, index) => (
                        <Link
                            href={`/markalar/${brand.slug}`}
                            key={index}
                            className="group bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col items-center text-center"
                        >
                            {/* Hover Background Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Logo Container */}
                            <div className="relative z-10 bg-slate-50 border border-slate-100 rounded-2xl p-6 w-full h-40 flex items-center justify-center mb-6 group-hover:bg-white group-hover:shadow-md transition-all">
                                {brand.image ? (
                                    <img
                                        src={brand.image}
                                        alt={`${brand.display} Servisi`}
                                        className="max-h-24 max-w-[80%] object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
                                    />
                                ) : (
                                    <span className="text-3xl font-black text-slate-300 group-hover:text-slate-900 transition-colors">{brand.display}</span>
                                )}
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                                    {brand.display}
                                </h3>
                                <p className="text-slate-500 mb-6 text-sm">
                                    Profesyonel tamir, bakım ve yedek parça servisi.
                                </p>
                                <span className="inline-flex items-center justify-center gap-2 text-sm font-bold text-slate-700 bg-slate-100 px-6 py-3 rounded-full group-hover:bg-primary-600 group-hover:text-white transition-all">
                                    Servis Çağır <ArrowRight className="h-4 w-4" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Bottom Info Section */}
            <div className="container mx-auto px-4 pb-20">
                <div className="bg-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent-600/20 rounded-full blur-3xl -mr-16 -mt-16"></div>

                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Listede markanız yok mu?</h2>
                            <p className="text-slate-300 mb-8 leading-relaxed">
                                Endişelenmeyin. Tecrübeli ekibimiz piyasadaki tüm endüstriyel soğutma ve mutfak ekipmanlarının çalışma prensiplerine hakimdir. Marka bağımsız servis hizmetimiz için bize ulaşın.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/iletisim"
                                    className="px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-primary-50 transition-colors"
                                >
                                    Bize Ulaşın
                                </Link>
                                <a
                                    href="tel:05369319667"
                                    className="px-8 py-3 bg-transparent border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-colors"
                                >
                                    0536 931 96 67
                                </a>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                                <Star className="h-8 w-8 text-yellow-400 mb-4" />
                                <h4 className="font-bold text-white text-lg">Özel Servis</h4>
                                <p className="text-slate-400 text-sm">Tüm markalara özel teknik servis hizmeti.</p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                                <ArrowRight className="h-8 w-8 text-primary-400 mb-4" />
                                <h4 className="font-bold text-white text-lg">Hızlı Çözüm</h4>
                                <p className="text-slate-400 text-sm">%98 oranında yerinde onarım başarısı.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
