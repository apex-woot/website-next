import TimerIcon from '~/icons/003-timer.png';
import MoneyIcon from '~/icons/007-money.png';
import LaptopIcon from '~/icons/030-laptop.png';
import WindowIcon from '~/icons/034-window.png';
import StarIcon from '~/icons/038-star.png';
import BoxesIcon from '~/icons/045-boxes.png';
import CreditCardIcon from '~/icons/048-credit card.png';
import MarketingBgImage from '~/icons/marketing.svg';
import Operations from '~/svg/Operations';
import Personal from '~/svg/Personal';
import GetStartedOperationsBgImage from '~/svg/get-started-operations.svg';
import GetStartedPersonalBgImage from '~/svg/get-started-operations.svg';
import CloudBgImage from '~/svg/house-90CAF9-cloud-bg.svg';

const data = {
    personal: {
        hero: {
            subtitle: 'pagesData.personal.hero.subtitle',
            defaultSubtitle: 'trades.org for you and your family',
            titles: [
                {
                    title: 'pagesData.personal.hero.title1',
                    defaultTitle: 'We help you take care ',
                },
                {
                    title: 'pagesData.personal.hero.title2',
                    defaultTitle: 'of yourself and the',
                },
                {
                    title: 'pagesData.personal.hero.title3',
                    defaultTitle: 'people you love.',
                },
            ],
            ctaText: 'common.getStarted',
            defaultCtaText: 'Get started',
            BgImage: {
                type: 'react',
                img: Personal,
            },
        },
        services: [
            {
                trackingId: 'cta-financial',
                title: 'pagesData.personal.services.title1',
                defaultTitle: 'Financial support',
                subtitle: 'pagesData.personal.services.subtitle1',
                defaultSubtitle: 'We can help you better manage money today and save better for your tomorrow.',
                icon: MoneyIcon,
                features: [
                    {
                        title: 'pagesData.personal.services.feature1.title1',
                        defaultTitle: 'Credit building and help with finances',
                        description: 'pagesData.personal.services.feature1.description1',
                        defaultDescription:
                            'We can help you with opening up financial accounts, building credit, doing your taxes, and more.',
                    },
                    {
                        title: 'pagesData.personal.services.feature1.title2',
                        defaultTitle: 'Personal tool and equipment financing',
                        description: 'pagesData.personal.services.feature1.description2',
                        defaultDescription: 'Want to finance a purchase? We provide rent-to-own and personal loan financing options.',
                    },
                    {
                        title: 'pagesData.personal.services.feature1.title3',
                        defaultTitle: 'Tax-advantaged retirement programs',
                        description: 'pagesData.personal.services.feature1.description3',
                        defaultDescription: "You shouldn't have to work forever. We can help you set aside money and plan for your future.",
                    },
                ],
            },
            {
                trackingId: 'cta-other',
                title: 'pagesData.personal.services.title2',
                defaultTitle: 'Healthcare and more',
                subtitle: 'pagesData.personal.services.subtitle2',
                defaultSubtitle: 'Get health insurance for you and your family, access to learning resources, and other perks.',
                icon: LaptopIcon,
                features: [
                    {
                        title: 'pagesData.personal.services.feature2.title1',
                        defaultTitle: 'Health, dental, and vision insurance',
                        description: 'pagesData.personal.services.feature2.description1',
                        defaultDescription: 'Get medical insurance for yourself and your family to keep your loved ones healthy and safe.',
                    },
                    {
                        title: 'pagesData.personal.services.feature2.title2',
                        defaultTitle: 'Educational concierge and resources',
                        description: 'pagesData.personal.services.feature2.description2',
                        defaultDescription: 'Get support, mentorship, and educational resources to and your families live better lives.',
                    },
                    {
                        title: 'pagesData.personal.services.feature2.title3',
                        defaultTitle: 'Free and discounted partner perks',
                        description: 'pagesData.personal.services.feature2.description3',
                        defaultDescription:
                            "You and your family can take advantage of many free and discounted perks we've negotiated for you.",
                    },
                ],
            },
        ],
        getStarted: {
            BgImage: { type: 'svg', img: GetStartedPersonalBgImage },
            title: 'pagesData.personal.getStarted.title',
            defaultTitle: 'Get set up for success. Do it for your family, and your future.',
            subtitle: 'pagesData.personal.getStarted.subtitle',
            defaultSubtitle: "It's free to get started. Join today.",
            ctaText: 'common.getStarted',
            defaultCtaText: 'Get started',
        },
    },
    operations: {
        hero: {
            subtitle: 'pagesData.operations.hero.subtitle',
            defaultSubtitle: 'trades.org operations',
            titles: [
                {
                    title: 'pagesData.operations.hero.title1',
                    defaultTitle: 'Free up your time,',
                },
                {
                    title: 'pagesData.operations.hero.title2',
                    defaultTitle: 'make more money, and',
                },
                {
                    title: 'pagesData.operations.hero.title3',
                    defaultTitle: 'delight your customers.',
                },
            ],
            ctaText: 'common.getStarted',
            defaultCtaText: 'Get started',
            BgImage: { type: 'react', img: Operations },
        },
        services: [
            {
                trackingId: 'cta-free-time',
                title: 'pagesData.operations.services.title1',
                defaultTitle: 'Free your time',
                subtitle: 'pagesData.operations.services.subtitle1',
                defaultSubtitle:
                    "We'll handle the most frustrating and time-consuming tasks so you can focus on making your customers happy.",
                icon: TimerIcon,
                features: [
                    {
                        title: 'pagesData.operations.services.feature1.title1',
                        defaultTitle: 'Concierge support and our mentorship network',
                        description: 'pagesData.operations.services.feature1.description1',
                        defaultDescription:
                            'Have a question or need help with something specific? Our network of experts and mentors want to help.',
                    },
                    {
                        title: 'pagesData.operations.services.feature1.title2',
                        defaultTitle: 'Business insurance by period or project',
                        description: 'pagesData.operations.services.feature1.description2',
                        defaultDescription:
                            'Easily get affordable business and project insurance on a per project, monthly, quarterly, or yearly basis.',
                    },
                    {
                        title: 'pagesData.operations.services.feature1.title3',
                        defaultTitle: 'Standard contracts for projects and subs',
                        description: 'pagesData.operations.services.feature1.description3',
                        defaultDescription:
                            'Our standard contracts protect your business and your customers, and ensure everyone is on the same page.',
                    },
                    {
                        title: 'pagesData.operations.services.feature1.title4',
                        defaultTitle: 'Access to network of qualified subs',
                        description: 'pagesData.operations.services.feature1.description4',
                        defaultDescription:
                            "Finding a good crew when you're in a pinch is hard. Access or national network to find and hire the best people.",
                    },
                ],
            },
            {
                trackingId: 'cta-earn-more',
                title: 'pagesData.operations.services.title2',
                defaultTitle: 'Make more money',
                subtitle: 'pagesData.operations.services.subtitle2',
                defaultSubtitle: 'Increase your project size, capture a higher margin, and get paid faster with our tools and services.',
                icon: CreditCardIcon,
                features: [
                    {
                        title: 'pagesData.operations.services.feature2.title1',
                        defaultTitle: 'Project financing for your customers',
                        description: 'pagesData.operations.services.feature2.description1',
                        defaultDescription:
                            'Your customers can quickly and easily apply for financing directly from trades.org or from your website',
                    },
                    {
                        title: 'pagesData.operations.services.feature2.title2',
                        defaultTitle: 'Invoicing, billing, collections, and liens',
                        description: 'pagesData.operations.services.feature2.description2',
                        defaultDescription:
                            'Get paid more quickly and with fewer issues. Accept credit card and eCheck from your website and on the go.',
                    },
                    {
                        title: 'pagesData.operations.services.feature2.title3',
                        defaultTitle: 'Discounted materials pricing',
                        description: 'pagesData.operations.services.feature2.description3',
                        defaultDescription: 'Access lower prices and earn commissions when you buy materials from our network of partners.',
                    },
                    {
                        title: 'pagesData.operations.services.feature2.title4',
                        defaultTitle: 'Appointment setting services',
                        description: 'pagesData.operations.services.feature2.description4',
                        defaultDescription:
                            "We'll handle your sales inquiries quickly and professionally, qualifying leads and scheduling your on-sites.",
                    },
                ],
            },
        ],
        getStarted: {
            BgImage: { type: 'svg', img: GetStartedOperationsBgImage },
            title: 'pagesData.operations.getStarted.title',
            defaultTitle: "You'll get more done with trades.org on your team.",
            subtitle: 'pagesData.operations.getStarted.subtitle',
            defaultSubtitle: 'Become a member for free.',
            ctaText: 'common.getStarted',
            defaultCtaText: 'Get started',
        },
    },
    marketing: {
        hero: {
            subtitle: 'pagesData.marketing.hero.subtitle',
            defaultSubtitle: 'trades.org marketing',
            titles: [
                {
                    title: 'pagesData.marketing.hero.title1',
                    defaultTitle: 'Build a trusted brand,',
                },
                {
                    title: 'pagesData.marketing.hero.title2',
                    defaultTitle: 'win more jobs, and',
                },
                {
                    title: 'pagesData.marketing.hero.title3',
                    defaultTitle: 'grow your business.',
                },
            ],
            ctaText: 'common.getStarted',
            defaultCtaText: 'Get started',
            BgImage: { type: 'svg', img: MarketingBgImage },
        },
        services: [
            {
                trackingId: 'cta-build-brand',
                title: 'pagesData.marketing.services.title1',
                defaultTitle: 'Build your brand',
                subtitle: 'pagesData.marketing.services.subtitle1',
                defaultSubtitle: 'A clean, professional, and consistent brand will make you easy to identify and remember.',
                icon: WindowIcon,
                features: [
                    {
                        title: 'pagesData.marketing.services.feature1.title1',
                        defaultTitle: 'Logo design and branding services',
                        description: 'pagesData.marketing.services.feature1.description1',
                        defaultDescription:
                            'Your brand shows what you stand for. Get help choosing a business name or designing the perfect logo.',
                    },
                    {
                        title: 'pagesData.marketing.services.feature1.title2',
                        defaultTitle: 'Branded shirts, hats, bags, and other clothing',
                        description: 'pagesData.marketing.services.feature1.description2',
                        defaultDescription:
                            'With branded clothing you and your team will come across as professional, trustworthy, and put-together.',
                    },
                    {
                        title: 'pagesData.marketing.services.feature1.title3',
                        defaultTitle: 'Business cards, car decals, yard signs, and more',
                        description: 'pagesData.marketing.services.feature1.description3',
                        defaultDescription: 'We have hundreds of marketing items in our catalogue that you can use to grow your business.',
                    },
                    {
                        title: 'pagesData.marketing.services.feature1.title4',
                        defaultTitle: 'Dedicated work phone numbers',
                        description: 'pagesData.marketing.services.feature1.description4',
                        defaultDescription:
                            'A business number is necessary for growth: easily screen unwanted calls or have someone else answer the phone for you.',
                    },
                ],
            },
            {
                trackingId: 'cta-win-jobs',
                title: 'pagesData.marketing.services.title2',
                defaultTitle: 'Win more jobs',
                subtitle: 'pagesData.marketing.services.subtitle2',
                defaultSubtitle: "Customers are researching you online. We'll make sure you make a good impression.",
                icon: StarIcon,
                features: [
                    {
                        title: 'pagesData.marketing.services.feature2.title1',
                        defaultTitle: 'Website optimized for selling',
                        description: 'pagesData.marketing.services.feature2.description1',
                        defaultDescription:
                            'We’ll set up and manage your professionally designed website so that customers can easily find, trust, and hire you.',
                    },
                    {
                        title: 'pagesData.marketing.services.feature2.title2',
                        defaultTitle: 'Business profile across social and directories',
                        description: 'pagesData.marketing.services.feature2.description2',
                        defaultDescription:
                            "We'll set up and manage your listings across Yelp, Facebook, Houzz, and more to drive new business.",
                    },
                    {
                        title: 'pagesData.marketing.services.feature2.title3',
                        defaultTitle: 'Job review and reputation management',
                        description: 'pagesData.marketing.services.feature2.description3',
                        defaultDescription:
                            "We'll request reviews from happy customers across your profiles, and quickly handle complaints when they come up.",
                    },
                    {
                        title: 'pagesData.marketing.services.feature2.title4',
                        defaultTitle: 'Hand-written thank you cards',
                        description: 'pagesData.marketing.services.feature2.description4',
                        defaultDescription:
                            'Increase your win and referral rates by having us send hand-written cards to your leads and customers.',
                    },
                ],
            },
            {
                trackingId: 'cta-grow-business',
                title: 'pagesData.marketing.services.title3',
                defaultTitle: 'Grow your business',
                subtitle: 'pagesData.marketing.services.subtitle3',
                defaultSubtitle: 'Focus on delivering excellent service, and let us handle everything else.',
                icon: BoxesIcon,
                features: [
                    {
                        title: 'pagesData.marketing.services.feature3.title1',
                        defaultTitle: "'Only pay if you win' job opportunities",
                        description: 'pagesData.marketing.services.feature3.description1',
                        defaultDescription:
                            "ay-per-lead is a waste of money. We'll send you free opportunities, and only take a commission if you win.",
                    },
                    {
                        title: 'pagesData.marketing.services.feature3.title2',
                        defaultTitle: 'Phone, text, and email handling services',
                        description: 'pagesData.marketing.services.feature3.description2',
                        defaultDescription:
                            "We'll handle your sales communications quickly and professionally, delighting leads and saving you time.",
                    },
                    {
                        title: 'pagesData.marketing.services.feature3.title3',
                        defaultTitle: 'Outbound lead-servicing sales team',
                        description: 'pagesData.marketing.services.feature3.description3',
                        defaultDescription:
                            'Getting leads from Home Depot, HomeAdvisor, etc.? Our team will qualify and convert those into appointments.',
                    },
                    {
                        title: 'pagesData.marketing.services.feature3.title4',
                        defaultTitle: 'Learn from the competition',
                        description: 'pagesData.marketing.services.feature3.description4',
                        defaultDescription:
                            'We provide competitive intelligence, including other bids your leads have received, so you can learn and improve.',
                    },
                ],
            },
        ],
        getStarted: {
            BgImage: { type: 'svg', img: CloudBgImage },
            title: 'pagesData.marketing.getStarted.title',
            defaultTitle: 'Worry less and earn more with trades.org on your team.',
            subtitle: 'pagesData.marketing.getStarted.subtitle',
            defaultSubtitle: 'Prices start at just $49/month',
            ctaText: 'common.getStarted',
            defaultCtaText: 'Get started',
        },
    },
};

export default data;
