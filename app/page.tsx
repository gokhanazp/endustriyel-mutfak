
import Link from 'next/link';
import { services, brands, commonFaults } from '@/lib/data';
import { ArrowRight, Cog, PenTool, CheckCircle2, ChevronRight, Phone, MapPin, Snowflake, Zap, Volume2, Thermometer, DoorClosed, Flame, Wind, AlertTriangle } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/60 z-10"></div>
          <img
            src="/hero-bg.png"
            alt="Endüstriyel Mutfak Servisi"
            className="w-full h-full object-cover opacity-60 scale-105 animate-pulse-slow"
          />
        </div>

        <div className="container relative z-20 px-4 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-white mb-8 backdrop-blur-md">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
                </span>
                <span className="font-bold tracking-wide text-sm">İstanbul'un En Kapsamlı Servis Ağı</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
                Profesyonel <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-sky-300 to-primary-400 bg-300% animate-gradient">Soğutma Çözümleri</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-light border-l-2 border-primary-500 pl-6">
                Endüstriyel mutfak ekipmanlarınız ve ticari buzdolaplarınız için <strong className="text-white">kesintisiz performans garantisi.</strong> 39 ilçede, 7/24 acil teknik servis ve orijinal yedek parça desteği.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:05369319667" className="group px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3">
                  <Phone className="h-5 w-5 text-primary-600 group-hover:scale-110 transition-transform" />
                  Hemen Servis Çağır
                </a>
                <Link href="/markalar" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 rounded-full font-bold text-lg transition-all backdrop-blur-sm flex items-center justify-center gap-3">
                  Markalarımız
                  <ArrowRight className="h-5 w-5 opacity-70" />
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-8 text-slate-400 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary-500" />
                  Aynı Gün Servis
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary-500" />
                  1 Yıl Garanti
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary-500" />
                  Kurumsal Fatura
                </div>
              </div>
            </div>

            {/* Right Floating Card */}
            <div className="hidden lg:block relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary-500 to-accent-500 opacity-30 blur-2xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                  <div className="bg-primary-500/20 p-3 rounded-xl">
                    <Cog className="h-8 w-8 text-primary-400 animate-spin-slow" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">Teknik Servis Durumu</h3>
                    <p className="text-primary-300 text-sm">Canlı Operasyon Merkezi</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Aktif Bölge Sayısı</span>
                    <span className="text-white font-bold bg-white/5 px-2 py-1 rounded">39 İlçe</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Ortalama Varış Süresi</span>
                    <span className="text-green-400 font-bold bg-green-400/10 px-2 py-1 rounded">~120 Dk</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Nöbetçi Ekip</span>
                    <span className="text-white font-bold flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div> Aktif</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Infinite Brand Slider (Marquee) - SLOWER SPEED */}
      <section className="py-0 bg-white border-b border-slate-100 overflow-hidden">
        <div className="py-12 relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          <div className="flex w-max animate-scroll gap-16 items-center pause-on-hover">
            {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
              <Link href={`/markalar/${brand.slug}`} key={i} className="flex-shrink-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer group grayscale hover:grayscale-0 relative h-24 w-48 flex items-center justify-center">
                {brand.image ? (
                  <img
                    src={brand.image}
                    alt={`${brand.display} Yetkili Servisi`}
                    className="max-h-20 max-w-full object-contain"
                  />
                ) : (
                  <span className="text-3xl font-black text-slate-800 tracking-tighter group-hover:text-primary-600 transition-colors">
                    {brand.display.toUpperCase()}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Grid - CLEARER DESIGN */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2 block">Uzmanlık Alanlarımız</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Tamir ve Bakım Hizmetleri</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              İşletmenizdeki soğutma ekipmanları için profesyonel çözümler. Aşağıdaki hizmetlerden ihtiyacınız olanı seçin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link href={`/hizmetlerimiz/${service.slug}`} key={index} className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary-900/10 transition-all duration-500 border border-slate-100 hover:border-primary-500/30 block h-full">
                {/* Impactful Image Area */}
                <div className="relative h-56 overflow-hidden">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-100"></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>

                  {/* Floating Icon */}
                  <div className="absolute bottom-6 left-6">
                    <div className="bg-primary-600 p-3 rounded-2xl shadow-xl text-white transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                      {index % 3 === 0 ? <Snowflake className="h-6 w-6" /> :
                        index % 3 === 1 ? <Cog className="h-6 w-6" /> :
                          <PenTool className="h-6 w-6" />}
                    </div>
                  </div>
                </div>

                <div className="p-10">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary-600 transition-colors leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 mb-8 leading-relaxed line-clamp-2">
                    {service.shortDesc}
                  </p>

                  <div className="flex items-center gap-3 text-sm font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
                    <span className="bg-slate-100 group-hover:bg-primary-50 px-4 py-2 rounded-full transition-colors">Hizmeti İncele</span>
                    <div className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-primary-600 group-hover:border-primary-600 group-hover:text-white transition-all">
                      <ChevronRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems Section - SEO IMPACT */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 underline-decoration">
            <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2 block">Çözüm Sunduğumuz Sorunlar</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Sık Karşılaşılan Buzdolabı Arızaları</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              İşletmenizdeki endüstriyel soğutma cihazlarında en sık karşılaşılan sorunlar and profesyonel çözüm yollarımız.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commonFaults.slice(0, 4).map((category, idx) => {
              const IconComponent = category.icon === 'Snowflake' ? Snowflake :
                category.icon === 'Zap' ? Zap :
                  category.icon === 'Volume2' ? Volume2 :
                    category.icon === 'Thermometer' ? Thermometer :
                      category.icon === 'DoorClosed' ? DoorClosed :
                        category.icon === 'Flame' ? Flame :
                          category.icon === 'Wind' ? Wind : AlertTriangle;

              return (
                <div key={idx} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-primary-200 hover:bg-white hover:shadow-xl transition-all duration-500 group">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-all mb-6">
                    <IconComponent className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{category.category}</h3>
                  <ul className="space-y-3">
                    {category.keywords.slice(0, 3).map((kw, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-500 group-hover:text-slate-600">
                        <div className="h-1.5 w-1.5 rounded-full bg-slate-300 group-hover:bg-primary-500 mt-1.5 shrink-0"></div>
                        <span>{kw}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-500 mb-6 italic text-sm">
              * Listelenenler en sık karşılaşılan temel arızalardır. Her türlü teknik sorun için 7/24 destek alabilirsiniz.
            </p>
            <Link href="/hizmetlerimiz" className="inline-flex items-center gap-2 font-bold text-primary-600 hover:text-primary-700 transition-colors group">
              Tüm Arıza Türlerini Gör
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>


      {/* Coverage & Service Network Section */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-primary-50 rounded-full blur-3xl opacity-60"></div>
              <div className="relative bg-white border border-slate-100 p-8 rounded-3xl shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xl">İstanbul Servis Haritası</h3>
                    <p className="text-sm text-slate-500">Canlı Ekipler</p>
                  </div>
                </div>
                {/* Abstract Map Representation */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <h4 className="font-bold text-slate-800 mb-2">Avrupa Yakası</h4>
                    <ul className="text-sm text-slate-600 space-y-2">
                      {['Beşiktaş', 'Şişli', 'Beylikdüzü', 'Bakırköy'].map(d => (
                        <li key={d} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div> {d}
                        </li>
                      ))}
                      <li className="text-primary-600 font-medium text-xs">+21 İlçe Daha</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <h4 className="font-bold text-slate-800 mb-2">Anadolu Yakası</h4>
                    <ul className="text-sm text-slate-600 space-y-2">
                      {['Kadıköy', 'Ümraniye', 'Maltepe', 'Pendik'].map(d => (
                        <li key={d} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div> {d}
                        </li>
                      ))}
                      <li className="text-primary-600 font-medium text-xs">+14 İlçe Daha</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2 block">7/24 Kesintisiz Hizmet</span>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">En Yakın Teknik Servis Ekibimiz Sadece Bir Telefon Uzağınızda</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Endüstriyel cihaz arızaları zaman tanımaz. Bu yüzden İstanbul'un her iki yakasında, 39 ilçede konuşlanmış mobil ekiplerimizle çağrınıza en hızlı yanıtı veriyoruz.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900">Maksimum 2 Saat Varış Süresi</h4>
                    <p className="text-sm text-slate-500">Acil kayıtlarda bölgenizdeki en yakın ekip yönlendirilir.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900">Tam Donanımlı Mobil Araçlar</h4>
                    <p className="text-sm text-slate-500">Sık kullanılan yedek parçalar araç stoklarımızda mevcuttur.</p>
                  </div>
                </div>
              </div>

              <a href="tel:05369319667" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-primary-600 transition-colors shadow-xl">
                <Phone className="h-5 w-5" />
                Hemen Servis Çağır
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with JSON-LD */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Sıkça Sorulan Sorular</h2>
            <p className="text-slate-600">Servis sürecimiz ve hizmetlerimiz hakkında merak ettiğiniz her şey.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "Servis ücreti ne kadar?", a: "Servis ücretlerimiz arıza tespiti, değişecek parça ve işçilik durumuna göre belirlenmektedir. Arıza tespiti sonrası size net fiyat sunulur ve onayınız olmadan işlem yapılmaz." },
              { q: "Hangi markalara hizmet veriyorsunuz?", a: "Empero, İnoksan, Öztiryakiler, Ndustrio, Kayalar başta olmak üzere piyasadaki tüm endüstriyel mutfak ve soğutma markalarına yetkili servis kalitesinde hizmet veriyoruz." },
              { q: "Hafta sonu açık mısınız?", a: "Evet, cumartesi günleri tam gün, pazar günleri ise nöbetçi ekiplerimizle acil servis hizmeti sunmaya devam ediyoruz." },
              { q: "Parça garantisi var mı?", a: "Değişimini yaptığımız tüm orijinal yedek parçalar firmamız tarafından 1 yıl boyunca garanti kapsamındadır." },
              { q: "İstanbul dışına servisiniz var mı?", a: "Şu an için sadece İstanbul genelinde (Anadolu ve Avrupa yakası tüm ilçeler) hizmet vermekteyiz." },
              { q: "Aynı gün servis alabilir miyim?", a: "Çağrı merkezimizi aradığınızda, bölgenizdeki müsaitlik durumuna göre %90 oranında aynı gün içinde ekip yönlendirmesi yapabiliyoruz." }
            ].map((item, i) => (
              <details key={i} className="group bg-white rounded-xl border border-slate-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-bold hover:bg-slate-50 transition-colors">
                  <span className="text-lg">{item.q}</span>
                  <span className="relative h-5 w-5 shrink-0">
                    <ChevronRight className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0 transition-opacity text-slate-400" />
                    <ChevronRight className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100 transition-opacity rotate-90 text-primary-600" />
                  </span>
                </summary>
                <p className="mt-0 px-6 pb-6 text-slate-600 leading-relaxed border-t border-transparent group-open:border-slate-100 group-open:pt-4">
                  {item.a}
                </p>
              </details>
            ))}
          </div>

          {/* JSON-LD for FAQ */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  { "@type": "Question", "name": "Servis ücreti ne kadar?", "acceptedAnswer": { "@type": "Answer", "text": "Servis ücretlerimiz arıza tespiti, değişecek parça ve işçilik durumuna göre belirlenmektedir." } },
                  { "@type": "Question", "name": "Hangi markalara hizmet veriyorsunuz?", "acceptedAnswer": { "@type": "Answer", "text": "Empero, İnoksan, Öztiryakiler, Ndustrio, Kayalar ve tüm endüstriyel markalar." } },
                  { "@type": "Question", "name": "Hafta sonu açık mısınız?", "acceptedAnswer": { "@type": "Answer", "text": "Evet, 7/24 acil nöbetçi ekiplerimiz mevcuttur." } },
                  { "@type": "Question", "name": "Parça garantisi var mı?", "acceptedAnswer": { "@type": "Answer", "text": "Değişen parçalar 1 yıl garantilidir." } }
                ]
              })
            }}
          />
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="bg-slate-900 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Profesyonel Mutfak Çözümleri İçin Beklemeyin</h2>
          <div className="flex justify-center gap-4">
            <a href="tel:05369319667" className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-primary-500/25 flex items-center gap-2">
              <Phone className="h-5 w-5" /> 0536 931 96 67
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
