import { useTranslation } from '@app/i18n/client';
import { useParams } from 'next/navigation';
import React, { type FC } from 'react';
import PrevArrowImage from '~/images/landing-pages/Start-Free/Long-form/arrow-prev.svg';
import type { ArrowButtonProps } from '../types';

const PrevArrow: FC<ArrowButtonProps> = ({ onClick }) => {
    const { lng } = useParams<{lng: string}>();
    const { t } = useTranslation(lng);

    return (
        <div
            className="absolute hidden rounded-full lg:flex justify-center items-center arrow h-25 w-25 right-12 xl:-right-28 top-16 scale-90"
            onClick={onClick}
        >
            <PrevArrowImage className={'w-20'} alt={t('startFree.testimonials.prevArrow', 'Prev Arrow')} />
        </div>
    );
};
export default PrevArrow;
