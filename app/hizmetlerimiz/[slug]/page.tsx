
import { services, commonFaults } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Phone, CheckCircle, AlertTriangle, ArrowRight, Snowflake, Zap, Volume2, Thermometer, DoorClosed, Flame, Wind } from 'lucide-react';
import type { Metadata } from 'next';


interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);
    if (!service) return { title: 'Hizmet Bulunamadı' };

    return {
        title: `${service.title} - İstanbul 7/24 Garantili Tamir Servisi`,
        description: `${service.title} hizmeti için İstanbul'un tüm ilçelerinde 7/24 acil servis, orijinal yedek parça ve 1 yıl garanti sunuyoruz. Hemen arayın!`,
    };
}


export default async function ServicePage({ params }: Props) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Professional Hero Section */}
            <div className="relative bg-slate-900 border-b border-primary-900/50 py-24 overflow-hidden">
                {/* Background Image */}
                {service.image && (
                    <div className="absolute inset-0 z-0">
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover opacity-30"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900"></div>
                    </div>
                )}
                <div className="absolute inset-0 opacity-20 bg-[url('/grid.svg')] z-0"></div>
                {/* Gradient Orbs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-3xl -mr-32 -mt-32 z-0"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-500/10 rounded-full blur-3xl -ml-16 -mb-16 z-0"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-2/3">
                            <Link
                                href="/hizmetlerimiz"
                                className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-6 group text-sm font-medium transition-colors"
                            >
                                <ArrowRight className="h-4 w-4 rotate-180 mr-2 group-hover:-translate-x-1 transition-transform" />
                                Tüm Hizmetler
                            </Link>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                {service.title}
                            </h1>
                            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl border-l-4 border-primary-500 pl-6">
                                {service.shortDesc} İstanbul'un her noktasına 7/24 acil servis ve garantili onarım hizmeti.
                            </p>
                        </div>
                        {/* Hero Stats/Trust Badge */}
                        <div className="lg:w-1/3 w-full">
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 grid grid-cols-2 gap-4">
                                <div className="text-center p-4 bg-white/5 rounded-xl">
                                    <div className="text-3xl font-bold text-primary-400 mb-1">7/24</div>
                                    <div className="text-xs text-slate-400 uppercase tracking-wider">Acil Servis</div>
                                </div>
                                <div className="text-center p-4 bg-white/5 rounded-xl">
                                    <div className="text-3xl font-bold text-accent-400 mb-1">1 Yıl</div>
                                    <div className="text-xs text-slate-400 uppercase tracking-wider">Garanti</div>
                                </div>
                                <div className="text-center p-4 bg-white/5 rounded-xl">
                                    <div className="text-3xl font-bold text-green-400 mb-1">%100</div>
                                    <div className="text-xs text-slate-400 uppercase tracking-wider">Müşteri Memnuniyeti</div>
                                </div>
                                <div className="text-center p-4 bg-white/5 rounded-xl">
                                    <div className="text-3xl font-bold text-sky-400 mb-1">2 Saat</div>
                                    <div className="text-xs text-slate-400 uppercase tracking-wider">Hızlı Ulaşım</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-12 relative z-20 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Main Info Card */}
                        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <span className="bg-primary-100 p-2 rounded-lg"><CheckCircle className="h-6 w-6 text-primary-600" /></span>
                                Hizmet Kapsamı
                            </h2>
                            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                                <p className="text-lg mb-6">{service.content}</p>
                                <p>
                                    İstanbul genelinde <strong>{service.title.toLowerCase()}</strong> konusunda uzmanlaşmış ekiplerimizle,
                                    işletmenizdeki aksamaları en aza indiriyoruz. Arızanın kaynağı ne olursa olsun, son teknoloji
                                    tespit cihazlarımızla nokta atışı teşhis koyuyor ve onarıyoruz.
                                </p>
                            </div>
                        </div>

                        {/* Improved Common Issues Grid */}
                        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-slate-100">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                                    <span className="bg-accent-100 p-2 rounded-lg"><AlertTriangle className="h-6 w-6 text-accent-600" /></span>
                                    Sık Karşılaşılan Arızalar
                                </h2>
                                <span className="text-sm font-bold text-primary-600 bg-primary-50 px-4 py-1.5 rounded-full">
                                    Tüm Markalar İçin Geçerlidir
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {commonFaults.map((category, idx) => {
                                    const IconComponent = category.icon === 'Snowflake' ? Snowflake :
                                        category.icon === 'Zap' ? Zap :
                                            category.icon === 'Volume2' ? Volume2 :
                                                category.icon === 'Thermometer' ? Thermometer :
                                                    category.icon === 'DoorClosed' ? DoorClosed :
                                                        category.icon === 'Flame' ? Flame :
                                                            category.icon === 'Wind' ? Wind : AlertTriangle;

                                    return (
                                        <div key={idx} className="group border border-slate-100 rounded-2xl p-6 hover:border-primary-200 hover:shadow-md transition-all duration-300">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-primary-50 transition-colors">
                                                    <IconComponent className="h-5 w-5 text-slate-400 group-hover:text-primary-600 transition-colors" />
                                                </div>
                                                <h3 className="font-bold text-slate-800">{category.category}</h3>
                                            </div>
                                            <ul className="space-y-2">
                                                {category.keywords.map((kw, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-500 group-hover:text-slate-600">
                                                        <div className="h-1.5 w-1.5 rounded-full bg-slate-200 group-hover:bg-primary-500 mt-1.5 shrink-0"></div>
                                                        <span>{kw}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-8 bg-slate-900 rounded-2xl p-6 text-white text-center">
                                <p className="mb-4 font-medium italic">"Eğer yukarıdaki sorunlardan birini yaşıyorsanız, cihazınızı fişten çekip hemen bizi arayın. Daha büyük arızaların önüne geçmek için profesyonel destek şarttır."</p>
                                <a href="tel:05369319667" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-primary-500/25">
                                    <Phone className="h-5 w-5" /> Acil Servis: 0536 931 96 67
                                </a>
                            </div>
                        </div>

                        {/* FAQ Accordion */}
                        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Sıkça Sorulan Sorular</h2>
                            <div className="space-y-3">
                                {[
                                    { q: "Servis ücreti ne kadar?", a: "Servis ücretlerimiz arıza tespiti ve değişecek parçaya göre belirlenir. İşlem öncesi size net fiyat sunulur." },
                                    { q: "Hangi markalara hizmet veriyorsunuz?", a: "Piyasadaki tüm endüstriyel mutfak markalarına (Empero, İnoksan, Öztiryakiler vb.) yetkili servis kalitesinde hizmet veriyoruz." },
                                    { q: "Parça garantisi var mı?", a: "Evet, taktığımız tüm orijinal yedek parçalar 1 yıl boyunca firma garantimiz altındadır." },
                                ].map((faq, i) => (
                                    <details key={i} className="group bg-slate-50 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 font-bold text-slate-700 hover:bg-slate-100 hover:text-primary-600 transition-colors">
                                            <span>{faq.q}</span>
                                            <ArrowRight className="h-4 w-4 transition-transform group-open:rotate-90 text-slate-400" />
                                        </summary>
                                        <div className="px-4 pb-4 pt-2 text-slate-600 leading-relaxed border-t border-slate-100">
                                            {faq.a}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Sticky Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Call to Action Card */}
                        <div className="bg-white rounded-2xl shadow-xl border border-primary-100 p-6 sticky top-24 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-full blur-3xl -mr-16 -mt-16 opacity-50"></div>

                            <h3 className="text-xl font-bold text-slate-900 mb-2 relative z-10">Acil Servis Hattı</h3>
                            <p className="text-slate-500 mb-6 text-sm relative z-10">
                                Ustalarımız şuan bölgenizde. Beklemeden servis kaydı oluşturun.
                            </p>

                            <a href="tel:05369319667" className="block w-full text-center bg-slate-900 hover:bg-primary-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-primary-500/30 mb-4 group relative z-10">
                                <span className="flex items-center justify-center gap-2">
                                    <Phone className="h-5 w-5 animate-pulse" />
                                    0536 931 96 67
                                </span>
                            </a>

                            <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-400 relative z-10">
                                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                                Şimdi Ararsanız ~30dk içinde dönüş
                            </div>
                        </div>

                        {/* Recent Service Locations or Other Services */}
                        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
                            <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Diğer Hizmetlerimiz</h3>
                            <ul className="space-y-2">
                                {services.filter(s => s.slug !== slug).slice(0, 6).map(s => (
                                    <li key={s.slug}>
                                        <Link href={`/hizmetlerimiz/${s.slug}`} className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 text-slate-600 hover:text-primary-600 transition-colors text-sm group">
                                            {s.title}
                                            <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-4 pt-4 border-t border-slate-100 text-center">
                                <Link href="/hizmetlerimiz" className="text-xs font-bold text-primary-600 hover:underline">Tüm Hizmetleri Gör</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* JSON-LD for Service-specific FAQ */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": commonFaults.map(fault => ({
                            "@type": "Question",
                            "name": `${service.title} - ${fault.category} Nelerdir?`,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": `${service.title} için ${fault.category} arasında şunlar yer alır: ${fault.keywords.join(", ")}. Bu tür sorunlarda 0536 931 96 67 numaralı hattımızdan 7/24 teknik destek alabilirsiniz.`
                            }
                        }))
                    })
                }}
            />

            {/* Bottom CTA Bar */}
            <div className="bg-gradient-to-r from-primary-900 to-slate-900 py-12">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Profesyonel Çözüm Ortağınız</h2>
                    <p className="text-primary-200 max-w-2xl mx-auto mb-8">
                        Endüstriyel mutfak ekipmanlarınız emin ellerde. Yılların tecrübesi ve uzman kadromuzla hizmetinizdeyiz.
                    </p>
                    <a href="tel:05369319667" className="inline-block bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-primary-50 transition-colors shadow-lg">
                        Bize Ulaşın
                    </a>
                </div>
            </div>
        </div>
    );
}

