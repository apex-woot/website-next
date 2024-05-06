import React from 'react';
import type { ItemBulletProps } from '../types';

export default async function ItemBullet({ index, bullet }: ItemBulletProps) {
    return (
        <li className="flex py-2 items-center">
            <span
                className={`mr-3 min-w-[40px] min-h-[40px] flex items-center justify-center
                    bg-primary text-white rounded-full`}
            >
                {index + 1}
            </span>
            <p>{bullet}</p>
        </li>
    );
}
