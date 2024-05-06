import { useTranslation } from '@app/i18n';
import { FeatureLink } from './components';
import { features } from './utils';

const Features = async ({ lng }: { lng: string }) => {
    const { t } = await useTranslation(lng);

    return (
        <div className="bg-lightGrey pt-12 px-5 md:px-0">
            <div className="max-w-6xl mx-auto">
                <div className="w-11/12 md:w-5/12 mx-auto">
                    <h2 className="text-center leading-tight">{t('features.title', "Running a company is hard. We're here to help.")}</h2>
                    <p className="text-center text-primary my-4">{t('features.subtitle', 'trades.org has your back')}</p>
                </div>
                <div className="w-full lg:w-4/5 grid gap-4 grid-cols-3 md:grid-cols-6 mt-16 mx-auto">
                    {features.map((feature, index) => (
                        <FeatureLink key={`feature-${+index}`} {...feature} />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Features;
