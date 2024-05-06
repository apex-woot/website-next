import React, { type FC } from 'react';
import { TradeProNew } from '../trade-pro-new';
import type { CardViewsProps } from './types';

const CardViews: FC<CardViewsProps> = ({ tradePros }) => (
    <div className="flex flex-row">
        <div className="">
            {tradePros.map((tradePro, index) => (
                <TradeProNew key={`trades-pro-${index + 1}`} {...tradePro} />
            ))}
        </div>
    </div>
);

export default CardViews;
