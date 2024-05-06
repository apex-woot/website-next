import { useTranslation } from '@app/i18n';
import { Button } from '@components/app/common/buttons';
import Image from 'next/image';
import Link from 'next/link';
import HomeHeroImg from '~/images/person-trade-pro-dremel.webp';

const HomeHero = async ({ lng }: { lng: string }) => {
    const { t } = await useTranslation(lng);
    return (
        <section className="md:flex">
            <div className="w-full md:w-2/5 flex items-center justify-center">
                <div className="w-4/5 md:w-3/5 h-fit mb-14 md:mb-0">
                    <h1 className="mb-6">{t('homeHero.title', 'We help trade businesses run and grow.')}</h1>
                    <p className="mb-6">
                        {t('homeHero.text', 'Interested in saving time and making more money? Start by answering a few questions.')}
                    </p>
                    <Link href="/trade-pro/login">
                        <Button type="submit" className="w-full" dataTrackingId="cta-body" dataTrackingEvent="Get Started">
                            {t('common.getStarted', 'Get started')}
                        </Button>
                    </Link>
                </div>
            </div>
            <div aria-hidden="true" className="w-full md:w-3/5">
                <Image priority src={HomeHeroImg} alt={t('homeHero.alt', 'hero-image')} className="wimage-full object-cover" />
            </div>
        </section>
    );
};

export default HomeHero;
