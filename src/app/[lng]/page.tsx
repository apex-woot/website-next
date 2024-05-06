import { Features } from '@components/app/features';
import { GetStarted } from '@components/app/get-started';
import '@lib/env';
import { cookies } from 'next/headers';
import HomeHero from './components/components/home-hero';

export default async function HomePage({ params: { lng } }: { params: { lng: string } }) {
    const data = {
        getStarted: {
            ctaText: 'common.getStarted',
            defaultCtaText: 'Get started',
            subtitle: 'pages.home.subtitle',
            defaultSubtitle: 'Prices start at just $49/month',
            title: 'pages.home.title',
            defaultTitle: "Focus on delighting your customers. We'll handle everything else.",
        },
    };

    return (
        <>
            {/* <SEO description="" jobPosting={{}} title={`${t('pages.home.seo', 'Trade Pros')} | trades.org`} /> */}
            <HomeHero lng={lng} />
            <Features lng={lng} />
            <GetStarted {...data.getStarted} lng={lng} />
        </>
    );
}
