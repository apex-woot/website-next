'use client';
import { useTranslation } from '@app/i18n/client';
import { LandingPagesContext } from '@context/landing-pages/context';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { Button } from '@components/templates/common/button';
import { Header } from '@components/templates/common/header';
import { useParams } from 'next/navigation';
import { type FC, useContext } from 'react';
import TemplateCarousel from '../template-carousel';
import type { Step1Props } from './types';

const Step1: FC<Step1Props> = ({ moveToStep }) => {
    const { lng } = useParams<{lng: string}>();
    const { t } = useTranslation(lng);

    const { selectedTemplate } = useContext(LandingPagesContext);

    return (
        <div className="w-full lg:w-3/4 text-center flex flex-col pb-5 lg:pb-0">
            <Header>
                {t('templateSelection.step1.title1', 'Choose a design')}
                <br />
                {t('templateSelection.step1.title2', 'to customize')}
            </Header>
            <p className="hidden lg:block text-white text-sm xl:text-xl font-medium mb-6 mt-3">
                {t('templateSelection.step1.subtitle1', 'Select from one of our templates below to get')}
                <br />
                {t('templateSelection.step1.subtitle2', 'your website set up in just minutes.')}
            </p>
            <TemplateCarousel />
            {/* Template buttons */}
            <div className="flex justify-center">
                <div className="w-10/12 md:w-6/12 lg:w-9/12 my-10">
                    {(selectedTemplate?.id as boolean) && (
                        <Button
                            className="text-sm my-10 w-full text-gray-900"
                            color="yellow"
                            iconLeft={<CheckCircleIcon className="w-8 h-8" />}
                            onClick={() => moveToStep(1)}
                        >
                            {t('templateSelection.step1.action1', 'TEMPLATE SELECTED!')}
                            <br />
                            {t('templateSelection.step1.action2', 'Click to continue')}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Step1;
