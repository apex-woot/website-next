import { useTranslation } from '@app/i18n/client';
import { Button } from '@components/templates/common/button';
import { TradesOrgLogo } from '@components/templates/common/trades-org-logo';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { type FC } from 'react';
import BGHero from '~/images/BG_Hero.png';
import plumberMobile from '~/images/plumber-mobile.png';
import plumber from '~/images/plumber.png';
import wavesCircular from '~/images/white-circular.png';

const Hero: FC = () => {
    const { lng } = useParams<{lng: string}>();
    const { t } = useTranslation(lng);

    return (
        <>
            <div className="w-full bg-[#1f2937] [@media(min-width:1280px)]:h-[38rem] [@media(min-width:1024px)_and_(max-width:1049px)]:h-[53rem] [@media(min-width:1050px)_and_(max-width:1082px)]:h-[46rem] [@media(min-width:1082px)_and_(max-width:1279px)]:h-[42rem] pt-12 relative">
                <div className="mx-auto">
                    <div
                        className={'w-full relative '}
                        style={{
                            backgroundImage: `url(${BGHero.src})`,
                        }}
                    >
                        <div className="w-full max-lg:px-4">
                            <div className="max-w-[1440px] w-full  lg:pl-20 lg:pr-0  pt-8 mx-auto lg:px-3 gap-3 ">
                                <TradesOrgLogo />
                            </div>
                        </div>
                        <div className="flex lg:flex-row flex-col justify-between lg:max-w-[1440px]   lg:pl-20 lg:pr-0  pt-8 mx-auto lg:px-3 gap-3">
                            <div className="w-full z-10  max-lg:px-4">
                                <div className="lg:max-w-md w-full ">
                                    <h2 className="font-extrabold text-white text-4xl md:text-5xl ">
                                        {t('toughLove.hero.title1', 'We will help you stand out and get more jobs.')}
                                    </h2>

                                    <p className="text-white leading-7 my-10 sm:my-4 lg:my-10 text-lg md:text-xl">
                                        {t(
                                            'toughLove.hero.paragraph1',
                                            "We'll build an attractive website for your business that ranks high on search results and produces quality reviews of your work- all important factors to winning more jobs!",
                                        )}
                                    </p>

                                    <p className="text-warning leading-7 text-lg md:text-xl my-4">
                                        {t('toughLove.hero.paragraph2', 'Get your Free ready-to-launch website in just minutes...')}
                                    </p>

                                    <div className="w-full my-8 sm:my-0 lg:my-8">
                                        <Link href={'/free-form'}>
                                            <Button
                                                type="button"
                                                color="red"
                                                className="text-lg h-auto cursor-pointer sm:text-2xl font-bold w-full  py-6 px-4 sm-px-8 "
                                            >
                                                {t('common.getStartedButton', 'Get started for free').toUpperCase()}
                                            </Button>
                                        </Link>
                                    </div>
                                    <p className=" text-white leading-6 mb-8 mt-3 text-xs [@media(max-width:1024px)]:mb-0 [@media(min-width:1024px)_and_(max-width:1080px)]:mb-28">
                                        {t('toughLove.hero.paragraph3', 'NO OBLIGATIONS, NO CONTRACTS, CANCEL AT ANY TIME')}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className={'h-full'}>
                                    <Image
                                        src={plumber}
                                        alt={t('toughLove.hero.alt1', 'Plumber')}
                                        className="hidden lg:absolute mr-auto bottom-0 right-0 sm:block lg:w-[490px] 2xl:w-[720px]"
                                    />
                                    <Image src={plumberMobile} alt={t('toughLove.hero.alt1', 'Plumber')} className="block sm:hidden" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-72 relative z-0 bottom-52 [@media(min-width:1050px)_and_(max-width:1279px)]:bottom-36 [@media(min-width:1081px)_and_(max-width:1081px)]:!bottom-48 xl:bottom-20  2xl:bottom-24 max-sm:hidden">
                <Image src={wavesCircular} alt={t('toughLove.hero.alt2', 'Circular')} className="w-full h-72 absolute" />
            </div>
        </>
    );
};

export default Hero;
