import { useTranslation } from '@app/i18n';
import Link from 'next/link';
import type { LinkType } from './types';
import { footerData } from './utils';

const Footer = async ({ lng }: { lng: string }) => {
    const { headings, topNavigations } = footerData;
    const { t } = await useTranslation(lng);
    // const session = await getSession();
    // console.log(session);

    return (
        <div role="contentinfo" className="footer w-full mx-auto max-w-screen-xl py-14 px-10 md:px-5">
            {Object.values(topNavigations).map((navigation, i) => (
                <div key={navigation.path}>
                    <span className="footer-title opacity-100 text-sm lg:text-lg font-normal normal-case">
                        {t(headings[i].headingText, headings[i].defaultHeadingText)}
                    </span>
                    {navigation.links.map((item: LinkType, index: number) => (
                        <Link
                            className="py-0.5 link text-sky font-normal no-underline hover:opacity-50"
                            key={`footer-navigations-${+index}`}
                            data-tracking-id={item.hash}
                            data-tracking-event="Product clicked"
                            href={`${navigation.path}${item.hash}`}
                        >
                            <p>{t(item.name, item.defaultName)}</p>
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Footer;
