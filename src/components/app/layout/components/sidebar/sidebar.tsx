'use client';
import { useTranslation } from '@app/i18n/client';
import { navigationData } from '@data/navigations';
import { useParams } from 'next/navigation';
import { type FC } from 'react';
import { Menu } from 'react-daisyui';
import type { SidebarProps } from './types';

const Sidebar: FC<SidebarProps> = ({ sidebarRef, visible }) => {
    const { lng } = useParams<{lng: string}>();
    const { t } = useTranslation(lng);

    if (visible) {
        return (
            <div ref={sidebarRef} className="fixed w-2/3 md:w-1/3 lg:w-1/5 shadow-md z-40 top-0 pt-16 left-0 bg-white h-screen">
                <Menu>
                    {navigationData.headerNavigations.map(({ title, defaultTitle, path }, index) => (
                        <Menu.Item key={`sidebar-${+index}`}>
                            <a href={path.length ? `/trade-pro${path}` : '/'} className="no-underline text-sm">
                                {t(title, defaultTitle)}
                            </a>
                        </Menu.Item>
                    ))}
                </Menu>
            </div>
        );
    }
    return null;
};

export default Sidebar;
