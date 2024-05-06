import useWindowSize from '@hooks/useWindowSize';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import data from '../data';
import FeaturesList from './features-list';

const SubFeatures: FC = () => {
    const { screenWidth } = useWindowSize();
    const { t } = useTranslation();

    const {
        pro: { price },
    } = data;

    const features = screenWidth < 640 ? price.subFeaturesMobile : price.subFeatures;
    const mobile = screenWidth < 1024 ? null : 'pl-9 lg:grid';

    return (
        <ul
            className={`${mobile}
            bg-indigo-800 bg-opacity-50 rounded pl-10 sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:grid-flow-col`}
        >
            {features.map((item, index) => (
                <FeaturesList key={+index} item={t(item.subFeatureText, item.defaultSubFeatureText)} index={index} />
            ))}
        </ul>
    );
};

export default SubFeatures;
