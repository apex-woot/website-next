'use client';
import { useTranslation } from '@app/i18n/client';
import { useParams } from 'next/navigation';
import React, { type FC } from 'react';
import { Link } from 'react-daisyui';
import { SectionLayout } from '../common/section-layout';
import { StartFreeLandingButton } from '../common/start-free-landing-button';
import { StyledTextSection } from '../common/styled-text-section';
import { TextLayout } from '../common/text-layout';
import { CardList } from './components';
import { testimonialsList } from './utils';

const Testimonials: FC = () => {
    const { lng } = useParams<{lng: string}>();
    const { t } = useTranslation(lng);

    const buttonTitle = t('startFree.buttonTitle', 'Get Started Now');
    const textData = {
        head: t('startFree.testimonials.head', 'Success stories from pros across the country...'),
        body: t('startFree.testimonials.body', 'We’d love to share your success story.<br> What are you waiting for?'),
    };

    return (
        <SectionLayout className="bg-darkGray md:py-24 items-center lg:py-0 overflow-hidden">
            <TextLayout buttonTitle={buttonTitle}>
                <StyledTextSection bodyText={textData.body} headerText={textData.head} />
            </TextLayout>
            <CardList testimonialsList={testimonialsList} />
            <div className="md:hidden">
                <Link href="#hero-form">
                    <StartFreeLandingButton className="w-full" title={buttonTitle} />
                </Link>
            </div>
        </SectionLayout>
    );
};

export default Testimonials;
