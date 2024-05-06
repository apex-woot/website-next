'use client';
import { useTranslation } from '@app/i18n/client';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import logoIcon from '~/images/landing-pages/template-selection/logo/icon.png';
import lettersIcon from '~/images/landing-pages/template-selection/logo/letters.png';
import type { TradesOrgLogoProps } from './types';

const TradesOrgLogo = ({ className }: TradesOrgLogoProps) => {
    const { lng } = useParams<{lng: string}>();
    const { t } = useTranslation(lng);

    return (
        <div className={`flex items-start ${className}`}>
            <Image alt={t('templatesCommonComponents.tradesOrgLogo.circleAlt', 'Circle logo')} src={logoIcon} className="mr-1" />
            <Image alt={t('templatesCommonComponents.tradesOrgLogo.letterAlt', 'Logo Letter')} src={lettersIcon} />
        </div>
    );
};

export default TradesOrgLogo;
