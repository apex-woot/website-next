'use client';
import { useTranslation } from '@app/i18n/client';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { type FC } from 'react';
import type { TemplateSelectionGridProps } from './types';

const TemplateSelectionGrid: FC<TemplateSelectionGridProps> = ({ templatesList }) => {
    const { lng } = useParams<{lng: string}>();
    const { t } = useTranslation(lng);

    return (
        <div className="mx-auto lg:scale-125 lg:m-0 md:order-first flex lg:-mb-60 object-cover">
            <div className="mx-auto my-20 md:m-28 transform lg:m-0 grid grid-cols-3 gap-2">
                {templatesList.map((template, index) => (
                    <div key={`template-${index + 1}`}>
                        <Image
                            className={`relative w-[84px] xs:w-[124px] max-w-[125px] rounded-[15%] flex-grow xl:max-w-[185px] ${
                                template.id <= 3 ? 'top-1/2' : template.id >= 7 ? '-top-1/2' : ''
                            }`}
                            src={template.image}
                            alt={`${t('startFree.templateSectionUtils.template', 'Template')}-${template.id}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TemplateSelectionGrid;
