
import { brands, districts } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Phone, CheckCircle, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';


interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return brands.map((brand) => ({
        slug: brand.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const brand = brands.find((b) => b.slug === slug);
    if (!brand) return { title: 'Marka Bulunamadı' };

    return {
        title: `${brand.display} Servisi - İstanbul Endüstriyel Buzdolabı Tamiri`,
        description: `İstanbul'da yetkili kalitesinde özel ${brand.display} endüstriyel buzdolabı ve mutfak ekipmanları servisi. Aynı gün tamir, orijinal yedek parça.`,
    };
}

// Slugify helper
const slugify = (text: string) => {
    const trMap: { [key: string]: string } = {
        'ç': 'c', 'Ç': 'c', 'ğ': 'g', 'Ğ': 'g', 'ş': 's', 'Ş': 's',
        'ü': 'u', 'Ü': 'u', 'ı': 'i', 'İ': 'i', 'ö': 'o', 'Ö': 'o'
    };
    return text
        .split('')
        .map(c => trMap[c] || c)
        .join('')
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
};

export default async function BrandPage({ params }: Props) {
    const { slug } = await params;
    const brand = brands.find((b) => b.slug === slug);

    if (!brand) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Premium Hero with Gradient */}
            <div className="relative bg-slate-900 overflow-hidden pt-24 pb-32">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-900/80 to-slate-900 z-10"></div>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')]"></div>
                </div>

                <div className="container mx-auto px-4 relative z-20 text-center">
                    <div className="bg-white p-8 rounded-3xl inline-flex items-center justify-center mb-6 shadow-2xl shadow-primary-900/20 min-w-[260px] min-h-[140px]">
                        {brand.image ? (
                            <img
                                src={brand.image}
                                alt={`${brand.display} Servisi`}
                                className="h-16 md:h-20 w-auto object-contain"
                            />
                        ) : (
                            <h1 className="text-4xl font-black text-slate-900 px-4">{brand.display}</h1>
                        )}
                    </div>

                    <div className="flex justify-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white border border-white/10 backdrop-blur-sm">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span className="text-sm font-bold tracking-wide">Yetkili Servis Kalitesinde Hizmet</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        İstanbul <span className="text-primary-400">{brand.display}</span> Servisi
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        {brand.display} marka endüstriyel mutfak ve soğutma cihazlarınız için uzman teknisyenlerimizle,
                        orijinal yedek parça güvencesiyle 7/24 yerinde hizmet sunuyoruz.
                    </p>
                </div>
            </div>

            {/* Main Content Card */}
            <div className="container mx-auto px-4 -mt-20 relative z-30">
                <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-slate-100">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="bg-primary-100 p-3 rounded-2xl">
                                    <ShieldCheck className="h-8 w-8 text-primary-600" />
                                </span>
                                <h2 className="text-2xl font-bold text-slate-900">{brand.display} Uzmanlığı</h2>
                            </div>

                            <p className="text-slate-600 mb-8 leading-relaxed">
                                {brand.display} cihazlarınızın teknolojisine hakimiz. Arıza tespiti, bakım ve onarım süreçlerinde
                                marka standartlarına uygun prosedürler uyguluyoruz.
                            </p>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                                    <span className="text-slate-700 font-medium">Orijinal {brand.display} Yedek Parça</span>
                                </li>
                                <li className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                                    <span className="text-slate-700 font-medium">1 Yıl Garanti (Parça ve İşçilik)</span>
                                </li>
                                <li className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                                    <span className="text-slate-700 font-medium">Aynı Gün Acil Servis İmkanı</span>
                                </li>
                            </ul>

                            <div className="mt-8 flex gap-4">
                                <a href="tel:05369319667" className="flex-1 bg-slate-900 text-white text-center py-4 rounded-xl font-bold hover:bg-primary-600 transition-colors shadow-lg">
                                    Hemen Ara
                                </a>
                                <a href="#ilceler" className="flex-1 bg-slate-100 text-slate-700 text-center py-4 rounded-xl font-bold hover:bg-slate-200 transition-colors">
                                    Bölgeler
                                </a>
                            </div>
                        </div>

                        {/* Visual / CTA Side */}
                        <div className="bg-slate-50 p-8 md:p-12 lg:p-16 flex flex-col justify-center items-center text-center">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{brand.display} Cihaz Arızaları</h3>
                            <div className="grid grid-cols-2 gap-3 w-full max-w-sm mb-8">
                                {['Motor Arızası', 'Fan Değişimi', 'Gaz Basımı', 'Kart Tamiri', 'Termostat', 'Conta Değişimi'].map(item => (
                                    <div key={item} className="bg-white py-3 px-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 shadow-sm">
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <p className="text-slate-500 text-sm mb-6 max-w-xs">
                                Yukarıdaki arızalardan birini mi yaşıyorsunuz? Vakit kaybetmeyin.
                            </p>
                            <a href="tel:05369319667" className="text-2xl font-bold text-primary-600 hover:text-primary-700 flex items-center gap-2">
                                <Phone className="h-6 w-6 animate-pulse" />
                                0536 931 96 67
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* District Grid Section */}
            <div id="ilceler" className="container mx-auto px-4 py-24">
                <div className="text-center mb-12">
                    <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2 block">Yaygın Hizmet Ağı</span>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">İstanbul {brand.display} Servis Noktaları</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        39 ilçede aktif mobil servis araçlarımızla {brand.display} kullanıcılarına kesintisiz destek veriyoruz.
                        Size en yakın bölgeyi seçerek servis detaylarına ulaşın.
                    </p>
                </div>

                <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-slate-200 shadow-sm">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-4 gap-x-2">
                        {districts.map((district) => (
                            <Link
                                key={district}
                                href={`/${brand.slug}-${slugify(district)}`}
                                className="group flex items-center p-3 rounded-lg hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
                            >
                                <div className="h-2 w-2 rounded-full bg-slate-300 group-hover:bg-primary-500 mr-3 transition-colors"></div>
                                <span className="text-sm font-medium text-slate-600 group-hover:text-primary-700 group-hover:font-bold">
                                    {district}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="bg-slate-900 border-t border-slate-800 py-16">
                <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Profesyonel {brand.display} Çözümleri</h2>
                    <a href="tel:05369319667" className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors shadow-xl">
                        Hemen Servis Çağır
                    </a>
                </div>
            </div>
        </div>
    );
}
