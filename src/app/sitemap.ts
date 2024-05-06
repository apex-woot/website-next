import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.trades.org',
            lastModified: new Date(),
            alternates: {
                languages: {
                    es: 'https://www.trades.org/es',
                    en: 'https://www.trades.org/en',
                },
            },
        },
        {
            url: 'https://www.trades.org/trade-pro/login',
            lastModified: new Date(),
            alternates: {
                languages: {
                    es: 'https://www.trades.org/es/trade-pro/login',
                    en: 'https://www.trades.org/en/trade-pro/login',
                },
            },
        },
        {
            url: 'https://www.trades.org/trade-pro/contact',
            lastModified: new Date(),
            alternates: {
                languages: {
                    es: 'https://www.trades.org/es/trade-pro/contact',
                    en: 'https://www.trades.org/en/trade-pro/contact',
                },
            },
        },
        {
            url: 'https://www.trades.org/trade-pro/careers',
            lastModified: new Date(),
            alternates: {
                languages: {
                    es: 'https://www.trades.org/es/trade-pro/careers',
                    en: 'https://www.trades.org/en/trade-pro/careers',
                },
            },
        },
        {
            url: 'https://www.trades.org/trade-pro/marketing-services',
            lastModified: new Date(),
            alternates: {
                languages: {
                    es: 'https://www.trades.org/es/trade-pro/marketing-services',
                    en: 'https://www.trades.org/en/trade-pro/marketing-services',
                },
            },
        },
        {
            url: 'https://www.trades.org/trade-pro/operations',
            lastModified: new Date(),
            alternates: {
                languages: {
                    es: 'https://www.trades.org/es/trade-pro/operations',
                    en: 'https://www.trades.org/en/trade-pro/operations',
                },
            },
        },
        {
            url: 'https://www.trades.org/trade-pro/personal',
            lastModified: new Date(),
            alternates: {
                languages: {
                    es: 'https://www.trades.org/es/trade-pro/personal',
                    en: 'https://www.trades.org/en/trade-pro/personal',
                },
            },
        },

        {
            url: 'https://www.trades.org/trade-pro/pricing',
            lastModified: new Date(),
            alternates: {
                languages: {
                    es: 'https://www.trades.org/es/trade-pro/pricing',
                    en: 'https://www.trades.org/en/trade-pro/pricing',
                },
            },
        },
        {
            url: 'https://www.trades.org/trade-pro/privacy',
            lastModified: new Date(),
            alternates: {
                languages: {
                    es: 'https://www.trades.org/es/trade-pro/privacy',
                    en: 'https://www.trades.org/en/trade-pro/privacy',
                },
            },
        },
        {
            url: 'https://www.trades.org/trade-pro/terms',
            lastModified: new Date(),
            alternates: {
                languages: {
                    es: 'https://www.trades.org/es/trade-pro/terms',
                    en: 'https://www.trades.org/en/trade-pro/terms',
                },
            },
        },
    ];
}
