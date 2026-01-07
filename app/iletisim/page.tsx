
'use client';

import React, { useState } from 'react';
import { Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        location: '',
        service: 'Buzdolabı Tamiri',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // WhatsApp mesaj formatını hazırla
        const message = `*Yeni Servis Talebi*\n\n` +
            `*Ad Soyad:* ${formData.name}\n` +
            `*Telefon:* ${formData.phone}\n` +
            `*Bölge:* ${formData.location}\n` +
            `*Hizmet:* ${formData.service}\n` +
            `*Arıza Detayı:* ${formData.message}`;

        const whatsappUrl = `https://wa.me/905369319667?text=${encodeURIComponent(message)}`;

        // WhatsApp'a yönlendir
        window.open(whatsappUrl, '_blank');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="bg-slate-50 min-h-screen py-20 pb-40">
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
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-6 hover:shadow-md transition-shadow">
                            <div className="bg-primary-100 p-4 rounded-full text-primary-600">
                                <Phone className="h-8 w-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Telefon</h3>
                                <p className="text-slate-500 mb-2">7/24 Acil Çağrı Merkezi</p>
                                <a href="tel:05369319667" className="text-2xl font-bold text-primary-600 hover:text-primary-700 block">0536 931 96 67</a>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-6 hover:shadow-md transition-shadow">
                            <div className="bg-primary-100 p-4 rounded-full text-primary-600">
                                <Mail className="h-8 w-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">E-Mail</h3>
                                <p className="text-slate-500 mb-2">Teknik destek ve teklif için</p>
                                <a href="mailto:info@endustriyelbuzdolabitamircisi.com" className="text-lg font-bold text-slate-900 hover:text-primary-600 block break-all">info@endustriyelbuzdolabitamircisi.com</a>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-6 hover:shadow-md transition-shadow">
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
                    <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-slate-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary-50 rounded-bl-full -z-0 opacity-50"></div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-8 relative z-10">Servis Talep Formu</h3>
                        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-400 uppercase ml-1">Adınız Soyadınız</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Ad Soyad"
                                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-50"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-400 uppercase ml-1">Telefon No</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="05xx xxx xx xx"
                                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-50"
                                    />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-400 uppercase ml-1">İlçe / Mahalle</label>
                                <input
                                    type="text"
                                    name="location"
                                    required
                                    value={formData.location}
                                    onChange={handleChange}
                                    placeholder="Örn: Beşiktaş / Ortaköy"
                                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-50"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-400 uppercase ml-1">İhtiyaç Duyulan Hizmet</label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-50 text-slate-700"
                                >
                                    <option>Buzdolabı Tamiri</option>
                                    <option>Soğuk Oda Servisi</option>
                                    <option>Market / Sütlük Dolabı</option>
                                    <option>Pasta / Kebap Dolabı</option>
                                    <option>Periyodik Bakım</option>
                                    <option>Diğer</option>
                                </select>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-400 uppercase ml-1">Arıza veya Talep Detayı</label>
                                <textarea
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder="Cihazın markası ve arızayı kısaca yazınız..."
                                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-50"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-slate-900 transition-all shadow-lg shadow-primary-500/20 flex items-center justify-center gap-2 group"
                            >
                                Servis Kaydı Aç
                            </button>
                            <p className="text-[10px] text-slate-400 text-center mt-4">
                                * Gönder butonuna tıkladığınızda bilgileriniz otomatik olarak WhatsApp hattımıza aktarılacaktır.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
