import { useTranslation } from '@app/i18n';
import data from '@components/app/pricing/data';
import { PlanDetailsType } from '@components/app/pricing/types';
import PlanButton from '../plan-button';
import Table from './table';

export default async function MobilePricing({ lng }: { lng: string }) {
    const { t } = await useTranslation(lng);

    const { detailedPlans } = data;
    const { plans, features, reporting, support } = detailedPlans;

    return (
        <div className="max-w-2xl mx-auto lg:hidden">
            {Object.keys(plans).map((key, index) => (
                <div key={`mobile-${+index}`}>
                    <div className="px-4 py-8">
                        <h2 className="text-lg leading-6 font-medium text-gray-900">{plans[key as keyof typeof plans].name}</h2>
                        <p className="mt-4">
                            <span className="text-4xl font-extrabold text-gray-900">{plans[key as keyof typeof plans].price}</span>
                            <span className="text-base font-medium text-gray-500">{t('common.pricing.perMonth', '/mo')}</span>
                        </p>
                        <p className="mt-4 mb-8 text-sm text-gray-500">
                            {t(plans[key as keyof typeof plans].description || plans[key as keyof typeof plans].defaultDescription)}
                        </p>
                        <PlanButton plans={plans[key as keyof typeof plans] as PlanDetailsType} lng={lng}>
                            {plans[key as keyof typeof plans].buttonText}
                        </PlanButton>
                    </div>
                    {/* @ts-ignore */}
                    <Table details={[...features]} plans={plans} planKey={key as keyof typeof plans} data="features">
                        {t('common.websiteManagment', 'Website Management')}
                    </Table>
                    {/* @ts-ignore */}
                    <Table details={[...reporting]} plans={plans} planKey={key as keyof typeof plans} data="reporting">
                        {t('common.brandManagement', 'Brand Management')}
                    </Table>
                    {/* @ts-ignore */}
                    <Table details={[...support]} plans={plans} planKey={key as keyof typeof plans} data="support">
                        {t('common.reputationManagement', 'Reputation Management')}
                    </Table>
                    <div className="px-4 pt-5">
                        <PlanButton plans={plans[key as keyof typeof plans] as PlanDetailsType} lng={lng}>
                            {plans[key as keyof typeof plans].buttonText}
                        </PlanButton>
                    </div>
                </div>
            ))}
        </div>
    );
}
