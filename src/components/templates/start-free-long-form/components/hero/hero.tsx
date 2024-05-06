import Image from 'next/image';
import React, { type FC } from 'react';
import RoundedOffer from '~/images/landing-pages/Start-Free/Long-form/RoundedOffer.svg';
import TopLogo from '~/images/landing-pages/Start-Free/Long-form/dark_logo.svg';
import LpGuy from '~/images/landing-pages/Start-Free/Long-form/lpguy.png';
import FooterOffer from '~/images/landing-pages/Start-Free/Long-form/offerText.svg';
import ShutterStockGuy from '~/images/landing-pages/Start-Free/Long-form/shutterstock.png';
import { SectionLayout } from '../common/section-layout';
import { Form } from '../form';
import type { HeroProps } from './types';

const Hero: FC<HeroProps> = ({ title, position }) => (
    <SectionLayout className={`${position === 'TOP' ? 'bg-light' : 'bg-[#7ac7e5]'} overflow-hidden`}>
        <TopLogo className={'w-52 h-9 absolute bg-no-repeat top-5 left-5'} />
        <Form title={title} specificationDisplay={(typeof window !== 'undefined' && window.innerWidth <= 375) || position === 'TOP'} />
        {position === 'TOP' ? (
            <Image
                alt="lp-guy-img"
                loading="lazy"
                className={
                    'w-full h-[300px] xs:h-[350px] md:h-[750px] m-auto lg:m-0 bg-center lg:w-[760px] order-2 lg:order-1 md:self-end bg-lpGuy bg-contain lg:bg-cover bg-no-repeat'
                }
                src={LpGuy}
            />
        ) : (
            <>
                <Image
                    alt="lp-guy-img"
                    loading="lazy"
                    className={
                        'w-full h-[300px] xs:h-[350px] md:h-[750px] m-auto lg:m-0 bg-center lg:w-[760px] lg:h-[930px] order-2 lg:order-1 md:self-end bg-contain lg:bg-cover bg-no-repeat'
                    }
                    src={ShutterStockGuy}
                />
                <RoundedOffer className="w-20 h-20 xs:w-28 xs:h-28 md:w-[150px] md:h-[150px]" alt="roundedOffer" />
                <FooterOffer className="hidden w-80 lg:block lg:absolute lg:left-8 lg:bottom-12" alt="footerOffer" />
            </>
        )}

        <div className="w-52 h-9 hidden lg:block absolute bg-logoTemplate bg-no-repeat bottom-5 right-5" />
    </SectionLayout>
);

export default Hero;
