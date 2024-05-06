'use client';
import { useTranslation } from '@app/i18n/client';
import { Button } from '@components/templates/common/button';
import { useParams } from 'next/navigation';
import React, { type FC } from 'react';
import { twMerge } from 'tailwind-merge';
import type { StartFreeLandingButtonProps } from './types';

const StartFreeLandingButton: FC<StartFreeLandingButtonProps> = ({ onClick, title, specificationDisplay = false, className }) => {
    const { lng } = useParams<{lng: string}>();
    const { t } = useTranslation(lng);

    return (
        <div className="md:order-last relative mt-5">
            <Button color="red" fullWidth className={twMerge('p-[18px] w-[390px] h-[80px] text-xl', className)} onClick={onClick}>
                {title.toUpperCase()}
            </Button>
            <div className={`w-full my-6 text-white text-sm font-extralight ${!specificationDisplay && 'lg:hidden '}`}>
                <span>{t('startFree.span', '*Websites are billed at $49/month until you cancel.')}</span>
            </div>
        </div>
    );
};

export default StartFreeLandingButton;
