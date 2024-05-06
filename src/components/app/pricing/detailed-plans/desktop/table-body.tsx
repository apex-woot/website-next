import { useTranslation } from '@app/i18n';
import { Minus, Tick } from '@components/app/common/icon-components/icons';
import { Tooltip } from '@components/app/common/tooltip';
import type { DetailProps } from './types';

export default async function TableBody({ details, plans, data, lng }: DetailProps) {
    const { t } = await useTranslation(lng);

    const getTickOrMinus = (value: boolean) => (value ? <Tick /> : <Minus />);

    const getFeatureValue = (plan: any, index: any, info: any) => {
        if (info === 'features') {
            return plan.features[index];
        }
        if (info === 'reporting') {
            return plan.reporting[index];
        }
        return plan.support[index];
    };

    return details.map((detail, index) => (
        <tr key={`body-${+index}`}>
            <th className="py-5 px-6 text-sm font-normal text-gray-500 text-left" scope="row">
                <Tooltip message={t(detail.description, detail.defaultDescription)}>{t(detail.name, detail.defaultName)}</Tooltip>
            </th>
            {Object.values(plans).map((value, i) => (
                <td key={`tick-${+i}`} className="py-5 px-6 text-green-500">
                    {getTickOrMinus(getFeatureValue(value, index, data))}
                </td>
            ))}
        </tr>
    ));
}
