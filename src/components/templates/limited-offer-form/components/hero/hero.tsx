'use client';
import { useTranslation } from '@app/i18n/client';
import { bulletPoints } from '@components/templates/common';
import { BulletList } from '@components/templates/common/bullet-list';
import { PoweredList } from '@components/templates/common/powered-list';
import { TradesOrgLogo } from '@components/templates/common/trades-org-logo';
import { Form } from '@components/templates/free-form/components/form';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { type FC } from 'react';
import HeroImage from '~/images/landing-pages/limit-offer-form/Hero_Opening_Image.png';
import LimitedOfferImg from '~/images/landing-pages/limit-offer-form/curve-bg.png';

const Hero: FC = () => {
    const { lng } = useParams<{lng: string}>();
    const { t } = useTranslation(lng);

    return (
        <>
            <div className="max-md:bg-blurPlumber md:h-[1205px] lg:h-[1220px] 2xl:h-[1180px] bg-no-repeat bg-cover h-auto relative overflow-hidden bg-[#1f2937] ">
                <div className="max-w-[1470px] mx-auto ">
                    <div className="flex md:flex-row flex-col xl:px-20 md:px-6 px-5 pt-8 pb-20 max-xl:gap-6">
                        <div className="md:w-1/2 w-full z-10">
                            <div className="lg:pr-0 pt-2 ">
                                <TradesOrgLogo />
                            </div>
                            <div className="pt-12">
                                <h1 className="text-white font-extrabold md:mb-10 mb-6 sm:text-[48px] leading-tight text-4xl">
                                    {t('limitedOfferForm.hero.title', 'Your trade business deserves a bold website.')}
                                </h1>
                                <p className="text-2xl font-semibold leading-8 md:hidden block m-0 text-warning">
                                    {t('limitedOfferForm.hero.subtitle', 'GET YOUR FREE READY-TO-LAUNCH WEBSITE NOW:')}
                                </p>
                                <p className="m-0">
                                    <span className="text-2xl  md:hidden block font-semibold text-warning">
                                        <span className="line-through">$99</span> {t('limitedOfferForm.hero.fee', 'STARTUP FEE WAIVED')}
                                    </span>
                                </p>
                                <BulletList
                                    items={bulletPoints}
                                    itemClassName="text-white"
                                    className="gap-5  md:flex hidden"
                                    icon={<CheckCircleIcon className="w-8 h-8 text-warning" />}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col  [&>*]:w-full w-full max-md:max-w-full max-w-xl [&>*]:p-0">
                            <Form />
                            <PoweredList
                                provider={['BBB', 'AWS', 'Twilio']}
                                itemClassname="[&>*]:h-10"
                                labelClassname="text-white"
                                wrapperClassname="items-center flex-col w-full gap-4 md:flex hidden"
                            />
                        </div>
                    </div>
                </div>

                <div className="md:block hidden mt-10 z-50 absolute left-0 bottom-4 md:max-w-[14rem] lg:max-w-[20rem] lg:bottom-3  w-full xl:max-w-[28rem]">
                    <Image aria-placeholder="none" src={HeroImage} alt={t('limitedOfferForm.hero.alt1', 'ring')} />
                </div>
            </div>
            <section className="md:block hidden md:h-96 md:top-[50rem] lg:top-[51.5rem] bottom-0 top-[43.5rem] xl:top-[51.2rem] 2xl:top-[48rem] absolute right-0 left-0 w-full z-10 ">
                <div className="w-full h-full">
                    <Image
                        aria-placeholder="none"
                        src={LimitedOfferImg}
                        alt={t('limitedOfferForm.hero.alt2', 'Curve')}
                        className="w-full h-full"
                    />
                </div>
            </section>
        </>
    );
};

export default Hero;
