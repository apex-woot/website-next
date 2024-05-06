'use client';
import { useTranslation } from '@app/i18n/client';
import { useParams } from 'next/navigation';
import { handlePlan } from '../utils';
import type { PlanButtonProps } from './types';

export default function PlanButton({ className, plans }: PlanButtonProps) {
    const { lng } = useParams<{lng: string}>();
    const { t } = useTranslation(lng);
    const onHandleSelect = async (offering: string) => {
        await handlePlan(offering);
    };

    return (
        <button
            type="button"
            onClick={() => {
                onHandleSelect(plans.id);
            }}
            className={`${className} block cursor-pointer w-full bg-gray-800 rounded-md py-2 text-sm
            font-semibold text-white text-center hover:bg-gray-900`}
        >
            {t(plans.buttonText as string, plans.defaultButtonText as string)}
        </button>
    );
}
