'use client';
import { useTranslation } from '@app/i18n/client';
import { Button } from '@components/templates/common/button';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { type FC } from 'react';
import { Card } from 'react-daisyui';
import vectorIcon from '~/images/Vector-formula-1.png';
import checkedIcon from '~/images/checked.png';
import settingsIcon from '~/images/settings.png';
import type { ServicesProps } from './types';

const Services: FC<ServicesProps> = ({ onClickAction }) => {
    const { lng } = useParams<{lng: string}>();
    const { t } = useTranslation(lng);
    const onClickHandler = (action: string) => {
        if (action === 'scroll') {
            window.location.href = '#form';
            return;
        }
        window.location.href = '/free-form';
        return;
    };

    return (
        <section className="w-full mt-10 md:mt-28">
            <div className="w-full pt-0 md:pb-0">
                <div className="px-6 text-center max-w-[1440px] mx-auto">
                    <div className="lg:px-24">
                        <h1 className="md:text-4xl text-2xl text-gray-800 leading-10 font-extrabold mb-2 ">
                            {t('limitedOfferForm.services.title', 'Whats our secret formula?')}
                        </h1>
                        <p className="md:px-0 px-12 md:leading-10 leading-6 font-extrabold mb-8   text-[#0d649f] md:text-3xl text-xl">
                            {t('limitedOfferForm.services.subtitle', 'trades.org = More Reviews + More Jobs + More Revenue')}
                        </p>

                        <p className="md:text-lg text-base md:text-center text-left text-gray-800 md:leading-8 leading-5  font-normal mb-8 ">
                            {t(
                                'limitedOfferForm.services.description1',
                                'When creating trades.org, we took the most important elements of running a successful trade business and deconstructed it to fit them into a simple-to-use, yet powerful interface.',
                            )}
                        </p>

                        <p className="md:text-lg text-base md:text-center text-left text-gray-800 md:leading-8 leading-5  font-normal mb-8">
                            {t(
                                'limitedOfferForm.services.description2',
                                'Below, you will find our three main features that will get you more reviews, more jobs, and more revenue:',
                            )}
                        </p>
                    </div>
                    <div className="flex lg:flex-row flex-col justify-between mt-16 gap-6">
                        <Card className="lg:w-1/3 w-full mx-auto lg:mb-0 mb-8 shadow-lg overflow-hidden bg-white ">
                            <div className={'w-full text-center py-6 '}>
                                <div className="w-14 h-16 mx-auto">
                                    <Image
                                        className="w-full"
                                        src={vectorIcon}
                                        alt={t('limitedOfferForm.services.service1.alt', 'vector')}
                                    />
                                </div>
                                <div className="px-8 md:px-12 ">
                                    <h2 className="text-2xl text-gray-800 font-extrabold leading-6 my-8 ">
                                        {t('common.websiteManagment', 'Website Management')}
                                    </h2>
                                    <p className="text-base text-green-600 font-extrabold leading-4 mb-8 italic">
                                        {t('limitedOfferForm.services.service1.subtitle1', 'A HIGH RANKING WEBSITE')}
                                        <br />
                                        {t('limitedOfferForm.services.service1.subtitle2', 'CAN LIFT SALES BY 50%')}
                                    </p>
                                    <p className="text-base text-gray-800 leading-6 text-left  mb-10 ">
                                        {t(
                                            'limitedOfferForm.services.service1.description',
                                            'We’ll create a professional website that builds trust in your work. Easy and quick, your new site will create leads, convert sales and increase your income.',
                                        )}
                                    </p>
                                    <Button type="button" color="red" className={'w-full '} onClick={() => onClickHandler(onClickAction)}>
                                        {t('common.getStartedButton', 'Get started for free').toUpperCase()}
                                    </Button>
                                </div>
                            </div>
                        </Card>
                        <Card className="lg:w-1/3 w-full mx-auto bg-white  lg:mb-0 mb-8 shadow-lg overflow-hidden">
                            <div className={'w-full text-center py-6 '}>
                                <div className="w-14 h-16 mx-auto">
                                    <Image
                                        className="w-full"
                                        src={settingsIcon}
                                        alt={t('limitedOfferForm.services.service2.alt', 'settings')}
                                    />
                                </div>
                                <div className="px-8 md:px-12">
                                    <h2 className="text-2xl text-gray-800 font-extrabold leading-6 my-8 ">
                                        {t('common.brandManagement', 'Brand Management')}
                                    </h2>
                                    <p className="text-base text-green-600 font-extrabold leading-4 mb-8 italic">
                                        {t('limitedOfferForm.services.service2.subtitle1', 'PROPER BRAND MANAGEMENT')}
                                        <br />
                                        {t('limitedOfferForm.services.service2.subtitle2', 'CAN LIFT SALES BY 33%')}
                                    </p>
                                    <p className="text-base text-gray-800 leading-6 text-left  mb-10 ">
                                        {t(
                                            'limitedOfferForm.services.service2.description',
                                            'Build a professional presence where your clients are on social media. Engage future customers with new ideas, beautiful photos and glowing reviews.',
                                        )}
                                    </p>
                                    <Button type="button" color="red" className={'w-full '} onClick={() => onClickHandler(onClickAction)}>
                                        {t('common.getStartedButton', 'Get started for free').toUpperCase()}
                                    </Button>
                                </div>
                            </div>
                        </Card>
                        <Card className="lg:w-1/3 w-full mx-auto lg:mb-0 mb-8 shadow-lg bg-white overflow-hidden">
                            <div className={'w-full text-center py-6 '}>
                                <div className="w-14 h-16 mx-auto">
                                    <Image
                                        className="w-full"
                                        src={checkedIcon}
                                        alt={t('limitedOfferForm.services.service3.alt', 'Checked')}
                                    />
                                </div>
                                <div className="px-8 md:px-12">
                                    <h2 className="text-2xl text-gray-800 font-extrabold leading-6 my-8">
                                        {t('common.reputationManagement', 'Reputation Management')}
                                    </h2>
                                    <p className="text-base text-green-600 font-extrabold leading-4 mb-8 italic">
                                        {t('limitedOfferForm.services.service3.subtitle1', 'QUALITY REVIEWS')}
                                        <br />
                                        {t('limitedOfferForm.services.service3.subtitle2', 'CAN LIFT SALES BY 18%')}
                                    </p>
                                    <p className="text-base text-gray-800 leading-6 text-left  mb-10">
                                        {t(
                                            'limitedOfferForm.services.service3.description',
                                            'We manage your reputation by requesting online reviews, highlighting positive customer experiences and helping you quickly problem solve when things go wrong.',
                                        )}
                                    </p>
                                    <Button type="button" color="red" className={'w-full '} onClick={() => onClickHandler(onClickAction)}>
                                        {t('common.getStartedButton', 'Get started for free').toUpperCase()}
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
