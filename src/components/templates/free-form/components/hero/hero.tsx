'use client';
import { useTranslation } from '@app/i18n/client';
import { bulletPoints } from '@components/templates/common';
import { BulletList } from '@components/templates/common/bullet-list';
import { Form } from '@components/templates/free-form/components/form';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { type FC } from 'react';
import blurPlumberImg from '~/images/blur-plumber.png';
import logoIcon from '~/images/logo.png';
import ringIcon from '~/images/ring.png';

const Hero: FC = () => {
    const { lng } = useParams<{lng: string}>();
    const { t } = useTranslation(lng);

    return (
        <div
            className="relative max-sm:bg-freeFormMaskGroup bg-rectangle overflow-hidden bg-no-repeat bg-cover min-h-screen h-[auto] bg-[#1f2937]"
            style={{
                backgroundPositionX: 'right',
            }}
        >
            <div className="md:block hidden absolute right-0">
                <Image className="text-right" aria-placeholder="none" src={ringIcon} alt={t('freeForm.hero.alt', 'ring')} />
            </div>

            <div className="max-w-[1440px] mx-auto">
                <div className="flex md:flex-row flex-col  md:px-6 px-5 pt-8 pb-16 max-lg:gap-8">
                    <div className="md:w-1/2 w-full z-10">
                        <div className="lg:pr-0 pt-2">
                            <Image aria-placeholder="none" src={logoIcon} alt="tradeProLogo" />
                        </div>
                        <div className="pt-12">
                            <h1 className="text-white text-5xl leading-tight tracking-tight max-md:leading-10 max-sm:text-4xl font-extrabold md:mb-10 mb-6">
                                {t('freeForm.hero.title', 'Our websites are tailored to get you results.')}
                            </h1>

                            <div className="md:hidden block">
                                <p className="text-xl font-semibold leading-8 text-yellow-400">
                                    {t('freeForm.hero.header1', 'GET YOUR FREE READY-TO- LAUNCH WEBSITE NOW:')}
                                </p>

                                <p>
                                    <span className="text-xl font-semibold text-yellow-400">
                                        <del>$99 </del>
                                        {t('freeForm.hero.header2', 'STARTUP FEE WAIVED')}
                                    </span>
                                </p>
                            </div>

                            <div className="max-md:hidden">
                                <BulletList
                                    items={bulletPoints}
                                    itemClassName="text-white"
                                    icon={<CheckCircleIcon className="w-8 h-8 text-yellow-400" />}
                                />
                            </div>
                        </div>
                    </div>

                    <Form />
                </div>
            </div>
            <div className="md:block hidden -bottom-4 -left-1.5 absolute">
                <Image aira-placeholder="none" src={blurPlumberImg} alt={t('freeForm.hero.alt', 'ring')} />
            </div>
        </div>
    );
};
export default Hero;
