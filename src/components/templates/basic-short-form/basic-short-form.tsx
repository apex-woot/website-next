'use client';
import { useTranslation } from '@app/i18n/client';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { type FC } from 'react';
import { bulletPoints } from '../common';
import { BulletList } from '../common/bullet-list';
import { Button } from '../common/button';
import { Header } from '../common/header';
import { PoweredList } from '../common/powered-list';
import { TradesOrgLogo } from '../common/trades-org-logo';
import { Form, Hero } from './components';

const BasicShortForm: FC = () => {
    const { lng } = useParams<{lng: string}>();
    const { t } = useTranslation(lng);

    return (
        <div className="w-full">
            <Hero>
                <div className="w-full lg:w-11/12 flex justify-center lg:justify-start">
                    <a href="https://www.trades.org/trade-pro" target="_blank" rel="noreferrer">
                        <TradesOrgLogo className="py-5" />
                    </a>
                </div>
                <div className="w-full lg:w-11/12 flex flex-wrap">
                    <div className="w-full lg:w-1/2">
                        <div className="px-4 md:p-0 lg:pl-7">
                            <Header className="text-white">
                                {`${t('basicShortForm.heroHeader1', 'Win more jobs with')}`}
                                <br className="hidden md:block" />
                                {`${t('basicShortForm.heroHeader2', 'a customer-centric')}`}
                                <br className="hidden md:block" />
                                {`${t('basicShortForm.heroHeader3', 'pro website.')}`}
                            </Header>
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
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end 2xl:justify-center flex-wrap">
                        <Form>
                            <Header>
                                {`${t('basicShortForm.formHeader1', 'Join now for FREE')}`}
                                <br className="hidden md:block" />
                                {`${t('basicShortForm.formHeader2', 'to get started')}`}
                            </Header>
                        </Form>
                    </div>
                </div>
            </Hero>
            <div className="flex lg:hidden justify-center relative">
                <div className="absolute -top-8">
                    <a href="services" className="bg-white rounded-full h-16 w-16 flex justify-center items-center focus:outline-none">
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
                        {`${t('common.onlinePresence', "We'll help you take your online presence to the next level...")}`}
                    </h1>
                    <BulletList items={bulletPoints} icon={<CheckCircleIcon className="w-8 h-8 text-sky" />} />
                    <Link href={'#form'}>
                        <Button color="sky" className="text-sm my-10 w-full">
                            {`${t('common.getStartedButton', 'Get started for free').toUpperCase()}`}
                        </Button>
                    </Link>
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

export default BasicShortForm;
