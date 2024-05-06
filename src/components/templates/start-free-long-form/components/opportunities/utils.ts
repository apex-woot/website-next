import Competator3 from '~/images/contract-3.png';
import Competator4 from '~/images/contract-4.png';
import Competator5 from '~/images/contract-5.png';
import Competator2 from '~/images/david-siglin-UuW4psOb388-unsplash-1.png';
import type { TradeProType } from '../card-views';

export const tradePros: TradeProType[] = [
    {
        name: 'startFree.opportunities.data.speciality',
        defaultName: 'YOUR TRADE SPECIALITY',
        noReviews: 77,
        stars: 5,
        img: Competator2.src,
        classes: 'shadow-md rounded-full',
        active: true,
        showStars: true,
    },
    {
        name: 'startFree.opportunities.data.competitors',
        defaultName: 'YOUR COMPETITORS',
        noReviews: 13,
        stars: 4,
        img: Competator3.src,
        classes: 'opacity-50',
        active: false,
        showStars: true,
    },
    {
        name: 'startFree.opportunities.data.competitors',
        defaultName: 'YOUR COMPETITORS',
        noReviews: 15,
        stars: 3,
        img: Competator4.src,
        classes: 'opacity-30',
        active: false,
    },
    {
        name: 'startFree.opportunities.data.competitors',
        defaultName: 'YOUR COMPETITORS',
        noReviews: 35,
        stars: 4,
        img: Competator5.src,
        classes: 'opacity-20',
        active: false,
    },
];
