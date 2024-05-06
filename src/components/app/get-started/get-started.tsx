import { useTranslation } from '@app/i18n';
import { Button } from '@components/app/common/buttons';
import Link from 'next/link';
import { type FC } from 'react';
import GetStartedImg from '~/svg/house-90CAF9-cloud-bg.svg';
import type { GetStartedProps } from './types';

const GetStarted: FC<GetStartedProps> = async ({ title, defaultTitle, ctaText, defaultCtaText, subtitle, defaultSubtitle, lng }) => {
    const { t } = await useTranslation(lng);
    return (
        <section>
            <div className="bg-secondary flex justify-center mb-28 md:mb-32">
                <div className="w-full md:w-2/5 -mb-28 md:-mb-40">
                    <GetStartedImg className="w-full" />
                </div>
            </div>
            <div className="flex justify-center mb-10">
                <div className="text-center w-full md:w-1/2">
                    <p className="text-[#666666] mt-5 text-sm">{t(subtitle, defaultSubtitle)}</p>
                    <h2 className="mb-8">{t(title, defaultTitle)}</h2>
                    <Link href={''}>
                        <Button dataTrackingId="cta-body" dataTrackingEvent="Get Started">
                            {t(ctaText, defaultCtaText)}
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default GetStarted;
