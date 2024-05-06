import { useTranslation } from '@app/i18n';
import Image from 'next/image';
import HelpHeroImg from '~/images/pricing-help.jpg';

const Help = async ({ lng }: { lng: string }) => {
    const { t } = await useTranslation(lng);

    return (
        <div className="relative bg-gray-800">
            <div className="h-56  sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                <Image className="w-full h-full object-cover" src={HelpHeroImg} alt={t('pricing.help.alt', 'Price Image')} />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div className="md:ml-auto md:w-1/2 md:pl-10">
                    <div className="md:pl-10">
                        <h2 className="text-base font-semibold tracking-wider text-gray-300">
                            {t('pricing.help.header', 'BEST-IN-CLASS SUPPORT')}
                        </h2>
                        <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
                            {t('pricing.help.title', 'We’ve got your back')}
                        </p>
                        <p className="mt-3 text-lg text-gray-300">
                            {t(
                                'pricing.help.description',
                                'Call or chat with our team any time. We can answer your questions or walk you through our services. No sales jargon. Just the best, most accurate information, delivered quickly. We’ve got your back so you can focus on doing the hard work of your profession.',
                            )}
                        </p>
                        <div className="mt-8">
                            <div className="inline-flex rounded-md shadow">
                                <a
                                    href="https://www.trades.org/trade-pro/contact"
                                    className={`inline-flex no-underline items-center justify-center px-5 py-3 border
                                    border-transparent text-base font-medium rounded-md text-gray-900
                                    bg-white hover:bg-gray-50`}
                                >
                                    <i>{t('pricing.help.button', 'Talk to a team member')}</i>
                                    {/* Heroicon name: external-link */}
                                    <svg
                                        className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d={`M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1
                                            0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z`}
                                        />
                                        <path
                                            d={`M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2
                                            2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z`}
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help;
