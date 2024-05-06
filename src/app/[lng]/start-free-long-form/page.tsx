import { useTranslation } from '@app/i18n';
import { Hero } from '@components/templates/start-free-long-form/components/hero';
import { Opportunities } from '@components/templates/start-free-long-form/components/opportunities';
import { TemplateSelection } from '@components/templates/start-free-long-form/components/template-section';
import { Testimonials } from '@components/templates/start-free-long-form/components/testimonials';
import React from 'react';

const StartFreeLongForm = async ({ params: { lng } }: { params: { lng: string } }) => {
    const { t } = await useTranslation(lng);

    return (
        <div className="relative max-w-full">
            <Hero position="TOP" title={t('startFree.titleTop', 'We’ll build and manage your website for just $49*')} />
            <Opportunities />
            <TemplateSelection />
            <Testimonials />
            <Hero position="BOTTOM" title={t('startFree.titleBottom', 'Winning jobs starts with a pro website. Let’s go!')} />
        </div>
    );
};

export default StartFreeLongForm;
