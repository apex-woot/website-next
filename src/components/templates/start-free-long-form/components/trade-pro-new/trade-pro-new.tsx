import { useTranslation } from '@app/i18n/client';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { type FC } from 'react';
import Directions from '~/images/active-easy-direction.png';
import type { TradeProType as TradeProNewProps } from '../card-views';
import { StarsRank } from './components';

const TradeProNew: FC<TradeProNewProps> = ({ classes, name, defaultName, noReviews, stars, img, active }) => {
    const { lng } = useParams<{lng: string}>();
    const { t } = useTranslation(lng);

    return (
        <div className={`bg-white mx-4 rounded-full flex flex-row mb-4 justify-evenly items-center ${classes} ${active && 'scale-110'}`}>
            <div className="pl-5 flex flex-col items-center">
                <span className="width-[75%] xs:w-full text-xs font-extrabold pb-2">{t(name, defaultName)}</span>
                <StarsRank active={active} stars={stars} />
                <span className="text-[#848484] not-italic font-medium text-xs font justify-center self-center">
                    ({noReviews}){stars} {t('startFree.tradeProNew.reviews', 'STAR REVIEWS')}
                </span>
            </div>
            <div>
                <Image className={`hidden md:block ${!active && 'grayscale'}`} src={Directions} alt="directions" />
            </div>
            <Image className="w-14 xs:w-20 rounded-full m-2" src={img} alt="tradeProImg" />
        </div>
    );
};

export default TradeProNew;
