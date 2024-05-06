'use client';
import { switchLanguageUrl, useTranslation } from '@app/i18n/client';
import ModalButton from '@components/app/common/buttons/components/modal-button';
import NavbarButton from '@components/app/common/buttons/components/navbar-button';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import { Bars3Icon, GlobeAltIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { getAuth0AccessToken, getUser, logout } from '@lib/auth';
import { getStripeSubscriptions } from '@lib/stripe';
import { useStore } from '@nanostores/react';
import { setIsPaid, setLoading, setUser, store } from '@store/user-store';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type FC, useEffect, useRef, useState } from 'react';
import { Avatar, Dropdown, Navbar } from 'react-daisyui';
import NavbarImg from '~/images/logo-default-500x120.png';
import { Sidebar } from '../sidebar';
import ContactLinks from './contact-links';

const locales = {
    locales: [
        {
            label: 'navbar.locales.en',
            code: 'en',
            defaultName: 'English',
        },
        {
            label: 'navbar.locales.es',
            code: 'es',
            defaultName: 'Spanish',
        },
    ],
};

const NavbarComponent: FC<{ lng: string }> = ({ lng }) => {
    const [visible, setVisible] = useState<boolean>(false);
    const { t } = useTranslation(lng);

    const path = usePathname();
    const $store = useStore(store);

    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                setVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        (async () => {
            const authUser = await getUser();
            if (authUser) {
                setUser(authUser);
            }
            const accessToken = await getAuth0AccessToken();

            if (accessToken) {
                const stripeResponse = await getStripeSubscriptions(accessToken);

                if (stripeResponse.active) {
                    setIsPaid(true);
                } else {
                    setIsPaid(false);
                }
            }

            setLoading(false);
        })();
    }, []);

    return (
        <>
            <Navbar className="sticky z-50 top-0 bg-white">
                <Navbar.Start>
                    <NavbarButton
                        icon={!visible ? <Bars3Icon className="w-5 h-5 text-gray-400" /> : <XMarkIcon className="w-5 h-5 text-gray-400" />}
                        onClick={() => {
                            setVisible(!visible);
                        }}
                    />
                    <Link href="/">
                        <Image alt="trades.org logo" className="w-24" src={NavbarImg} />
                    </Link>
                </Navbar.Start>
                <Navbar.End>
                    <Dropdown>
                        <Dropdown.Toggle button={false}>
                            <NavbarButton icon={<GlobeAltIcon className="w-5 h-5 text-gray-400" />} />
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="right-0 text-primary text-xs w-auto p-4 shadow bg-white">
                            <div className="flex-col w-56 md:w-72 space-y-2">
                                <p className="text-gray-400">{t('navbar.chooseLanguage', 'Choose your language')}</p>
                                {locales.locales.map((locale, index) => (
                                    <Dropdown.Item
                                        key={+index}
                                        href={switchLanguageUrl(path, locale.code)}
                                        aria-hidden="true"
                                        className={locale.code === lng ? 'bg-gray-200' : 'no-underline text-sm'}
                                    >
                                        {t(locale.label, locale.defaultName)}
                                    </Dropdown.Item>
                                ))}
                            </div>
                        </Dropdown.Menu>
                    </Dropdown>
                    <ContactLinks />
                    <Dropdown>
                        <Dropdown.Toggle button={false}>
                            {!$store.user?.picture ? (
                                <NavbarButton icon={<EllipsisVerticalIcon className="w-5 h-5 text-gray-400" />} />
                            ) : (
                                <NavbarButton className="ml-2">
                                    <Avatar size="xs" shape="circle" src={$store.user?.picture} />
                                </NavbarButton>
                            )}
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="right-0 text-primary text-xs w-auto p-4 shadow bg-white">
                            {!$store.user ? (
                                <div className="flex-col w-56 md:w-72 space-y-2">
                                    <p className="text-gray-400">{t('navbar.text', 'We support trade pros and their customers.')}</p>
                                    <div className="flex space-x-4">
                                        <ModalButton href="/trade-pro/login" dataTrackingEvent="Get Started" dataTrackingId="cta-nav">
                                            {t('navbar.signIn', 'Sign in')}
                                        </ModalButton>
                                        <ModalButton href="/trade-pro/login" dataTrackingEvent="Get Started" dataTrackingId="cta-nav">
                                            {t('navbar.join', 'Join for Free')}
                                        </ModalButton>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex w-48 justify-between">
                                    <ModalButton href={'/trade-pro/login'}>{t('common.dashboard', 'Dashboard')}</ModalButton>
                                    <ModalButton onClick={logout}>{t('navbar.signOut', 'Sign out')}</ModalButton>
                                </div>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.End>
            </Navbar>
            <Sidebar sidebarRef={sidebarRef} visible={visible} />
        </>
    );
};

export default NavbarComponent;
