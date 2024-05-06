import { useTranslation } from '@app/i18n/client';
import { Button } from '@components/templates/common/button';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { type FC } from 'react';
import cutaway from '~/images/Cutaway-Design-6.png';
import footerTop from '~/images/footer-top-bg.png';
import footerBG from '~/images/glenn-hansen-VW4xiLRr-do-unsplash-1.png';

const ReadyToLaunch: FC = () => {
    const { lng } = useParams<{lng: string}>();
    const { t } = useTranslation(lng);

    return (
        <section className="w-full">
            <div className={'relative top-0.5 [@media(min-width:1299px)]:h-[395px]'}>
                <Image
                    src={cutaway}
                    alt={t('toughLove.readyToLaunch.alt1', 'Cut Design')}
                    className="w-full hidden sm:block [@media(min-width:1299px)]:h-full"
                />
                <Image
                    src={footerTop}
                    alt={t('toughLove.readyToLaunch.alt2', 'Footer Top')}
                    className="w-full block sm:hidden [@media(min-width:1299px)]:h-full"
                />
            </div>
            <div
                className="bg-no-repeat bg-cover h-[870px] pt-8 [@media(min-width:1299px)]:bg-center [@media(max-width:576px)]:pt-24"
                style={{
                    backgroundImage: `url(${footerBG.src})`,
                }}
            >
                <div className="xl:px-28 px-6 relative max-w-[1692px] mx-auto">
                    <div className=" max-w-full [@media(min-width:768px)]:max-w-[30rem] ">
                        <h1 className="text-white font-extrabold text-5xl [@media(max-width:639px)]:text-4xl">
                            {t('toughLove.readyToLaunch.title', 'Ready to dominate your local trade industry?')}
                        </h1>
                        <p className="text-white text-2xl leading-7 my-6 lg:my-16 [@media(max-width:576px)]:text-xl">
                            {t(
                                'toughLove.readyToLaunch.paragraph',
                                'Get your Free ready-to-launch website in just minutes and start getting results!',
                            )}
                        </p>
                        <div className="w-full md:pr-4">
                            <Link href={'/free-form'}>
                                <Button
                                    type="button"
                                    className="btn placeholder:font-normal placeholder:text-sm w-full bg-redLanding hover:bg-redLanding/90 border-none text-lg h-auto cursor-pointer sm:text-lg font-bold py-5 px-4"
                                >
                                    {t('common.getStartedButton', 'Get started for free').toUpperCase()}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReadyToLaunch;
