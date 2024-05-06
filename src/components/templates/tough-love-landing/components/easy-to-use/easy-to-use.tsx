import { useTranslation } from '@app/i18n/client';
import { Button } from '@components/templates/common/button';
import { useParams } from 'next/navigation';
import { type FC } from 'react';
import { TradePro } from './components/trade-pro';
import { tradePros } from './data';

const EasyToUse: FC = () => {
    const { lng } = useParams<{lng: string}>();
    const { t } = useTranslation(lng);

    return (
        <section className="flex w-full lg:flex-row flex-col-reverse justify-between max-w-[1440px] mx-auto  pt-8 xl:pt-20 2xl:pt-12">
            <div className="lg:w-1/2 w-full lg:pl-12 lg:pr-9 lg:mt-0 mt-20">
                <div className="px-4 md:px-8 lg:px-2 sm:px-0">
                    {tradePros.map((tradePro, index) => (
                        <TradePro key={`${index + 1}`} {...tradePro} />
                    ))}
                </div>
            </div>
            <div className="lg:w-1/2 w-full lg:pr-20">
                <div className="px-6">
                    <h1 className="text-gray-800 leading-10 font-extrabold mb-8 text-3xl lg:text-4xl">
                        {t('toughLove.easyToUse.title', 'Our easy-to-use platform produces advanced results.')}
                    </h1>
                    <p className="text-base text-gray-800 font-normal leading-6 mb-6 ">
                        {t(
                            'toughLove.easyToUse.paragraph1',
                            'Our platform was built with trade businesses in mind. We realized trade businesses don’t have any business management tools that are truly in line with their goals.',
                        )}
                    </p>
                    <p className="text-base text-gray-800 font-normal leading-6 mb-6 ">
                        {t(
                            'toughLove.easyToUse.paragraph2',
                            'There are plenty of website or social media management services. However, their high subscription fees costs your business a lot of capital and their generic design means you will still spend precious hours managing the subscription. You need a product that is intuitive and designed for your busy and growing business.',
                        )}
                    </p>
                    <p className="text-base text-gray-800 font-normal leading-6 mb-6 ">
                        {t(
                            'toughLove.easyToUse.paragraph3',
                            "The truth is there is a lot of competition in the local trade industry. We realize it's hard to stand out, and we crafted our platform to fill the gaps where most businesses fall short. Take marketing and businesses management tasks off your plate with trades.org tailored services for the construction industry.",
                        )}
                    </p>
                    <div className="w-full lg:w-2/3">
                        <Button
                            onClick={() => {
                                window.location.href = '/free-form';
                            }}
                            type="button"
                            className="btn placeholder:font-normal placeholder:text-sm bg-redLanding hover:bg-redLanding/80 border-none text-lg h-auto cursor-pointer sm:text-lg font-bold w-full py-5 px-4"
                        >
                            {t('common.getStartedButton', 'Get started for free').toUpperCase()}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default EasyToUse;
