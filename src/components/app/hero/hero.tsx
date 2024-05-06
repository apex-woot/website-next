import { useTranslation } from '@app/i18n';
import { Button } from '@components/app/common/buttons';
import Link from 'next/link';
import { type FC, Fragment } from 'react';
import type { HeroComponentProps } from '.';

const HeroComponent: FC<HeroComponentProps> = async ({ BgImage, ctaText, defaultCtaText, subtitle, defaultSubtitle, titles = [], lng }) => {
    const { t } = await useTranslation(lng);

    const verifyEndOfLine = (index: number) => {
        if (index !== titles.length - 1) {
            return <br />;
        }
        return null;
    };

    return (
        <div role="banner" className={`hero ${BgImage?.src ? '-mb-14 md:-mb-20' : ''}`}>
            <div className="hero-content w-full block">
                <section className="text-center">
                    <p className="text-base md:text-lg text-primary mb-4">{t(subtitle, defaultSubtitle)}</p>
                    <h1 className="text-[#151515] text-2xl md:text-4xl mb-6">
                        {titles.map((item, index) => (
                            <Fragment key={`title-${index + 1}`}>
                                {t(item.title, item.defaultTitle)}
                                {verifyEndOfLine(index)}
                            </Fragment>
                        ))}
                    </h1>
                    {ctaText && defaultCtaText && (
                        <Link href="/trade-pro/login">
                            <Button dataTrackingId="cta-hero" dataTrackingEvent="Get Started">
                                {t(ctaText, defaultCtaText)}
                            </Button>
                        </Link>
                    )}
                    {BgImage && <BgImage.img alt={t(subtitle, defaultSubtitle)} className="mx-auto w-full md:w-1/2 mt-8" />}
                </section>
            </div>
        </div>
    );
};

export default HeroComponent;
