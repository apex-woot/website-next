import type { ReactNode } from 'react';

type BulletPointType = {
    bulletPointText: string;
    defaultBulletPointText: string;
};
export interface BulletListProps {
    className?: string;
    itemClassName?: string;
    items: BulletPointType[];
    icon?: ReactNode;
}
