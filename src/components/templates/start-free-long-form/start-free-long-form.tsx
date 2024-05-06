import { useTranslation } from '@app/i18n/client';
import { Footer } from '@components/templates/common/footer';
import { useParams } from 'next/navigation';
import React, { type FC } from 'react';
import { Hero } from './components/hero';
import { Opportunities } from './components/opportunities';
import { TemplateSelection } from './components/template-section';
import { Testimonials } from './components/testimonials';

const StartFreeLongForm: FC = () => {
    const { lng } = useParams<{lng: string}>();
    const { t } = useTranslation(lng);

    return (
        <div className="relative max-w-full">
            <Hero position="TOP" title={t('startFree.titleTop', 'We’ll build and manage your website for just $49*')} />
            <Opportunities />
            <TemplateSelection />
            <Testimonials />
            <Hero position="BOTTOM" title={t('startFree.titleBottom', 'Winning jobs starts with a pro website. Let’s go!')} />
            <div className="pt-6 md:pt-14">
                <Footer />
            </div>
        </div>
    );
};

export default StartFreeLongForm;
