import { useTranslation } from '@app/i18n';
import { PlanType } from '@components/app/pricing/types';
import { type FC } from 'react';
import PlanButton from '../plan-button';

const TableFooter: FC<PlanType> = async ({ plans, lng }) => {
    const { t } = await useTranslation(lng);

    return (
        <tr>
            <th className="sr-only" scope="row">
                {t('pricing.tableFooter.sr', 'Choose your plan')}
            </th>
            {Object.values(plans).map((value, index) => (
                <td key={`foot-${+index}`} className="pt-5 px-6">
                    <PlanButton lng={lng} plans={value}>
                        {value.buttonText}
                    </PlanButton>
                </td>
            ))}
        </tr>
    );
};

export default TableFooter;
