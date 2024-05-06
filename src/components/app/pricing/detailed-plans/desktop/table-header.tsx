import { useTranslation } from '@app/i18n';
import type { PlanType } from '@components/app/pricing/types';

export default async function TableHeader({ plans, lng }: PlanType) {
    const { t } = await useTranslation(lng);

    return (
        <tr>
            <th className="pb-4 px-6 w-[12.5%] text-sm font-bold text-gray-900 text-left" scope="col">
                <span className="sr-only">{t('pricing.tableHeader.sr', 'Feature by')}</span>
                <span>{t('pricing.tableHeader.header', 'Plans')}</span>
            </th>
            {Object.values(plans).map((value, index) => (
                <th key={`plan-${+index}`} className="w-1/4 pb-4 px-6 text-lg leading-6 font-bold text-gray-900 text-left" scope="col">
                    {t(value.name, value.defaultName)}
                </th>
            ))}
        </tr>
    );
}
