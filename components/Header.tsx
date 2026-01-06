
"use client";

import Link from 'next/link';
import { Phone, Menu, MapPin, Clock, X, ChevronRight, Mail, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { services, brands } from '@/lib/data';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (activeDropdown && !(event.target as Element).closest('.dropdown-container')) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [activeDropdown]);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
    }, [pathname]);

    const toggleDropdown = (name: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    return (
        <>
            {/* Top Bar */}
            <div className="bg-slate-900 text-slate-300 text-xs md:text-sm py-2 px-4 hidden md:block border-b border-slate-800">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex gap-6">
                        <div className="flex items-center gap-2">
                            <MapPin className="h-3.5 w-3.5 text-primary-500" />
                            <span>İstanbul'un Tüm İlçelerinde Hizmetinizdeyiz</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="h-3.5 w-3.5 text-primary-500" />
                            <span>7/24 Acil Teknik Servis</span>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <span className="flex items-center gap-2 text-primary-400 font-medium">
                            %100 Müşteri Memnuniyeti
                        </span>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header
                className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'glass-header py-2' : 'bg-white border-b border-slate-100 py-4'}`}
            >
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group shrink-0">
                        <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-2.5 rounded-xl shadow-lg shadow-primary-600/20 group-hover:scale-105 transition-transform duration-300">
                            <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight leading-none">
                                Endüstriyel<span className="text-primary-600">Servis</span>
                            </span>
                            <span className="text-[10px] md:text-xs font-bold text-slate-500 tracking-widest uppercase">
                                Profesyonel Çözümler
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1">
                        <Link
                            href="/"
                            className={`px-4 py-2 font-bold text-sm transition-colors rounded-lg ${pathname === '/' ? 'text-primary-600 bg-primary-50' : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'}`}
                        >
                            Ana Sayfa
                        </Link>

                        {/* Services Dropdown */}
                        <div className="relative dropdown-container">
                            <button
                                onClick={(e) => toggleDropdown('services', e)}
                                className={`flex items-center gap-1 px-4 py-2 font-bold text-sm transition-colors rounded-lg ${pathname.includes('/hizmetlerimiz') || activeDropdown === 'services' ? 'text-primary-600 bg-primary-50' : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'}`}
                            >
                                Hizmetlerimiz
                                <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                            </button>

                            {activeDropdown === 'services' && (
                                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                                    <div className="p-2 max-h-[60vh] overflow-y-auto">
                                        <Link href="/hizmetlerimiz" className="block px-4 py-3 text-sm font-bold text-primary-600 hover:bg-primary-50 rounded-lg mb-1">
                                            Tüm Hizmetleri Gör
                                        </Link>
                                        <div className="h-px bg-slate-100 my-1"></div>
                                        {services.map((service) => (
                                            <Link
                                                key={service.slug}
                                                href={`/hizmetlerimiz/${service.slug}`}
                                                className="block px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                                            >
                                                {service.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Brands Dropdown */}
                        <div className="relative dropdown-container">
                            <button
                                onClick={(e) => toggleDropdown('brands', e)}
                                className={`flex items-center gap-1 px-4 py-2 font-bold text-sm transition-colors rounded-lg ${pathname.includes('/markalar') || activeDropdown === 'brands' ? 'text-primary-600 bg-primary-50' : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'}`}
                            >
                                Markalar
                                <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'brands' ? 'rotate-180' : ''}`} />
                            </button>

                            {activeDropdown === 'brands' && (
                                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                                    <div className="p-2">
                                        <Link href="/markalar" className="block px-4 py-3 text-sm font-bold text-primary-600 hover:bg-primary-50 rounded-lg mb-1">
                                            Tüm Markalar
                                        </Link>
                                        <div className="h-px bg-slate-100 my-1"></div>
                                        {brands.map((brand) => (
                                            <Link
                                                key={brand.slug}
                                                href={`/markalar/${brand.slug}`}
                                                className="block px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                                            >
                                                {brand.display} Servisi
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link
                            href="/blog"
                            className={`px-4 py-2 font-bold text-sm transition-colors rounded-lg ${pathname.includes('/blog') ? 'text-primary-600 bg-primary-50' : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'}`}
                        >
                            Blog
                        </Link>

                        <Link
                            href="/iletisim"
                            className={`px-4 py-2 font-bold text-sm transition-colors rounded-lg ${pathname === '/iletisim' ? 'text-primary-600 bg-primary-50' : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'}`}
                        >
                            İletişim
                        </Link>
                    </nav>

                    {/* CTA Button */}
                    <div className="flex items-center gap-4">
                        <a
                            href="tel:05369319667"
                            className="hidden md:flex flex-col items-end mr-2 group"
                        >
                            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Hemen Arayın</span>
                            <span className="text-lg font-bold text-slate-900 group-hover:text-primary-600 transition-colors">0536 931 96 67</span>
                        </a>

                        <a
                            href="tel:05369319667"
                            className="hidden md:flex items-center gap-2 bg-slate-900 hover:bg-primary-600 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-slate-900/20 hover:shadow-primary-600/30 transform hover:-translate-y-0.5"
                        >
                            <Phone className="h-4 w-4" />
                            <span>Servis Çağır</span>
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Menu"
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-white lg:hidden pt-24 px-4 pb-8 flex flex-col overflow-y-auto animate-in slide-in-from-top-10 duration-200">
                    <nav className="flex flex-col gap-2">
                        <Link href="/" className="p-4 bg-slate-50 rounded-xl font-bold text-slate-800">Ana Sayfa</Link>

                        {/* Mobile Services */}
                        <div className="border border-slate-100 rounded-xl overflow-hidden">
                            <div className="p-4 bg-slate-50 font-bold text-slate-800">Hizmetlerimiz</div>
                            <div className="bg-white p-2 grid gap-1">
                                {services.slice(0, 6).map(s => (
                                    <Link key={s.slug} href={`/hizmetlerimiz/${s.slug}`} className="p-2 text-sm text-slate-600 hover:text-primary-600 pl-4 border-l-2 border-transparent hover:border-primary-500 block">
                                        {s.title}
                                    </Link>
                                ))}
                                <Link href="/hizmetlerimiz" className="p-2 text-sm font-bold text-primary-600 text-center block bg-primary-50 mt-2 rounded">Tüm Hizmetler</Link>
                            </div>
                        </div>

                        {/* Mobile Brands */}
                        <div className="border border-slate-100 rounded-xl overflow-hidden">
                            <div className="p-4 bg-slate-50 font-bold text-slate-800">Markalar</div>
                            <div className="bg-white p-2 grid gap-1">
                                {brands.map(b => (
                                    <Link key={b.slug} href={`/markalar/${b.slug}`} className="p-2 text-sm text-slate-600 hover:text-primary-600 pl-4 border-l-2 border-transparent hover:border-primary-500 block">
                                        {b.display} Servisi
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link href="/blog" className="p-4 bg-slate-50 rounded-xl font-bold text-slate-800">Blog</Link>
                        <Link href="/iletisim" className="p-4 bg-slate-50 rounded-xl font-bold text-slate-800">İletişim</Link>
                    </nav>

                    <div className="mt-8">
                        <a href="tel:05369319667" className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary-600/30">
                            <Phone className="h-5 w-5" />
                            Hemen Ara: 0536 931 96 67
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}
