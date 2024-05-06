import { useTranslation } from '@app/i18n/client';
import { useParams } from 'next/navigation';
import { type FC } from 'react';
import { Link } from 'react-daisyui';

const Footer: FC = () => {
    const { lng } = useParams<{lng: string}>();
    const { t } = useTranslation(lng);

    return (
        <footer className="w-full bg-gray-100 flex justify-center footer">
            <div className="w-11/12 flex flex-col md:flex-row md:justify-between items-center py-6">
                <div className="text-sm mb-10 md:mb-0">
                    <span className="font-bold md:font-medium text-gray-700">trades.org</span>© {new Date().getFullYear()}
                </div>
                <div className="flex flex-col items-center md:flex-row md:items-baseline space-y-10 md:space-y-0 md:space-x-10 font-medium">
                    <Link href={process.env.PUBLIC_AUTH0_LOGIN_REDIRECT_URL} className="hover:no-underline text-[#4da2dc]">
                        {t('common.dashboard', 'Dashboard')}
                    </Link>
                    <Link href="https://learn.trades.org/" className="hover:no-underline text-[#4da2dc]">
                        {t('templatesCommonComponents.footer.resource', 'Resource')}
                    </Link>
                    <Link href="mailto:support@trades.org" className="hover:no-underline text-[#4da2dc]">
                        {t('templatesCommonComponents.footer.getHelp', 'Get Help')}
                    </Link>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
