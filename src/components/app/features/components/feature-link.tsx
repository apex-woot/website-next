'use client';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import type { Feature } from '../types';

const FeatureLink: FC<Feature> = ({ hash, image, link, title, defaultTitle }) => {
    const { lng } = useParams<{lng: string}>();
    const { t } = useTranslation(lng);

    return (
        <a
            data-tracking-id={hash}
            href={`/trade-pro/${link}${hash}`}
            data-tracking-event="Product clicked"
            className="no-underline text-black hover:text-primary transition-colors duration-150 link"
            onClick={() => {
                window.scrollTo(0, 0);
            }}
        >
            <div className="flex flex-col items-center">
                <Image alt="feature_icon" className="max-w-[50px]" src={image} />
                <p className="text-center text-[12.5px] md:text-xs my-3 font-normal">{t(title, defaultTitle)}</p>
            </div>
        </a>
    );
};
export default FeatureLink;
