import Competitor1 from '~/images/contract-1.png';
import Competitor3 from '~/images/contract-3.png';
import Competitor4 from '~/images/contract-4.png';
import Competitor5 from '~/images/contract-5.png';
import Competitor2 from '~/images/david-siglin-UuW4psOb388-unsplash-1.png';
import type { TradeProsDataType } from './types';

export const tradePros: TradeProsDataType[] = [
    {
        name: 'toughLove.easyToUse.data.competitors',
        defaultName: 'YOUR COMPETITORS',
        noReviews: 15,
        stars: 3,
        img: Competitor1.src,
        classes: 'opacity-[0.35]',
        active: false,
        showStars: true,
    },
    {
        name: 'toughLove.easyToUse.data.speciality',
        defaultName: 'YOUR TRADE SPECIALITY',
        noReviews: 77,
        stars: 5,
        img: Competitor2.src,
        classes: 'shadow-md rounded-full',
        active: true,
        showStars: true,
    },
    {
        name: 'toughLove.easyToUse.data.competitors',
        defaultName: 'YOUR COMPETITORS',
        noReviews: 13,
        stars: 4,
        img: Competitor3.src,
        classes: 'opacity-50',
        active: false,
        showStars: true,
    },
    {
        name: 'toughLove.easyToUse.data.competitors',
        defaultName: 'YOUR COMPETITORS',
        noReviews: 15,
        stars: 3,
        img: Competitor4.src,
        classes: 'opacity-30',
        active: false,
        showStars: true,
    },
    {
        name: 'toughLove.easyToUse.data.competitors',
        defaultName: 'YOUR COMPETITORS',
        noReviews: 35,
        stars: 4,
        img: Competitor5.src,
        classes: 'opacity-[0.15]',
        active: false,
        showStars: true,
    },
];
