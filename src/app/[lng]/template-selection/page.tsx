'use client';
import { useTranslation } from '@app/i18n/client';
import { Hero } from '@components/templates/basic-short-form/components';
import { bulletPoints } from '@components/templates/common';
import { BulletList } from '@components/templates/common/bullet-list';
import { Button } from '@components/templates/common/button';
import { Header } from '@components/templates/common/header';
import { PoweredList } from '@components/templates/common/powered-list';
import { TradesOrgLogo } from '@components/templates/common/trades-org-logo';
import { Step1, Step2 } from '@components/templates/template-selection/steps';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import useWindowSize from '@hooks/useWindowSize';
import { useParams } from 'next/navigation';
import { type FC, useState } from 'react';

const TemplateSelectionLanding: FC = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const { screenWidth } = useWindowSize();
    const { lng } = useParams<{lng: string}>();
    const { t } = useTranslation(lng);

    const moveToStep = (step: number) => {
        setCurrentStep(step);
    };

    return (
        <div className="w-full">
            <Hero>
                {/* Trades.org Logo */}
                <div className="w-full lg:w-11/12 flex justify-center lg:justify-start">
                    <a href="https://www.trades.org/trade-pro" target="_blank" rel="noreferrer">
                        <TradesOrgLogo className="py-5" />
                    </a>
                </div>
                {/* Page content */}
                <div className="w-full lg:w-11/12 flex flex-wrap">
                    {/* Left content */}
                    <div className="w-full lg:w-1/2">
                        <div className="lg:pl-7">
                            {(currentStep === 0 || screenWidth >= 1024) && (
                                <Header className="text-white">
                                    {t('pages.templateSelectionLanding.header1', "It's time you")}
                                    <br />
                                    {t('pages.templateSelectionLanding.header2', 'give your business')}
                                    <br />
                                    {t('pages.templateSelectionLanding.header3', 'the website it deserves.')}
                                </Header>
                            )}
                            <div className="hidden lg:block mb-10">
                                <BulletList
                                    className="gap-6"
                                    items={bulletPoints}
                                    itemClassName="text-white"
                                    icon={<CheckCircleIcon className="w-8 h-8 text-sky" />}
                                />
                            </div>
                            <div className="hidden lg:block">
                                <PoweredList
                                    listClassname="pt-6"
                                    labelClassname="text-white text-lg"
                                    provider={['AWS', 'Twilio', 'Google']}
                                />
                            </div>
                        </div>
                    </div>
                    {/* Right content */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end 2xl:justify-center flex-wrap">
                        {currentStep === 0 && <Step1 moveToStep={moveToStep} />}
                        {currentStep === 1 && <Step2 />}
                    </div>
                </div>
            </Hero>
            {/* Mobile services */}
            <div className="flex lg:hidden justify-center relative">
                <div className="absolute -top-8">
                    <a href="#services" className="bg-white rounded-full h-16 w-16 flex justify-center items-center focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 animate-bounce"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#4DA2DC"
                        >
                            <title>stroke</title>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </a>
                </div>
                <div id="services" className="w-10/12">
                    <h1 className="font-black text-2xl mb-10 mt-12">
                        {t('common.onlinePresence', "We'll help you take your online presence to the next level...")}
                    </h1>
                    <BulletList items={bulletPoints} icon={<CheckCircleIcon className="w-8 h-8 text-sky" />} />
                    <Button
                        color="sky"
                        className="text-sm my-10 w-full"
                        onClick={() => {
                            window?.scrollTo(0, 0);
                        }}
                    >
                        {t('common.getStartedButton', 'Get started for free').toUpperCase()}
                    </Button>
                    <div className="my-10">
                        <PoweredList
                            labelClassname="text-center"
                            listClassname="pt-6 justify-center"
                            provider={['AWS', 'Twilio', 'Google']}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TemplateSelectionLanding;
