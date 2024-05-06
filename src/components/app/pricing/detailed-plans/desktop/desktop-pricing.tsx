import { useTranslation } from '@app/i18n';
import data from '@components/app/pricing/data';
import React, { type FC } from 'react';
import PlanDetail from './plan-detail';
import PlansTooltip from './plans-tooltip';
import TableBody from './table-body';
import TableFooter from './table-footer';
import TableHeader from './table-header';

export default async function DesktopPricing({ lng }: { lng: string }) {
    const { t } = await useTranslation(lng);

    const {
        detailedPlans: { plans, features, reporting, support },
    } = data;

    return (
        <div className="hidden lg:block">
            <table className="w-full h-px table-fixed">
                <caption className="sr-only">{t('pricing.desktopPricing.caption', 'Pricing plan comparison')}</caption>
                <thead>
                    <TableHeader plans={plans} lng={lng} />
                </thead>
                <tbody>
                    <tr>
                        <th className="py-8 px-6 text-sm font-bold text-gray-900 text-left align-top" scope="row">
                            {t('pricing.desktopPricing.pricing', 'Pricing')}
                        </th>
                        <PlanDetail plans={plans} lng={lng} />
                    </tr>

                    <tr>
                        <PlansTooltip
                            message={t(
                                'pricing.desktopPricing.websiteMsg',
                                'A website management subscription includes all of the following features in an easy-to-use, professionally designed website.',
                            )}
                            colSpan={4}
                        >
                            {t('common.websiteManagment', 'Website Management')}
                        </PlansTooltip>
                    </tr>
                    <TableBody lng={lng} details={[...features]} plans={plans} data="features" />

                    <tr>
                        <PlansTooltip
                            message={t(
                                'pricing.desktopPricing.brandMsg',
                                'Your brand management subscription which is included in the Pro and Basic Plans includes all of the following services.',
                            )}
                            colSpan={4}
                        >
                            {t('common.brandManagement', 'Brand Management')}
                        </PlansTooltip>
                    </tr>
                    <TableBody lng={lng} details={[...reporting]} plans={plans} data="reporting" />

                    <tr>
                        <PlansTooltip
                            message={t(
                                'pricing.desktopPricing.reputationMsg',
                                'Get a well-designed engaging social profile on industry-specific sites like Houzz and Home Advisor that will impress potential customers with your expertise.',
                            )}
                            colSpan={4}
                        >
                            {t('common.reputationManagement', 'Reputation Management')}
                        </PlansTooltip>
                    </tr>
                    <TableBody lng={lng} details={[...support]} plans={plans} data="support" />
                </tbody>
                <tfoot>
                    <TableFooter lng={lng} plans={plans} />
                </tfoot>
            </table>
        </div>
    );
}
