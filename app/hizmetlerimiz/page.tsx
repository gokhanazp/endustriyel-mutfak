
import Link from 'next/link';
import { services } from '@/lib/data';
import { Wrench, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Hizmetlerimiz | Endüstriyel Buzdolabı Tamircisi',
    description: 'İstanbul içi tüm endüstriyel buzdolabı tamiri ve sanayi tipi mutfak ekipmanları tamircisi hizmetlerimiz. 7/24 hızlı teknik servis.',
};

export default function ServicesPage() {
    return (
        <div className="bg-slate-50 min-h-screen py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Hizmetlerimiz</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        İşletmenizin ihtiyaç duyduğu tüm profesyonel soğutma ve mutfak teknik servis çözümleri.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Link href={`/hizmetlerimiz/${service.slug}`} key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
                            <div className="flex items-center justify-between mb-6">
                                <div className="h-12 w-12 bg-primary-100 rounded-xl flex items-center justify-center">
                                    <Wrench className="h-6 w-6 text-primary-600" />
                                </div>
                                <ArrowRight className="h-5 w-5 text-slate-300 group-hover:text-primary-600 transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-slate-500 mb-6">{service.shortDesc}</p>
                            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Hemen İncele</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
