'use client';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import data from '../data';

const Features: FC = () => {
    const { t } = useTranslation();
    const {
        pro: { features },
    } = data;

    return (
        <dl className="mt-12 space-y-10 hidden lg:block">
            {features.map(({ title, defaultTitle, description, defaultDescription, icon }, index) => (
                <div key={`features-${+index}`} className="flex">
                    <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-indigo-500 rounded-md">{icon}</div>
                    <div className="ml-4">
                        <dt className="text-lg leading-6 font-medium text-gray-900">{t(title, defaultTitle)}</dt>
                        <dd className="mt-2 mx-0 text-base text-gray-500">{t(description, defaultDescription)}</dd>
                    </div>
                </div>
            ))}
        </dl>
    );
};
export default Features;
