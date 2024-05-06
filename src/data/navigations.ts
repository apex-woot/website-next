export const navigationData = {
    headerNavigations: [
        {
            title: 'navigations.home',
            defaultTitle: 'Home',
            path: '',
        },
        {
            title: 'navigations.marketingServices',
            defaultTitle: 'Marketing Services',
            path: '/marketing-services',
        },
        {
            title: 'navigations.operationsSupport',
            defaultTitle: 'Operations Support',
            path: '/operations',
        },
        {
            title: 'navigations.forYouAndYourFamily',
            defaultTitle: 'For You and Your Family',
            path: '/personal',
        },
        {
            title: 'navigations.pricing',
            defaultTitle: 'Pricing',
            path: '/pricing',
        },
        {
            title: 'navigations.contactUs',
            defaultTitle: 'Contact Us',
            path: '/contact',
        },
    ],
    footer: {
        headings: ['For marketing', 'For operations', 'For you and your family'],
        topNavigations: {
            forMarketing: {
                path: 'marketing-services',
                links: [
                    {
                        name: 'Website optimized to produce leads',
                        hash: '#website-management',
                    },
                    {
                        name: 'Social profiles, set up and managed',
                        hash: '#social-management',
                    },
                    {
                        name: 'Phone, chat, and email answering',
                        hash: '#comms-management',
                    },
                    {
                        name: 'Job review and reputation management',
                        hash: '#reputation-management',
                    },
                    {
                        name: 'Logo design, business cards, and more',
                        hash: '#branding',
                    },
                    {
                        name: "'Only pay when you close' leads",
                        hash: '#project-leads',
                    },
                ],
            },
            foroperations: {
                path: 'operations',
                links: [
                    {
                        name: 'Project financing for your customers',
                        hash: '#project-financing',
                    },
                    {
                        name: 'Business insurance by period or project',
                        hash: '#business-insurance',
                    },
                    {
                        name: 'Invoicing, billing, collections, and liens',
                        hash: '#project-billing',
                    },
                    {
                        name: 'Standard contracts for projects and subs',
                        hash: '#business-contracts',
                    },
                    {
                        name: 'Access to network of qualified subs',
                        hash: '#staffing-support',
                    },
                    {
                        name: 'Discounted materials pricing',
                        hash: '#materials-discounts',
                    },
                ],
            },
            forYouandFamily: {
                path: 'personal',
                links: [
                    {
                        name: 'Personal health, dental, and vision',
                        hash: '#personal-insurance',
                    },
                    {
                        name: 'Tax-advantaged retirement programs',
                        hash: '#retirement',
                    },
                    {
                        name: 'Personal and equipment financing',
                        hash: '#business-loans',
                    },
                    {
                        name: 'Credit building and financial support',
                        hash: '#personal-finances',
                    },
                    {
                        name: 'Educational concierge and resources',
                        hash: '#education',
                    },
                    {
                        name: 'Free and discounted partner perks',
                        hash: '#partner-perks',
                    },
                ],
            },
        },
    },
};
