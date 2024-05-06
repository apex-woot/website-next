import { Calender, ViewBoards, ViewList } from '@components/app/common/icon-components/icons';
import type { DataType } from './types';

const data: DataType = {
    pro: {
        price: {
            deleted: '$99',
            setup: '$0',
            perMonth: '$149',
            subFeatures: [
                {
                    subFeatureText: 'pricingData.price.subFeatures.1',
                    defaultSubFeatureText: 'Quick and easy',
                },
                {
                    subFeatureText: 'pricingData.price.subFeatures.2',
                    defaultSubFeatureText: 'Guaranteed return on investment',
                },
                {
                    subFeatureText: 'pricingData.price.subFeatures.3',
                    defaultSubFeatureText: 'No coding knowledge required',
                },
                {
                    subFeatureText: 'pricingData.price.subFeatures.4',
                    defaultSubFeatureText: 'Find new customers',
                },
                {
                    subFeatureText: 'pricingData.price.subFeatures.5',
                    defaultSubFeatureText: 'Build a professional reputation',
                },
                {
                    subFeatureText: 'pricingData.price.subFeatures.6',
                    defaultSubFeatureText: 'Have happy customers',
                },
            ],
            subFeaturesMobile: [
                {
                    subFeatureText: 'pricingData.price.subFeaturesMobile.1',
                    defaultSubFeatureText: 'Website Management',
                },
                {
                    subFeatureText: 'pricingData.price.subFeaturesMobile.2',
                    defaultSubFeatureText: 'Brand Management',
                },
                {
                    subFeatureText: 'pricingData.price.subFeaturesMobile.3',
                    defaultSubFeatureText: 'Reputation management',
                },
                {
                    subFeatureText: 'pricingData.price.subFeaturesMobile.4',
                    defaultSubFeatureText: 'Guaranteed return on investment',
                },
                {
                    subFeatureText: 'pricingData.price.subFeaturesMobile.5',
                    defaultSubFeatureText: 'Quick and easy',
                },
                {
                    subFeatureText: 'pricingData.price.subFeaturesMobile.6',
                    defaultSubFeatureText: 'Build your business',
                },
            ],
        },
        features: [
            {
                title: 'common.websiteManagment',
                defaultTitle: 'Website Management',
                description: 'pricingData.features.websiteDescription',
                defaultDescription:
                    'We’ll create a professional website that builds trust in your work. Easy and quick, your new site will create leads, convert sales and increase your income.',
                icon: <ViewList />,
            },
            {
                title: 'common.brandManagement',
                defaultTitle: 'Brand Management',
                description: 'pricingData.features.brandDescription',
                defaultDescription:
                    'Build a professional presence where your clients are- on social media. Engage future customers with new ideas, beautiful photos and glowing reviews.',
                icon: <ViewBoards />,
            },
            {
                title: 'common.reputationManagement',
                defaultTitle: 'Reputation Management',
                description: 'pricingData.features.reputationDescription',
                defaultDescription:
                    'We manage your reputation by requesting online reviews, highlighting positive customer experiences and help you quickly problem solve when things go wrong.',
                icon: <Calender />,
            },
        ],
    },
    faqs: [
        {
            question: 'pricingData.faqs.question1',
            defaultQuestion: 'Can I change or cancel my plan?',
            answer: 'pricingData.faqs.answer1',
            defaultAnswer:
                'Yes! You can cancel or adjust your plan at any time. Changes take effect at the end of the billing period when the change is made.',
        },
        {
            question: 'pricingData.faqs.question2',
            defaultQuestion: 'Do you offer a guarantee?',
            answer: 'pricingData.faqs.answer2',
            defaultAnswer:
                'Absolutely. We’re so confident that we’ll boost your sales, brand and reputation, that we’ll refund your last three months of service if you’re not seeing results.',
        },
        {
            question: 'pricingData.faqs.question3',
            defaultQuestion: 'How long will it take to get started?',
            answer: 'pricingData.faqs.answer3',
            defaultAnswer:
                'After choosing your plan you’ll go through a quick and easy onboarding with one of our staff. Your website will be up and running just a few hours later. You don’t need any design or computer skills; we’ll handle all of that for you!',
        },
        {
            question: 'pricingData.faqs.question4',
            defaultQuestion: 'Can I make changes to my website or profiles?',
            answer: 'pricingData.faqs.answer4',
            defaultAnswer:
                'We make it easy for you to add photos and make updates yourself, but if you want help, our staff is ready and able to make those changes for you. As long as you’re a trades.org member, your website will be fully functional and employ all of our website tools in a way that works best for your business.',
        },
        {
            question: 'pricingData.faqs.question5',
            defaultQuestion: 'How does a website help me reach more customers?',
            answer: 'pricingData.faqs.answer5',
            defaultAnswer:
                'Your virtual presence is a potential customer’s initial and most powerful impression of your business. Make it easy for homeowners to find and hire you with a website and social profiles that are clear, attractive and offer an easy way to take the next step.',
        },
        {
            question: 'pricingData.faqs.question6',
            defaultQuestion: 'I don’t have a brand. It’s just me. Do I really need these services?',
            answer: 'pricingData.faqs.answer6',
            defaultAnswer:
                'Whether it’s just you and your truck or you have a crew of hundreds, how your customers see you is your brand. No matter your size, we’ll help you build brand recognition and a stellar reputation online and in the real world.',
        },
    ],
    // @ts-ignore
    detailedPlans: {
        features: [
            {
                name: 'pricingData.detailedPlans.features.name1',
                defaultName: 'Business URL',
                description: 'pricingData.detailedPlans.features.description1',
                defaultDescription:
                    'We’ll help you secure the custom URL that makes your company simple to find online. A business .com or .net web address looks professional and is easy to remember.',
            },
            {
                name: 'pricingData.detailedPlans.features.name2',
                defaultName: 'Business phone number',
                description: 'pricingData.detailedPlans.features.description2',
                defaultDescription:
                    'One dedicated phone number for your business that we can forward to your personal phone or you can assign to an employee. We make it easy to identify and prioritize business communication.',
            },
            {
                name: 'pricingData.detailedPlans.features.name3',
                defaultName: 'Multiple templates',
                description: 'pricingData.detailedPlans.features.description3',
                defaultDescription:
                    'A business email address looks professional and makes it easy to differentiate your personal and business messages. You can even turn over this task to an employee.',
            },
            {
                name: 'pricingData.detailedPlans.features.name4',
                defaultName: 'Easy editing tools',
                description: 'pricingData.detailedPlans.features.description4',
                defaultDescription:
                    'Stand out online with any of our easy-to-use website templates. No matter the size of your business, a trades.org template will provide a seamless user experience.',
            },
            {
                name: 'pricingData.detailedPlans.features.name5',
                defaultName: 'Search Engine Optimization',
                description: 'pricingData.detailedPlans.features.description5',
                defaultDescription:
                    'When potential customers search for a service provider, your name will be among their top results when we optimize your website.',
            },
            {
                name: 'pricingData.detailedPlans.features.name6',
                defaultName: 'Web analytics',
                description: 'pricingData.detailedPlans.features.description6',
                defaultDescription:
                    'Comprehensive analytics through Google help you make informed decisions about your website and advertising. Clearly see what works best for your business.',
            },
            {
                name: 'pricingData.detailedPlans.features.name7',
                defaultName: 'About Me and Contact pages',
                description: 'pricingData.detailedPlans.features.description7',
                defaultDescription:
                    'A trades.org All About Me page lets a customer get to know you, your team and your top-quality work. We make it easy for visitors to get in touch and become customers.',
            },
            {
                name: 'pricingData.detailedPlans.features.name8',
                defaultName: 'Project photo galleries ',
                description: 'pricingData.detailedPlans.features.description8',
                defaultDescription:
                    'Engage your next customer with a photo gallery portfolio of your projects. Let high quality photos tell the story of your hard work, dedication and expertise.',
            },
            {
                name: 'pricingData.detailedPlans.features.name9',
                defaultName: 'Searchable FAQs',
                description: 'pricingData.detailedPlans.features.description9',
                defaultDescription:
                    'Add a database of FAQs to your website to answer to your customer’s most pressing concerns. This ever-evolving list will make you the go-to for educational content.',
            },
            {
                name: 'pricingData.detailedPlans.features.name10',
                defaultName: 'Customer reviews',
                description: 'pricingData.detailedPlans.features.description10',
                defaultDescription:
                    'Your past customers are your best advertisers. Let them tell their story about your business work and ethic.',
            },
            {
                name: 'pricingData.detailedPlans.features.name11',
                defaultName: 'Lead forms',
                description: 'pricingData.detailedPlans.features.description11',
                defaultDescription:
                    'Capture your website visitor’s phone number or email address. We’ll add it to your contacts so you never miss another lead.',
            },
            {
                name: 'pricingData.detailedPlans.features.name12',
                defaultName: 'Scheduling',
                description: 'pricingData.detailedPlans.features.description12',
                defaultDescription:
                    'Allow customers to schedule appointments right from your site. Automate the qualification process and close more sales by asking all the right questions.',
            },
            {
                name: 'pricingData.detailedPlans.features.name13',
                defaultName: 'Invoicing',
                description: 'pricingData.detailedPlans.features.description13',
                defaultDescription:
                    'Use our streamlined platform to send email invoices to clients. We’ll remind them when they are past due and sync outstanding payment information with your accounting system.',
            },
            {
                name: 'pricingData.detailedPlans.features.name14',
                defaultName: 'Payment Processing',
                description: 'pricingData.detailedPlans.features.description14',
                defaultDescription:
                    'Accept payment through any method your customers use. Our online payment system can send money through checks, bank transfer, credit car or a digital wallet.',
            },
            {
                name: 'pricingData.detailedPlans.features.name15',
                defaultName: 'Customer financing',
                description: 'pricingData.detailedPlans.features.description15',
                defaultDescription:
                    'Utilize our website financing tool to get loans for your future customers. Let them explore all the possibilities for their next project right on your page.',
            },
            {
                name: 'pricingData.detailedPlans.features.name16',
                defaultName: 'Project price estimation tool',
                description: 'pricingData.detailedPlans.features.description16',
                defaultDescription:
                    'Provide you customers with an estimate of what their project will cost so they can plan accordingly. Show them how you can add special features and expand on their plans in an unique tool that easily adjusts. ',
            },
        ],
        reporting: [
            {
                name: 'pricingData.detailedPlans.reporting.name1',
                defaultName: 'Write and manage VIP social profiles',
                description: 'pricingData.detailedPlans.reporting.description1',
                defaultDescription:
                    'We’ll build and maintain your social profile on Google My Business, Yelp and Facebook. With engaging pictures and informative content, visitors will become buyers.',
            },
            {
                name: 'pricingData.detailedPlans.reporting.name2',
                defaultName: 'Write and manage profiles on trade directories',
                description: 'pricingData.detailedPlans.reporting.description2',
                defaultDescription:
                    'Get a well-designed engaging social profile on industry-specific sites like Houzz and Home Advisor that will impress potential customers with your expertise.',
            },

            {
                name: 'pricingData.detailedPlans.reporting.name3',
                defaultName: 'Write and manage searchable general profiles',
                description: 'pricingData.detailedPlans.reporting.description3',
                defaultDescription:
                    'We create and manage your profiles on any general platform such as Foursquare and Maps. This basic information will help more qualified leads find your business.',
            },
            {
                name: 'pricingData.detailedPlans.reporting.name4',
                defaultName: 'Social search optimization',
                description: 'pricingData.detailedPlans.reporting.description4',
                defaultDescription:
                    'Your custom social profile will be optimized for maximum search results. We keep customers engaged with accurate business information and educational content.',
            },
            {
                name: 'pricingData.detailedPlans.reporting.name5',
                defaultName: 'Algorithm and sales optimization',
                description: 'pricingData.detailedPlans.reporting.description5',
                defaultDescription: 'Implement best practices and keep up with changes for each platform so you show up high in results.',
            },
            {
                name: 'pricingData.detailedPlans.reporting.name6',
                defaultName: 'Centralized publishing',
                description: 'pricingData.detailedPlans.reporting.description6',
                defaultDescription:
                    'Update your information and content in just one system and we’ll make sure it appears across all of your platforms. Save time and ensure all your profiles are up to date.',
            },
            {
                name: 'pricingData.detailedPlans.reporting.name7',
                defaultName: 'In-coming communication center',
                description: 'pricingData.detailedPlans.reporting.description7',
                defaultDescription:
                    'We manage and route in-coming communication on all platforms so you can quickly and efficiently respond for the best customer experience.',
            },
            {
                name: 'pricingData.detailedPlans.reporting.name8',
                defaultName: 'Block sales calls through social channels',
                description: 'pricingData.detailedPlans.reporting.description8',
                defaultDescription:
                    'Your updated profile won’t lead to more spam calls. We’ll block all those robo calls so you feel confident when you pick up the phone. ',
            },
        ],
        support: [
            {
                name: 'pricingData.detailedPlans.support.name1',
                defaultName: 'First touch follow-up',
                description: 'pricingData.detailedPlans.support.description1',
                defaultDescription:
                    'We’ll check in with a prospective customer after your initial contact. The valuable information we collect will help you understand their needs and secure the sale.',
            },
            {
                name: 'pricingData.detailedPlans.support.name2',
                defaultName: 'Job start check-in',
                description: 'pricingData.detailedPlans.support.description2',
                defaultDescription:
                    'We check in with clients after the first day of work to answer questions, get feedback and address concerns. We help you cultivate happy customers from the first day.',
            },
            {
                name: 'pricingData.detailedPlans.support.name3',
                defaultName: 'Wrap up review',
                description: 'pricingData.detailedPlans.support.description3',
                defaultDescription:
                    'We check in with your customers right before your project ends to make sure they are satisfied with the work and don’t have any unmet expectations you are unaware of.',
            },
            {
                name: 'pricingData.detailedPlans.support.name4',
                defaultName: 'Real time actionable feedback',
                description: 'pricingData.detailedPlans.support.description4',
                defaultDescription:
                    'We check in with your customers throughout the project. Understanding their expectations and experiences help you make adjustments that lead to happy customers.',
            },
            {
                name: 'pricingData.detailedPlans.support.name5',
                defaultName: 'Easy integration and accessibility',
                description: 'pricingData.detailedPlans.support.description5',
                defaultDescription:
                    'Seamlessly connect the trades.org reputation management program with your existing CRM or access it through out application or by text message.',
            },
            {
                name: 'pricingData.detailedPlans.support.name6',
                defaultName: 'Reputation building',
                description: 'pricingData.detailedPlans.support.description6',
                defaultDescription:
                    'We contact customers at the end of the project to ask for reviews and referrals. This positive feedback will improve your reputation and drive new business.',
            },
            {
                name: 'pricingData.detailedPlans.support.name7',
                defaultName: 'Reputation protection',
                description: 'pricingData.detailedPlans.support.description7',
                defaultDescription:
                    'We help you deal with unhappy customers by finding a solution to the problem. We help you make it right and secure edited online reviews.',
            },
        ],
        plans: {
            basic: {
                id: 'pro',
                name: 'Pro',
                defaultName: 'Pro',
                price: '$149',
                description: 'pricingData.detailedPlans.pro.description',
                defaultDescription: 'Our best value! Includes website management, brand management and reputation management services',
                buttonText: 'pricingData.detailedPlans.pro.buttonText',
                defaultButtonText: 'GO PRO',
                features: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
                reporting: [true, true, true, true, true, true, true, true],
                support: [true, true, true, true, true, true, true],
            },
            essential: {
                id: 'basic',
                name: 'Basic',
                defaultName: 'Basic',
                price: '$99',
                description: 'pricingData.detailedPlans.basic.description',
                defaultDescription: 'Get the essential services of website management and brand management',
                buttonText: 'pricingData.detailedPlans.basic.buttonText',
                defaultButtonText: 'GET THE BASICS',
                features: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
                reporting: [true, true, true, true, true, true, true, true],
                support: [false, false, false, false, false, false, false],
            },
            premium: {
                id: 'lite',
                name: 'Lite',
                defaultName: 'Lite',
                price: '$49',
                description: 'pricingData.detailedPlans.lite.description',
                defaultDescription: 'Start small with room to grow! Our Lite Plan is just website management. ',
                buttonText: 'pricingData.detailedPlans.lite.buttonText',
                defaultButtonText: 'START LITE',
                features: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
                reporting: [false, false, false, false, false, false, false, false, false],
                support: [false, false, false, false, false, false, false],
            },
        },
    },
};

export default data;
