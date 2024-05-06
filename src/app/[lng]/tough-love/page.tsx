'use client';
import { useTranslation } from '@app/i18n/client';
import { Footer } from '@components/templates/common/footer';
import { Services } from '@components/templates/limited-offer-form/components/services';
import { BuildWebsite } from '@components/templates/tough-love-landing/components/build-website';
import { EasyToUse } from '@components/templates/tough-love-landing/components/easy-to-use';
import { FAQ } from '@components/templates/tough-love-landing/components/faq';
import { Hero } from '@components/templates/tough-love-landing/components/hero';
import { ReadyToLaunch } from '@components/templates/tough-love-landing/components/ready-to-launch';
import { Testimonials } from '@components/templates/tough-love-landing/components/testimonials';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { type FC } from 'react';
import cutaway from '~/images/Cutaway_Design_3.png';
import cutawayMobile from '~/images/Cutaway_Design_Mobile_3.png';
import image from '~/images/Rectangle-42.png';
import newAngle from '~/images/new-angle-img.png';

const ToughLoveLanding: FC = () => {
    const { lng } = useParams<{lng: string}>();
    const { t } = useTranslation(lng);

    return (
        <>
            <Hero />
            <div className="lg:-mt-44 max-sm:!mt-0 [@media(max-width:1050px)]:-mt-56 max-md:-mt-28  xl:-mt-32">
                <EasyToUse />
            </div>
            <section className="w-full relative">
                <div
                    className="flex justify-between relative h-28 top-8"
                    style={{
                        transform: 'rotateX(180deg)',
                    }}
                >
                    <Image src={newAngle} alt={t('toughLove.alt1', 'Vector')} className="block  w-full h-52 relative -top-32 " />
                </div>
                <div
                    className="[@media(max-width:576px)]:pb-2.5 pt-6"
                    style={{
                        backgroundImage: `url(${image})`,
                    }}
                >
                    <div className="relative z-50">
                        <Services onClickAction="redirect" />
                    </div>
                </div>
                <div className="relative lg:-top-20 -top-12 [@media(max-width:382px)]:-top-4 [@media(max-width:576px)]:-top-8 [@media(max-width:576px)]:mt-0 [@media(max-width:1024px)]:-top-16 [@media(max-width:1024px)]:mt-6 [@media(min-width:1299px)]:h-[310px] [@media(min-width:1299px)]:-top-24">
                    <Image
                        src={cutaway}
                        alt={t('toughLove.alt1', 'Vector')}
                        className="w-full hidden sm:block [@media(min-width:1299px)]:h-full"
                    />

                    <Image
                        src={cutawayMobile}
                        alt={t('toughLove.alt2', 'cut away')}
                        className="w-full block sm:hidden [@media(min-width:1299px)]:h-full"
                    />
                </div>
            </section>

            <BuildWebsite />
            <Testimonials />
            <FAQ />
            <ReadyToLaunch />
            <Footer />
        </>
    );
};

export default ToughLoveLanding;
