'use client';
import { useTranslation } from '@app/i18n/client';
import { ArrowDown, ArrowUp } from '@components/app/common/icon-components/icons';
import { useParams } from 'next/navigation';
import React, { type FC, useState } from 'react';
import { data } from '..';

const FAQ: FC = () => {
    const { lng } = useParams<{lng: string}>();
    const [activeFaq, setFaq] = useState<number | null>(null);
    const { t } = useTranslation(lng);
    const { faqs } = data;

    const handleFaqClick = (index: number) => {
        if (index === activeFaq) {
            setFaq(null);
        } else {
            setFaq(() => index);
        }
    };
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900">
                    {t('pricing.faqs.title', 'Frequently Asked Questions about our Pro Plans')}
                </h2>
                <div className="mt-6 pt-10  border-t border-gray-300">
                    <dl className="space-y-10 md:space-y-0 md:grid lg:grid-cols-2 md:gap-x-8 md:gap-y-12">
                        {faqs.map(({ question, defaultQuestion, answer, defaultAnswer }, index) => (
                            <div key={`faqs-${+index}`}>
                                <dt
                                    role="presentation"
                                    onClick={() => {
                                        handleFaqClick(index);
                                    }}
                                    className={`text-lg leading-6 font-medium text-gray-900
                                    flex justify-between items-start`}
                                >
                                    <span>{t(question, defaultQuestion)}</span>
                                    <button type="button" className="border-0 bg-white lg:hidden flex items-start">
                                        {index === activeFaq ? <ArrowUp size={18} /> : <ArrowDown size={18} />}
                                    </button>
                                </dt>
                                <dd className={`mt-2 mx-auto text-base text-gray-500 ${index === activeFaq ? 'block' : 'hidden'} lg:block`}>
                                    {t(answer, defaultAnswer)}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
