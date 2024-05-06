import { Services } from '@components/app/common/services';
import { GetStarted } from '@components/app/get-started';
import { Hero } from '@components/app/hero';
import data from '@lib/pages-data';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Operations | Trade Pros',
    description:
        'Discover the operational processes and procedures at trades.org. Learn about our business operations, workflows, and efficiency strategies. Explore how we manage resources, deliver services, and optimize performance to meet our objectives.',
};

export default async function Operations({ params: { lng } }: { params: { lng: string } }) {
    // useEffect(() => {
    //     // When load page, send to tracking app what product viewed the user
    //     // In this case, the product is operations services page
    //     productViewed({
    //         category: 'operations',
    //         hash: window.location.hash,
    //     });
    // }, []);

    return (
        <>
            {/* <SEO title={`${t('pages.operations.seo', 'Operations | Trade Pros')} | trades.org`} /> */}
            <Hero {...data.operations.hero} lng={lng} />
            <Services data={data.operations.services} />
            <GetStarted {...data.operations.getStarted} lng={lng} />
        </>
    );
}
