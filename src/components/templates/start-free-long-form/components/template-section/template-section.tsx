'use client';
import { useTranslation } from '@app/i18n/client';
import { scrollTo } from '@components/app/common/scroll';
import { useParams } from 'next/navigation';
import React, { type FC } from 'react';
import { SectionLayout } from '../common/section-layout';
import { StartFreeLandingButton } from '../common/start-free-landing-button';
import { StyledTextSection } from '../common/styled-text-section';
import { TextLayout } from '../common/text-layout';
import { TemplateSelectionGrid } from './components';
import { buttonTitle, defaultButtonTitle, templates, textData } from './utils';

const TemplateSelection: FC = () => {
    const { lng } = useParams<{lng: string}>();
    const { t } = useTranslation(lng);
    return (
        <SectionLayout className="bg-[#515c6c] items-center pt-12 md:py-30 lg:pt-32 lg:pb-56 overflow-hidden">
            <TextLayout className="lg:ml-10" buttonTitle={t(buttonTitle, defaultButtonTitle)}>
                <StyledTextSection
                    headerText={t(textData.head, textData.defaultHead)}
                    bodyText={t(textData.body, textData.defaultBody)}
                    paragraphExtraStyles="font-extralight"
                />
            </TextLayout>
            <TemplateSelectionGrid templatesList={templates} />
            <div className="lg:ml-10 md:hidden">
                <StartFreeLandingButton
                    className="w-full"
                    title={t(buttonTitle, defaultButtonTitle)}
                    onClick={() => scrollTo('#hero-form')}
                />
            </div>
        </SectionLayout>
    );
};

export default TemplateSelection;
