import { languages } from '@app/i18n/settings';
import { Copyright, Footer, Navbar } from '@components/app/layout/components';
import { siteConfig } from '@constant/config';
import '@styles/config.scss';
import '@styles/slider-config.scss';
import '@styles/tailwind.scss';
import '@styles/typography.scss';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import type * as React from 'react';
import SeoScripts from './seo-scripts';

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.title,
        template: `%s | ${siteConfig.title}`,
    },
    description: siteConfig.description,
    robots: { index: true, follow: true },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon/icon.png',
        apple: '/favicon/icon.png',
    },
    manifest: '/site.webmanifest',
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.title,
        description: siteConfig.description,
        images: '/preview.png',
    },
    openGraph: {
        url: siteConfig.url,
        title: siteConfig.title,
        description: siteConfig.description,
        siteName: siteConfig.title,
        images: ['/preview.png', `${siteConfig.url}/images/og.jpg`],
        type: 'website',
        locale: 'en_US',
    },
};

export function generateStaticParams() {
    return languages.map((lng) => ({ lng }));
}

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lng: string };
}) {
    return (
        <html lang={params.lng}>
            <body className="flex flex-col h-screen justify-between">
                <SeoScripts />
                <Navbar lng={params.lng} />
                <main>{children}</main>
                <footer>
                    <Footer lng={params.lng} /> <Copyright lng={params.lng} />
                </footer>
            </body>
        </html>
    );
}
