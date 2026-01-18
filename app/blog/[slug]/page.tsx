
import { blogPosts, services } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Phone, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return { title: 'Yazı Bulunamadı' };

    return {
        title: `${post.title} - Endüstriyel Mutfak Blog`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Header/Breadcrumb */}
            <div className="bg-white border-b border-slate-200">
                <div className="container mx-auto px-4 py-8">
                    <Link href="/blog" className="inline-flex items-center text-slate-500 hover:text-primary-600 mb-6 text-sm font-medium transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-1" /> Blog Ana Sayfa
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 max-w-4xl leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
                        <span className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary-500" /> {post.date}
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-primary-500" /> {post.readTime} okuma
                        </span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
                            {/* Content Body */}
                            <div
                                className="prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-p:text-slate-600 prose-a:text-primary-600 hover:prose-a:text-primary-700 prose-strong:text-slate-900"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* CTA Widget */}
                        <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden shadow-xl">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500 rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
                            <h3 className="text-xl font-bold mb-4">Profesyonel Desteğe mi İhtiyacınız Var?</h3>
                            <p className="text-slate-300 mb-6 text-sm">
                                Endüstriyel mutfak ekipmanlarınızdaki sorunları hızlıca çözüyoruz. 7/24 Acil Servis hattımız hizmetinizde.
                            </p>
                            <a href="tel:05369319667" className="flex items-center justify-center gap-2 w-full bg-white text-slate-900 py-3 rounded-xl font-bold hover:bg-primary-50 transition-colors">
                                <Phone className="h-5 w-5" />
                                0536 931 96 67
                            </a>
                        </div>

                        {/* Recent Posts */}
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                            <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Diğer Yazılar</h3>
                            <ul className="space-y-4">
                                {blogPosts.filter(p => p.slug !== slug).map((recentPost, i) => (
                                    <li key={i}>
                                        <Link href={`/blog/${recentPost.slug}`} className="group block">
                                            <h4 className="text-sm font-medium text-slate-700 group-hover:text-primary-600 transition-colors mb-1">
                                                {recentPost.title}
                                            </h4>
                                            <span className="text-xs text-slate-400">{recentPost.date}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services List */}
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                            <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Hizmetlerimiz</h3>
                            <ul className="space-y-2">
                                {services.slice(0, 5).map((service, i) => (
                                    <li key={i}>
                                        <Link
                                            href={`/hizmetlerimiz/${service.slug}`}
                                            className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary-600 transition-colors p-2 hover:bg-slate-50 rounded-lg"
                                        >
                                            <CheckCircle className="h-4 w-4 text-primary-400" />
                                            {service.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
