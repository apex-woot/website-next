import { useTranslation } from '@app/i18n';
import { LinkButton } from '@components/app/common/buttons';
import { contactUsData } from '@data';
import Link from 'next/link';
import { ContactUsType } from './types';
import { footerData } from './utils';

const Copyright = async ({ lng }: { lng: string }) => {
    const currentYear = new Date().getFullYear();
    const { t } = await useTranslation(lng);

    return (
        <div className="w-full px-10 md:px-5 md:ml-auto">
            <div className="flex flex-wrap justify-center md:justify-between ">
                <div className="flex flex-wrap w-auto md:w-auto items-center h-auto">
                    <span className="hidden md:inline-block text-sm text-gray-400">
                        <div className="hidden md:flex md:gap-1 text-sm text-gray-400 md:justify-between">
                            <span className="font-bold text-gray-500 m-auto">trades.org</span>
                            <span className="m-auto">{` © ${currentYear}.`}</span>
                        </div>
                    </span>
                    <div className="flex w-auto ml-auto">
                        {footerData.footerNavigations.map((item, index: number) => (
                            <LinkButton className="pr-2 md:px-3 no-underline" key={`copyright-navigation-${+index}`}>
                                <Link href={item.path}>{t(item.title, item.defaultTitle)}</Link>
                            </LinkButton>
                        ))}
                    </div>
                </div>
                <div className="flex max-md:items-center w-auto my-0 h-9 md:h-auto max-md:space-x-5">
                    {contactUsData.links.socialNetworks.map((item: ContactUsType, index: number) => (
                        <Link href={item.href} aria-label={item.text} className="w-5 md:w-10" key={`social-networks-${index + 1}`}>
                            {item.iconOutline}
                        </Link>
                    ))}
                </div>
            </div>

            <span className="md:hidden flex justify-center text-xs text-gray-400 max-md:py-4">
                <span className="font-bold text-gray-500">trades.org</span>
                {` © ${currentYear}.`}
            </span>
        </div>
    );
};

export default Copyright;
