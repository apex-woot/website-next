import { useTranslation } from '@app/i18n';
import { Tooltip } from '@components/app/common/tooltip';
import type { PlanType } from '@components/app/pricing/types';
import React from 'react';
import PlanButton from '../plan-button';

export default async function PlanDetail({ plans, lng }: PlanType) {
    const { t } = await useTranslation(lng);

    return (
        <>
            {Object.values(plans).map((value, index) => (
                <td key={`plan-detail-${+index}`} className="h-full py-8 px-6 align-top">
                    <div className="relative h-full table">
                        <Tooltip message={t('common.pricing.perMonthTooltip', 'Billed monthly')}>
                            <span className="text-4xl font-extrabold text-gray-900">{value.price}</span>
                            <span className="text-base font-medium text-gray-500">{t('common.pricing.perMonth', '/mo')}</span>
                        </Tooltip>
                        <p className="mt-4 mb-16 text-sm text-gray-500">{t(value.description, value.defaultDescription)}</p>
                        <PlanButton lng={lng} plans={value} className="absolute bottom-0">
                            {value.buttonText}
                        </PlanButton>
                    </div>
                </td>
            ))}
        </>
    );
}
