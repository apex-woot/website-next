import { useTranslation } from '@app/i18n/client';
import { Button } from '@components/templates/common/button';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { type FC } from 'react';
import logo2 from '~/images/logo-2.png';
import pexels from '~/images/pexels-dio-hasbi-saniskoro-3280130-1.png';
import ring from '~/images/ring-img.png';
import screenshot from '~/images/screenshot.jpg';

const BuildWebsite: FC = () => {
    const { lng } = useParams<{lng: string}>();
    const { t } = useTranslation(lng);

    return (
        <div className="bg-white">
            <div className="max-w-[1440px] mx-auto">
                <div className="flex lg:flex-row flex-col justify-between lg:px-20 px-6 mb-12">
                    <div className="lg:w-1/2 w-full md:pr-4">
                        <h1 className="text-gray-800 leading-10 font-extrabold mb-8 text-3xl">
                            {t('toughLove.buildWebsite.title1', 'No one is doing it the way we are.')}
                            <br className="xl:block hidden" />
                            {t('toughLove.buildWebsite.title2', 'We’re invested in your success.')}
                        </h1>
                        <div className="xl:pr-12">
                            <p className="text-gray-800 font-normal leading-8 mb-6 text-sm">
                                {t(
                                    'toughLove.buildWebsite.paragraph1',
                                    'Trades.org is quite simply the only platform that offers an affordable, one-stop solution that requires very little effort to manage. Our competitors will only help you with parts of your marketing, but don’t put themselves on the line to make sure you succeed.',
                                )}
                            </p>
                            <p className=" text-gray-800 font-normal leading-8  mb-6 text-sm">
                                {t(
                                    'toughLove.buildWebsite.paragraph2',
                                    'We want to make sure your business growth doesn’t plateau. It’s time to gain traction in your industry without spending thousands of dollars a year just to survive.',
                                )}
                            </p>
                            <p className="text-base text-gray-800 font-bold leading-8 mb-6 ">
                                {t(
                                    'toughLove.buildWebsite.paragraph3',
                                    'Build your Free website now and let us take you under our wing. If you don’t see results after three months, we will give you your money back.',
                                )}
                            </p>
                        </div>
                        <Button
                            onClick={() => {
                                window.location.href = '/free-form-landing';
                            }}
                            type="button"
                            color="red"
                            className="2xl:w-7/12 w-full py-6 px-8 text-base md:text-xl rounded-base font-bold  h-20"
                        >
                            {t('common.getStartedButton', 'Get started for free').toUpperCase()}
                        </Button>
                    </div>
                    <div className="flex lg:w-1/2 w-full lg:px-4">
                        <div className="pt-16 mx-auto lg:align-middle xl:pt-28 text-center">
                            <Image
                                className="mx-auto lg:ml-auto w-full max-w-full sm:w-auto shadow-lg rounded-lg"
                                src={screenshot}
                                alt={t('toughLove.buildWebsite.alt1', 'Example Screenshot')}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-20 pb-4 max-w-[1440px] mx-auto">
                <div className="flex lg:flex-row flex-col justify-between lg:px-6">
                    <div className="lg:w-1/2 w-full lg:px-4">
                        <div className="bg-cover bg-center max-sm:bg-ringFull">
                            <Image src={ring} alt={t('toughLove.buildWebsite.alt2', 'ring')} className="block sm:hidden w-full" />
                            <Image
                                src={pexels}
                                className={`lg:max-w-xl g:mr-auto mx-auto sm:w-full sm:h-full
                            rounded-full hidden sm:block border-[30px] border-[#eff2f6] max-lg:w-[calc(100%-60px)]`}
                                alt={t('toughLove.buildWebsite.alt3', 'Support image')}
                            />
                        </div>
                        <div className="w-full text-center justify-center lg:inline-flex hidden pt-10">
                            <div className="px-4 w-48">
                                <Image src={logo2} className="w-full" alt={t('toughLove.buildWebsite.alt4', 'BBB Logo')} />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full xl:pt-72">
                        <div className="px-6 lg:px-0 lg:pl-16">
                            <h1 className="text-gray-800 leading-10 font-extrabold mb-12 text-2xl sm:text-4xl">
                                {t('toughLove.buildWebsite.title3', 'Our best-in-class support')}
                                <br className="xl:block hidden" /> {t('toughLove.buildWebsite.title4', 'is here for you 24/7.')}
                            </h1>
                            <div className="lg:pr-5">
                                <p className="text-sm text-gray-800 font-normal leading-8 mb-6 ">
                                    {t(
                                        'toughLove.buildWebsite.paragraph4',
                                        'We’ve got your back. We will help you manage your team, marketing, website, and reviews through an easy-to-use dashboard so you can focus on what it is you do best.',
                                    )}
                                </p>
                                <p className="text-sm text-gray-800 font-normal leading-8 mb-6 ">
                                    {t(
                                        'toughLove.buildWebsite.paragraph5',
                                        'Our award-winning Concierge Team is here for you 24/7 to answer any questions you may have along your journey.',
                                    )}
                                </p>
                                <p className="text-md text-gray-800 font-bold leading-8 mb-12 ">
                                    {t(
                                        'toughLove.buildWebsite.paragraph6',
                                        'Get your Free, ready-to-launch website to see just how easy it is to grow your business.',
                                    )}
                                </p>
                            </div>
                            <Link href={'/free-form-landing'}>
                                <Button
                                    type="button"
                                    color="red"
                                    className="2xl:w-7/12 w-full py-6 px-8 text-base md:text-xl rounded-base font-bold  h-20"
                                >
                                    {t('common.getStartedButton', 'Get started for free').toUpperCase()}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BuildWebsite;
