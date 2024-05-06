import { Services } from '@components/app/common/services';
import { GetStarted } from '@components/app/get-started';
import { Hero } from '@components/app/hero';
import data from '@lib/pages-data';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'You and Family | Trade Pros',
    description:
        'Explore resources and services tailored for you and your family at [Your Company Name]. Discover family-friendly offerings, lifestyle tips, and support programs designed to enhance well-being and quality of life.',
};
export default async function Personal({ params: { lng } }: { params: { lng: string } }) {
    // useEffect(() => {
    //     // When load page, send to tracking app what product viewed the user
    //     // In this case, the product is operations services page
    //     productViewed({
    //         category: 'personal',
    //         hash: location.hash,
    //     });
    // }, []);

    return (
        <>
            <Hero {...data.personal.hero} lng={lng} />
            <Services data={data.personal.services} />
            <GetStarted {...data.personal.getStarted} lng={lng} />
        </>
    );
}
