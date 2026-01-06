
import { blogPosts } from '@/lib/data';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog - Endüstriyel Mutfak ve Soğutma Rehberi',
    description: 'Endüstriyel buzdolabı tamiri, bakım ipuçları, enerji tasarrufu yöntemleri ve mutfak kurulumu hakkında uzman makaleler.',
};

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="bg-slate-900 py-20 border-b border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary-900/50 text-primary-300 text-sm font-semibold mb-6 border border-primary-500/30 backdrop-blur-sm">
                        Bilgi Merkezi
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Uzmanından <span className="text-primary-400">Teknik Tavsiyeler</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Endüstriyel mutfak ekipmanlarınızın ömrünü uzatacak bakım ipuçları, arıza nedenleri ve çözüm önerileri.
                    </p>
                </div>
            </div>

            {/* Blog Grid */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <article key={index} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group">
                            <Link href={`/blog/${post.slug}`} className="relative h-56 bg-slate-200 block overflow-hidden">
                                {/* Placeholder Image since we don't have real files yet, but using the path is fine */}
                                <div className="absolute inset-0 bg-slate-800/10 group-hover:bg-transparent transition-colors z-10"></div>
                                {/* Use a gradient placeholder if image fails or generic div */}
                                <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-400 group-hover:scale-110 transition-transform duration-500">
                                    <span className="text-4xl font-black opacity-10">BLOG</span>
                                </div>
                            </Link>
                            <div className="p-8 flex-grow flex flex-col">
                                <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 mb-4">
                                    <span className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-md">
                                        <Calendar className="h-3 w-3" /> {post.date}
                                    </span>
                                    <span className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-md">
                                        <Clock className="h-3 w-3" /> {post.readTime} okuma
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="text-slate-600 mb-6 text-sm flex-grow leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="inline-flex items-center text-primary-600 font-bold text-sm hover:text-primary-700 mt-auto"
                                >
                                    Devamını Oku <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
