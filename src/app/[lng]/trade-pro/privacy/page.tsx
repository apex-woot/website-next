import { Hero } from '@components/app/hero';
import Policy from '@components/app/policy/policy';
import { Metadata } from 'next';
import content from './data.json';

export const metadata: Metadata = {
    title: 'Privacy',
    description:
        'Learn about the privacy policies and practices of [Your Company Name]. Understand how we collect, use, and protect your personal information. Explore your rights and options regarding privacy settings and data management.',
};

export default async function PrivacyPolicy({ params: { lng } }: { params: { lng: string } }) {
    const data = {
        subtitle: 'pages.privacy.subtitle',
        defaultSubtitle: 'trades.org privacy',
        titles: [
            {
                title: 'pages.privacy.title',
                defaultTitle: 'Privacy Policy',
            },
        ],
    };

    return (
        <>
            {/* <SEO title={`${t('pages.privacy.seo', 'Privacy | Trade Pros')} | trades.org`} /> */}
            <Hero {...data} lng={lng} />
            <Policy {...content} lng={lng} />
        </>
    );
}
