import { useTranslation } from '@app/i18n/client';
import { useParams } from 'next/navigation';
import React, { type FC } from 'react';
import NextArrowImage from '~/images/landing-pages/Start-Free/Long-form/arrow-next.svg';
import type { ArrowButtonProps } from '../types';

const NextArrow: FC<ArrowButtonProps> = ({ onClick }) => {
    const { lng } = useParams<{lng: string}>();
    const { t } = useTranslation(lng);

    return (
        <div
            className="absolute hidden rounded-full lg:flex justify-center items-center arrow right-12 xl:-right-28 bottom-16 scale-90"
            onClick={onClick}
        >
            <NextArrowImage className={'w-20'} alt={t('startFree.testimonials.nextArrow', 'Next Arrow')} />
        </div>
    );
};

export default NextArrow;
