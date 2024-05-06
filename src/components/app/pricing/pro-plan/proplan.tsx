'use client';
import { useTranslation } from '@app/i18n/client';
import { getStripe } from '@lib/stripe';
import { useParams } from 'next/navigation';
import React, { type FC, useEffect } from 'react';
import data from '../data';
import { handlePlan } from '../utils';
import Features from './features';
import SubFeatures from './subfeatures';

const ProPlan: FC = () => {
    const { lng } = useParams<{lng: string}>();
    const { t } = useTranslation(lng);
    const {
        pro: { price },
    } = data;
    const onHandleSelect = async (offering: string) => {
        await handlePlan(offering);
    };

    useEffect(() => {
        const handleInitialStripeLoad = async () => {
            const stripeKeyValue = await getStripe();
            if (typeof window !== 'undefined') {
                window.localStorage.setItem('stripe', JSON.stringify(stripeKeyValue));
            }
        };
        handleInitialStripeLoad();

        return () => undefined;
    }, []);

    return (
        <div className="relative">
            <div className="absolute inset-0" aria-hidden="true">
                <div className="inset-y-0 right-0 max-w-7xl w-1/2 bg-indigo-600" />
            </div>
            <div className="relative max-w-7xl mx-auto lg:px-8 lg:grid lg:grid-cols-2">
                <div className="bg-white pb-10 px-4 sm:px-6 md:pt-0 lg:px-0 lg:pr-8">
                    <div className="max-w-lg mx-auto lg:mx-0">
                        <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
                            {t('pricing.proPlan.header', 'Pro Plan')}
                        </h2>
                        <p className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
                            {t('pricing.proPlan.title1', 'What you need to build trust and')}
                            <br />
                            <span className="text-indigo-600">{t('pricing.proPlan.title2', 'grow')}</span>{' '}
                            {t('pricing.proPlan.title3', 'your business')}
                        </p>
                        <Features />
                    </div>
                </div>
                <div
                    className={`bg-indigo-700 py-16 px-4 sm:py-24 sm:px-6
                    lg:pt-12 lg:flex items-center justify-center`}
                >
                    <div className="max-w-lg mx-auto w-full space-y-8 lg:mx-0">
                        <div>
                            <h2 className="sr-only">{t('pricing.proPlan.srPrice', 'Price')}</h2>
                            <p className="relative grid grid-cols-2">
                                <span className="flex flex-col text-center">
                                    <span className="text-5xl font-extrabold text-white tracking-tight">
                                        <del>{price.deleted}</del> <ins className="no-underline">{price.setup}</ins>
                                    </span>
                                    <span className="mt-2 text-base font-medium text-indigo-200">
                                        {t('pricing.proPlan.setupFee', 'Setup fee')}
                                    </span>
                                    <span className="sr-only">{t('pricing.proPlan.srPlus', 'plus')}</span>
                                </span>
                                <span
                                    className={`pointer-events-none
                                    absolute h-12 w-full flex items-center justify-center`}
                                    aria-hidden="true"
                                >
                                    {/* Heroicon name: plus */}
                                    <svg
                                        className="h-6 w-6 text-indigo-300"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </span>
                                <span>
                                    <span className="flex flex-col text-center">
                                        <span className="text-5xl font-extrabold text-white tracking-tight">{price.perMonth}</span>
                                        <span className="mt-2 text-base font-medium text-indigo-200">
                                            {t('pricing.proPlan.perMonth', 'Per month')}
                                        </span>
                                    </span>
                                </span>
                            </p>
                        </div>
                        <SubFeatures />
                        <button
                            type="button"
                            onClick={() => {
                                onHandleSelect('pro');
                            }}
                            className={`bg-white w-full cursor-pointer border-0
                            border-transparent rounded-md px-8 py-4 flex
                            items-center justify-center text-lg leading-6 font-medium
                            text-indigo-600 hover:bg-indigo-50 md:px-10 no-underline`}
                        >
                            {`${t('common.getStarted', 'Get started')} ${t('pricing.proPlan.today', 'today')}`}
                        </button>
                        <a
                            href="/trade-pro/pricing/#detailedPlans"
                            className={`block text-center text-base font-medium
                            text-indigo-200 hover:text-white no-underline`}
                        >
                            {t('pricing.proPlan.planComparison', 'See the plan comparison')}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProPlan;
