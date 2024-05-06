import { useTranslation } from '@app/i18n';
import { contactUsData } from '@data/index';
import Link from 'next/link';

export default async function ContactSection({ lng }: { lng: string }) {
    const { t } = await useTranslation(lng);
    const links = [...contactUsData.links.contact, ...contactUsData.links.socialNetworks];

    return (
        <div className="max-w-4xl mx-auto flex py-8 md:py-12 px-5">
            <div className="w-full md:w-1/2">
                <p className="my-4">{t('contact.title', 'We would love to connect')}</p>
                <ul className="flex flex-col p-0 my-4">
                    {links.map((item, index) => (
                        <li key={`links-${index + 1}`} className="flex items-center my-2 cursor-pointer">
                            <span className="mr-5">{item.icon}</span>
                            <Link
                                href={item.href}
                                rel="noreferrer"
                                target={item.isBlank ? '_blank' : ''}
                                className="no-underline text-primary "
                            >
                                {t(item.text, item.defaultText)}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
