import type { RefObject } from 'react';

export interface SidebarProps {
    visible: boolean;
    sidebarRef?: RefObject<HTMLDivElement>;
}
