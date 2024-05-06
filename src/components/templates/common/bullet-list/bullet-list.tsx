'use client';
import { useTranslation } from '@app/i18n/client';
import clsx from 'clsx';
import Markdown from 'markdown-to-jsx';
import { useParams } from 'next/navigation';
import type { BulletListProps } from './types';

const BulletList = ({ items, icon, className, itemClassName }: BulletListProps) => {
    const { lng } = useParams<{lng: string}>();
    const { t } = useTranslation(lng);

    return (
        <ul className={clsx('flex gap-3 flex-col', className)}>
            {items.map((item, index) => (
                <li key={`bullet-item-${item}-${index + 1}`} className={clsx('flex gap-2 items-start xl:text-xl', itemClassName)}>
                    <span>{icon}</span>
                    <span className="font-normal">
                        <Markdown>{t(item.bulletPointText, item.defaultBulletPointText)}</Markdown>
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default BulletList;
