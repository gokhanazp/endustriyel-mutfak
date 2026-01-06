
import { Phone, Mail, Clock } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'İletişim | Endüstriyel Buzdolabı Tamircisi',
    description: 'İstanbul içi arıza kaydı oluşturmak ve servis çağırmak için iletişim bilgilerimiz. 7/24 Telefon: 0536 931 96 67',
};

export default function ContactPage() {
    return (
        <div className="bg-slate-50 min-h-screen py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">İletişim</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        7/24 Servis hattımızdan bize ulaşabilir veya formu doldurarak servis talebi oluşturabilirsiniz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-6">
                            <div className="bg-primary-100 p-4 rounded-full text-primary-600">
                                <Phone className="h-8 w-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Telefon</h3>
                                <p className="text-slate-500 mb-2">7/24 Acil Çağrı Merkezi</p>
                                <a href="tel:05369319667" className="text-2xl font-bold text-primary-600 hover:text-primary-700 block">0536 931 96 67</a>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-6">
                            <div className="bg-primary-100 p-4 rounded-full text-primary-600">
                                <Mail className="h-8 w-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">E-Mail</h3>
                                <p className="text-slate-500 mb-2">Teknik destek ve teklif için</p>
                                <a href="mailto:info@endustriyelbuzdolabitamircisi.com" className="text-lg font-bold text-slate-900 hover:text-primary-600 block">info@endustriyelbuzdolabitamircisi.com</a>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-6">
                            <div className="bg-primary-100 p-4 rounded-full text-primary-600">
                                <Clock className="h-8 w-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Çalışma Saatleri</h3>
                                <p className="text-slate-500">Pazartesi - Cumartesi: 08:00 - 20:00</p>
                                <p className="text-slate-500">Pazar: Nöbetçi Ekip (Acil Durum)</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-primary-50">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Servis Talep Formu</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="Adınız Soyadınız" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500" />
                                <input type="text" placeholder="Telefon No" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500" />
                            </div>
                            <input type="text" placeholder="İlçe / Mahalle" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500" />
                            <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-slate-500">
                                <option>Hizmet Seçiniz</option>
                                <option>Buzdolabı Tamiri</option>
                                <option>Soğuk Oda Servisi</option>
                                <option>Bakım / Montaj</option>
                            </select>
                            <textarea rows={4} placeholder="Arıza Detayı" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"></textarea>
                            <button type="submit" className="w-full py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors">Gönder</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
