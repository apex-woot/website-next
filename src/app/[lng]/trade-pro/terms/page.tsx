import { Hero } from '@components/app/hero';
import Policy from '@components/app/policy/policy';
import { Metadata } from 'next';
import Content from './data.json';

export const metadata: Metadata = {
    title: 'Terms',
    description:
        'Read and agree to our terms and conditions governing the usage of metadata provided by [Your Company Name]. Learn about the guidelines for accessing, sharing, and utilizing metadata on our website.',
};
export default async function TermsPage({ params: { lng } }: { params: { lng: string } }) {
    const data = {
        subtitle: 'pages.terms.subtitle',
        defaultSubtitle: 'trades.org terms',
        titles: [
            {
                title: 'pages.terms.title',
                defaultTitle: 'Terms of Service',
            },
        ],
    };

    return (
        <>
            {/* <SEO title={`${t('pages.terms.seo', 'Terms | Trade Pros')} | trades.org`} /> */}
            <Hero {...data} lng={lng} />
            <Policy {...Content} lng={lng} />
        </>
    );
}
