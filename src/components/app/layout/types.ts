import { type ReactNode } from 'react';

export interface LayoutProps {
    children: ReactNode;
    showFooter: boolean;
    showCopyright: boolean;
}
