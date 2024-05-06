'use client';
import { ArrowDown, ArrowUp, Tick } from '@components/app/common/icon-components/icons';
import { type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { PlanDataType, PlanStateType, TableProps } from './types';

const Table: FC<TableProps> = ({ details, plans, planKey, children, data }) => {
    const { t } = useTranslation();

    const [planState, setState] = useState<PlanStateType>({
        features: {
            basic: false,
            essential: false,
            premium: false,
        },
        reporting: {
            basic: false,
            essential: false,
            premium: false,
        },
        support: {
            basic: false,
            essential: false,
            premium: false,
        },
    });

    const handleclick = () => {
        const prev = { ...planState };
        // @ts-ignore
        prev[data][planKey] = !prev[data][planKey];
        setState(() => prev);
    };

    return (
        <table className="w-full">
            <tbody>
                {/* @ts-ignore */}
                {plans[planKey][data].includes(true) && (
                    <tr onClick={handleclick}>
                        <th className="text-left">
                            <span className="bg-gray-50 py-3 px-4 text-sm font-medium text-gray-900 text-left">{children}</span>
                        </th>
                        <td className="py-5 pr-4 flex justify-end">
                            {/* @ts-ignore */}
                            <button type="button">{planState[data][planKey] ? <ArrowUp size={18} /> : <ArrowDown size={18} />}</button>
                        </td>
                    </tr>
                )}
                {/* @ts-ignore */}
                {planState[data][planKey] && (
                    <>
                        {details.map((detail, index) => (
                            <tr key={`table-${+index}`}>
                                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">
                                    {t(detail.name, detail.defaultName)}
                                </th>
                                <td className="py-5 pr-4 flex justify-end">
                                    <Tick />
                                </td>
                            </tr>
                        ))}
                    </>
                )}
            </tbody>
        </table>
    );
};
export default Table;
