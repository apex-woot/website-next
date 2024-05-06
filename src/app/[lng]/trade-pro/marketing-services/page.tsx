import { Services } from '@components/app/common/services';
import { GetStarted } from '@components/app/get-started';
import { Hero } from '@components/app/hero';
import data from '@lib/pages-data';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Marketing',
    description:
        'Explore innovative marketing strategies and campaigns at trades.org. Learn how we promote our products and services to reach our target audience. Discover creative branding and advertising techniques that drive engagement and growth.',
};
export default async function Marketing({ params: { lng } }: { params: { lng: string } }) {
    // useEffect(() => {
    //     // When load page, send to tracking app what product viewed the user
    //     // In this case, the product is the marketing services page
    //     productViewed({
    //         category: 'marketing',
    //         hash: location.hash,
    //     });
    // }, []);

    return (
        <>
            {/* <SEO title={`${t('pages.marketingServices.seo', 'Marketing | Trade Pros')} | trades.org`} /> */}
            <Hero {...data.marketing.hero} lng={lng} />
            <Services data={data.marketing.services} />
            <GetStarted {...data.marketing.getStarted} lng={lng} />
        </>
    );
}
