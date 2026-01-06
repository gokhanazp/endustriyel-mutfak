
import { brands, districts } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Phone, MapPin, Search, Calendar, Shield, Award } from 'lucide-react';
import type { Metadata } from 'next';

// Simple slugify for TR
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

// Generate all possible combinations
const combinations = brands.flatMap(brand =>
    districts.map(district => ({
        brand,
        district,
        slug: `${brand.slug}-${slugify(district)}`
    }))
);

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return combinations.map(c => ({
        slug: c.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const combo = combinations.find(c => c.slug === slug);
    if (!combo) return { title: 'Sayfa Bulunamadı' };

    return {
        title: `${combo.district} ${combo.brand.display} Servisi | Aynı Gün Tamir`,
        description: `${combo.district} bölgesinde ${combo.brand.display} endüstriyel buzdolabı ve mutfak servisi. En yakın tamirci, acil servis, orijinal parça garantisi.`,
    };
}

export default async function DistrictLandingPage({ params }: Props) {
    const { slug } = await params;
    const combo = combinations.find(c => c.slug === slug);

    if (!combo) {
        notFound();
    }

    const { brand, district } = combo;

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Local SEO Hero */}
            <div className="bg-white pb-16 pt-24 border-b border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="md:w-1/2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm mb-6">
                                <MapPin className="h-4 w-4" /> {district} Bölgesi Aktif
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                {district} <span className="text-primary-600">{brand.display}</span> Servisi
                            </h1>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                {district} ilçesindeki işletmeniz için {brand.display} marka endüstriyel dolap ve mutfak ekipmanlarına aynı gün içinde servis sağlıyoruz.
                                Acil tamir ihtiyacınızda en yakın ekibimiz yanınızda.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="tel:05369319667" className="flex items-center justify-center gap-2 px-8 py-4 bg-accent-600 hover:bg-accent-700 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-xl">
                                    <Phone className="h-5 w-5" />
                                    Hemen Ara: 0536 931 96 67
                                </a>
                            </div>
                        </div>

                        {/* Visual Trust Card */}
                        <div className="md:w-1/2 w-full">
                            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-slate-900 relative overflow-hidden shadow-xl">
                                <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 bg-primary-100 rounded-full blur-3xl opacity-50"></div>
                                <h3 className="text-xl font-bold mb-6 text-slate-900">Neden {district} Şubemiz?</h3>
                                <ul className="space-y-4 relative z-10">
                                    <li className="flex items-center gap-3">
                                        <div className="bg-primary-100 p-2 rounded-lg text-primary-600">
                                            <Calendar className="h-5 w-5" />
                                        </div>
                                        <span className="font-medium text-slate-700">Aynı gün, randevulu servis</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="bg-primary-100 p-2 rounded-lg text-primary-600">
                                            <Shield className="h-5 w-5" />
                                        </div>
                                        <span className="font-medium text-slate-700">1 Yıl bölge garantisi</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="bg-primary-100 p-2 rounded-lg text-primary-600">
                                            <Award className="h-5 w-5" />
                                        </div>
                                        <span className="font-medium text-slate-700">{brand.display} sertifikalı uzmanlar</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="bg-primary-100 p-2 rounded-lg text-primary-600">
                                            <Search className="h-5 w-5" />
                                        </div>
                                        <span className="font-medium text-slate-700">Ücretsiz arıza tespiti (onarımda)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">{district} {brand.display} Tamircisi</h2>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        {district} genelinde hizmet veren gezici servis araçlarımızla, {brand.display} marka sanayi tipi buzdolabı,
                        tezgah altı dolap, market reyonu ve soğuk oda arızalarına müdahale ediyoruz. İşletmenizin konumuna en yakın
                        ekibimizi yönlendirerek zaman kaybını önlüyoruz.
                    </p>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        {brand.display} cihazlarınızın verimini artırmak ve enerji tasarrufu sağlamak için periyodik bakım hizmetimizden
                        faydalanabilirsiniz. {district} bölgesindeki referanslarımız ve tecrübemizle %100 müşteri memnuniyeti hedefliyoruz.
                    </p>

                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
                        <h3 className="font-bold text-slate-900 mb-4">{district} İçin Hizmet Verdiğimiz Mahalleler</h3>
                        <p className="text-sm text-slate-500">
                            {/* Here we could list neighborhoods if we had data, for now generic text */}
                            {district} ilçesinin tüm mahalle ve semtlerinde, cadde ve sokaklarında aktif servis ağımız bulunmaktadır.
                            Acil durumlar için özel nöbetçi ekibimiz mevcuttur.
                        </p>
                    </div>
                </div>
            </div>

            {/* FAQ for Local SEO */}
            <div className="bg-white py-16 border-t border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">{district} {brand.display} Servisi SSS</h2>
                    <div className="space-y-4">
                        <div className="p-4 bg-slate-50 rounded-lg">
                            <h4 className="font-bold text-slate-800 mb-2">{district} bölgesine ne kadar sürede geliyorsunuz?</h4>
                            <p className="text-slate-600 text-sm">Çağrı kaydınız alındıktan sonra, {district} bölgesindeki en yakın ekibimiz ortalama 2 saat içinde adresinize yönlendirilir.</p>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-lg">
                            <h4 className="font-bold text-slate-800 mb-2">{brand.display} parçaları orijinal mi?</h4>
                            <p className="text-slate-600 text-sm">Evet, tüm onarımlarda orijinal veya muadili 1. sınıf yedek parçalar kullanılır ve garantilidir.</p>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-lg">
                            <h4 className="font-bold text-slate-800 mb-2">Pazar günü servisiniz var mı?</h4>
                            <p className="text-slate-600 text-sm">Acil durumlar için {district} genelinde nöbetçi ekiplerimiz haftanın 7 günü hizmet vermektedir.</p>
                        </div>
                    </div>
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        "name": `${combo.brand.display} Servisi ${combo.district}`,
                        "description": `${combo.district} bölgesinde profesyonel ${combo.brand.display} endüstriyel buzdolabı tamiri ve servisi.`,
                        "telephone": "0536 931 96 67",
                        "areaServed": {
                            "@type": "City",
                            "name": combo.district
                        },
                        "priceRange": "₺₺",
                        "openingHoursSpecification": [
                            {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                                "opens": "00:00",
                                "closes": "23:59"
                            }
                        ]
                    })
                }}
            />
        </div>
    );
}
