import { DetailedPlans, FAQ, Help, ProPlan } from '@components/app/pricing';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pricing',
    description:
        'View pricing plans and packages offered by trades.org. Compare subscription options, features, and pricing tiers. Choose the best plan that suits your needs and budget.',
};

export default async function Pricing({ params: { lng } }: { params: { lng: string } }) {
    return (
        <>
            <ProPlan />
            <FAQ />
            <Help lng={lng} />
            <DetailedPlans lng={lng} />
        </>
    );
}
