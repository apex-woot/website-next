import { useTranslation } from '@app/i18n/client';
import { Button } from '@components/app/common/buttons';
import { getUser } from '@lib/auth';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState, type FC } from 'react';
import type { Service } from '../types';

const ServiceCard: FC<Service> = ({ icon, title, defaultTitle, subtitle, defaultSubtitle, features, trackingId }) => {
    const { lng } = useParams<{ lng: string }>();
    const { t } = useTranslation(lng);
    const [authUrl, setAuthUrl] = useState<string>('/trade-pro/login');

    useEffect(() => {
        (async () => {
            const user = await getUser();
            const url = user ? process.env.NEXT_PUBLIC_AUTH0_LOGIN_REDIRECT_URL : '/trade-pro/login';

            setAuthUrl(url);
        })();
    }, []);

    return (
        <div className="mx-auto px-5  bg-white relative pt-5 pb-24 card">
            <div className="flex items-center">
                <Image alt={t('services.alt', 'service_icon')} className="max-w-[35px] md:max-w-[55px]" src={icon} />
                <h3 className="mx-4 text-2xl font-bold">{t(title, defaultTitle)}</h3>
            </div>
            <p className="leading-5 my-4 text-xs md:text-base">{t(subtitle, defaultSubtitle)}</p>
            <div className="flex flex-col items-center justify-between">
                <div className="my-4">
                    {features.map(({ title: titleFeature, defaultTitle: defaultTitleFeature, description, defaultDescription }, index) => (
                        <React.Fragment key={`${titleFeature}-${+index}`}>
                            <div className="mt-5 font-bold">{t(titleFeature, defaultTitleFeature)}</div>
                            <div className="my-1 leading-4 mx-0 text-xs">{t(description, defaultDescription)}</div>
                        </React.Fragment>
                    ))}
                </div>
                <div className="my-8 w-full max-w-[10rem] mx-auto flex justify-center absolute bottom-0">
                    <Button href={authUrl} dataTrackingEvent="Learn More" dataTrackingId={trackingId}>
                        {t('services.learnMore', 'Learn More')}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
