'use client';
import { useTranslation } from '@app/i18n/client';
import { useStore } from '@nanostores/react';
import { store } from '@store/user-store';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';
import HeroAVIF from '~/images/hero-unsplash.avif';
import { Tabs } from './components';

export const Login = ({ lng }: { lng: string }) => {
    const { user } = useStore(store);
    // REDIRECT TO MICROFRONTENDS
    if (user?.sub) redirect(process.env.NEXT_PUBLIC_AUTH0_LOGIN_REDIRECT_URL);

    const { t } = useTranslation(lng);
    const { claim, session_id } = { claim: '', session_id: '' };
    const isClaiming = !!claim;
    const isPaid = !!session_id;

    const signupMessages = [];
    if (isPaid) {
        signupMessages.push(t('login.signupPaid', 'Thank you for your purchase!'));
    }
    if (isClaiming) {
        signupMessages.push(t('login.signupClaim', 'Please sign up to claim your website.'));
    }
    if (isPaid || isClaiming) {
        signupMessages.push(t('login.signupActivate', 'To activate your account, please sign up using one of the options below.'));
    } else {
        signupMessages.push(t('login.signUp', 'Create an account below'));
    }

    return (
        <div className="md:flex px-4 md:p-0 md:min-h-[600px] lg:min-h-[1000px] xl:min-h-[1200px]">
            <div className="xl:w-2/5 lg:w-1/2 pt-5 md:pt-16 xl:pt-28 flex flex-1 lg:flex-none justify-center items-stretch">
                <div className="h-full flex items-start">
                    <div className="w-full max-w-sm lg:max-w-xl md:mb-0 text-center xl:space-y-6 flex flex-col items-center">
                        <h1 className="max-lg:leading-10 xl:leading-none md:pb-5 xl:font-medium 2xl:text-6xl xl:pb-14">
                            {t('login.title', 'Welcome to')}
                            <br />
                            trades.org
                        </h1>
                        <div className="max-w-sm lg:max-w-md">
                            <div className="my-6">
                                <Tabs signupMessages={signupMessages} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex lg:flex-1 max-md:max-h-[1000px]">
                <div className="relative w-full h-full">
                    <Image
                        priority
                        alt={t('login.alt', 'login-hero')}
                        className="absolute inset-0 w-full h-full object-cover"
                        src={HeroAVIF}
                    />
                </div>
            </div>
        </div>
    );
};
