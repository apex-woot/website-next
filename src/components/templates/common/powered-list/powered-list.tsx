'use client';
import { useTranslation } from '@app/i18n/client';
import Image, { StaticImageData } from 'next/image';
import { useParams } from 'next/navigation';
import { type FC } from 'react';
import { twMerge } from 'tailwind-merge';
import Google from '~/images/landing-pages/template-selection/Google.jpg';
import AWS from '~/images/landing-pages/template-selection/awslogo.jpg';
import BBB from '~/images/landing-pages/template-selection/bbb.png';
import Twilio from '~/images/landing-pages/template-selection/twilio.png';
import type { ProviderProps, ProvidersEnum } from './types';

const ProvidersList: Record<ProvidersEnum, StaticImageData> = {
    BBB,
    AWS,
    Twilio,
    Google,
};

const PoweredList: FC<ProviderProps> = ({ provider, itemClassname, labelClassname, listClassname, wrapperClassname }) => {
    const providersMap = provider.map((item) => ProvidersList[item]);
    const { lng } = useParams<{lng: string}>();
    const { t } = useTranslation(lng);

    return (
        <div className={wrapperClassname}>
            <p className={twMerge('font-medium leading-5 mt-4 italic', labelClassname)}>
                {t('templatesCommonComponents.poweredList.poweredBy', 'POWERED BY')}
            </p>

            <ul className={twMerge('flex flex-row gap-4', listClassname)}>
                {providersMap.map((item, index) => {
                    return (
                        <li className={itemClassname} key={`provider-item-${+index}`}>
                            <Image
                                src={item}
                                alt={t('templatesCommonComponents.poweredList.alt', 'Provider Logo')}
                                className="rounded-lg border border-solid border-gray-200 w-20 h-14"
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default PoweredList;
