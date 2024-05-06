'use client';
import React, { type FC } from 'react';
import { Tooltip } from 'react-daisyui';
import type { TooltipProps } from './types';

const PlansTooltip: FC<TooltipProps> = ({ message, colSpan, children }) => (
    <th className="bg-gray-50 py-3 px-6 text-sm font-bold text-gray-900 text-left" colSpan={colSpan || 0} scope="colgroup">
        <Tooltip message={message} className="cursor-pointer">
            {children}
        </Tooltip>
    </th>
);

export default PlansTooltip;
