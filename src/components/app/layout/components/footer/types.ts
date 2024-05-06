import type { ReactNode } from 'react';

export type LinkType = {
    name: string;
    defaultName: string;
    hash: string;
};

export type ContactUsType = {
    text: string;
    href: string;
    icon: ReactNode;
    isBlank: boolean;
    iconOutline?: ReactNode;
};
