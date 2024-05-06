import Feature4 from '~/icons/000-shield.png';
import Feature5 from '~/icons/007-money.png';
import Feature1 from '~/icons/012-user.png';
import Feature3 from '~/icons/031-route.png';
import Feature2 from '~/icons/047-24-hours-support.png';
import Feature6 from '~/icons/048-credit card.png';
import type { Feature } from './types';

export const features: Feature[] = [
    {
        title: 'features.utils.title1',
        defaultTitle: 'Managed website and profiles',
        image: Feature1,
        link: 'marketing-services',
        hash: '#website-management',
    },
    {
        title: 'features.utils.title2',
        defaultTitle: 'Phone and email receptionist',
        image: Feature2,
        link: 'marketing-services',
        hash: '#comms-management',
    },
    {
        title: 'features.utils.title3',
        defaultTitle: 'Access to network of qualified subs',
        image: Feature3,
        link: 'operations',
        hash: '#staffing-support',
    },
    {
        title: 'features.utils.title4',
        defaultTitle: 'Business and personal insurance',
        image: Feature4,
        link: 'personal',
        hash: '#personal-insurance',
    },
    {
        title: 'features.utils.title5',
        defaultTitle: 'Project and personal financing',
        image: Feature5,
        link: 'operations',
        hash: '#project-financing',
    },
    {
        title: 'features.utils.title6',
        defaultTitle: 'Customer invoicing and collections',
        image: Feature6,
        link: 'operations',
        hash: '#project-billing',
    },
];
