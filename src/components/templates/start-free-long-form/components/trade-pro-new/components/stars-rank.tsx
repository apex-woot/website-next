import React, { type FC } from 'react';
import Star from './start';
import type { StarsRankProps } from './types';
import { mapAmountToStarsArray } from './utils';

const StarsRank: FC<StarsRankProps> = ({ active, stars: starsAmount }) => {
    const starColorsArray = mapAmountToStarsArray(starsAmount, active);
    return (
        <div className="flex items-start">
            {starColorsArray.map((starColorHash, index) => (
                <Star className="w-[25px] h-[22px] xs:w-[30px] xs:h-[27px]" key={`start-${index}`} starColor={starColorHash} />
            ))}
        </div>
    );
};

export default StarsRank;
