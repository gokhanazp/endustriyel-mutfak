import { MetadataRoute } from 'next';
import { brands, districts, services } from '@/lib/data';

export const dynamic = 'force-static';
const BASE_URL = 'https://endustriyelbuzdolabitamircisi.com';

// Slugify helper (duplicated from page for simplicity in this file scope)
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

export default function sitemap(): MetadataRoute.Sitemap {
    // Static routes
    const routes: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${BASE_URL}/hizmetlerimiz`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/markalar`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/iletisim`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
    ];

    // Service pages
    const serviceRoutes = services.map((service) => ({
        url: `${BASE_URL}/hizmetlerimiz/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // Brand pages
    const brandRoutes = brands.map((brand) => ({
        url: `${BASE_URL}/markalar/${brand.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // Brand + District Landing pages
    const landingRoutes = brands.flatMap((brand) =>
        districts.map((district) => ({
            url: `${BASE_URL}/${brand.slug}-${slugify(district)}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }))
    );

    return [...routes, ...serviceRoutes, ...brandRoutes, ...landingRoutes];
}
