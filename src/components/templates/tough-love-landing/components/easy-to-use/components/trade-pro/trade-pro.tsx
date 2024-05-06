import { useTranslation } from '@app/i18n/client';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { type FC } from 'react';
import { twMerge } from 'tailwind-merge';
import ActiveWebsiteDirection from '~/images/active-easy-direction.png';
import Website from '~/images/website-direction.png';
import { StarsRank } from '../stars-rank';
import type { TradeProProps } from './types';

const TradePro: FC<TradeProProps> = ({ classes, name, defaultName, noReviews, stars, img, active }) => {
    const { lng } = useParams<{lng: string}>();
    const { t } = useTranslation(lng);

    return (
        <div
            className={twMerge(
                'flex bg-white rounded-full justify-between ',
                classes,
                active ? 'lg:scale-110 shadow-lg mt-5 mb-4 px-4' : 'mt-3 max-lg:px-6',
            )}
        >
            <div className="lg:p-4">
                <p className={twMerge('text-sm mb-0 text-black', active ? 'font-extrabold' : 'font-normal text-xs text-[#7d7d7d]')}>
                    {t(name, defaultName)}
                </p>
                <div className="flex">
                    <StarsRank active={active} stars={stars} />
                </div>
                <p className="text-xs">
                    {`(${noReviews})`}
                    {stars} {t('toughLove.tradePro.reviews', 'STAR REVIEWS')}
                </p>
            </div>
            <div className="flex justify-between items-center my-2">
                <div className="md:block hidden">
                    <Image
                        className="w-full"
                        src={active ? ActiveWebsiteDirection : Website}
                        alt={t('toughLove.tradePro.alt1', 'Directions Image')}
                    />
                </div>
                <div className="max-w-[100px] rounded-full w-full">
                    <Image className="w-full rounded-full" src={img} alt={t('toughLove.tradePro.alt2', 'Trade Pro Image')} />
                </div>
            </div>
        </div>
    );
};

export default TradePro;
