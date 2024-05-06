'use client';
import { useTranslation } from '@app/i18n/client';
import { scrollTo } from '@components/app/common/scroll';
import { useParams } from 'next/navigation';
import React, { type FC } from 'react';
import { CardViews } from '../card-views';
import { SectionLayout } from '../common/section-layout';
import { StartFreeLandingButton } from '../common/start-free-landing-button';
import { StyledTextSection } from '../common/styled-text-section';
import { TextLayout } from '../common/text-layout';
import { tradePros } from './utils';

const Opportunities: FC = () => {
    const { lng } = useParams<{ lng: string }>();
    const { t } = useTranslation(lng);

    const textData = {
        head: t('startFree.opportunities.head', 'You win more jobs when you’re easy to find online.'),
        body: t(
            'startFree.opportunities.body',
            'Our platform was engineered to rank higher on search results giving you more organic visibility.',
        ),
    };

    return (
        <SectionLayout className="pt-12 lg:py-48 bg-darkGray overflow-hidden items-center">
            <TextLayout buttonTitle={t('common.getStartedButton', 'Get started for free')}>
                <StyledTextSection headerText={textData.head} bodyText={textData.body} />
            </TextLayout>
            <CardViews tradePros={tradePros} />
            <div className="md:hidden">
                <StartFreeLandingButton
                    className="w-full"
                    title={t('startFree.buttonTitle', 'Get Started Now')}
                    onClick={() => scrollTo('#hero-form')}
                />
            </div>
        </SectionLayout>
    );
};

export default Opportunities;
