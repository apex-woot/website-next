// main tools
import React from 'react';

// assets
import { XCircleIcon } from '@heroicons/react/24/outline';

const AlertStatusProps = (color: string) => ({
    'aria-hidden': true,
    className: `h-5 w-5 text-${color}-400`,
});

export const AlertStatus = {
    info: {
        textsStyles: 'text-slate-800',
        containerStyles: 'bg-slate-50',
        icon: <XCircleIcon {...AlertStatusProps('slate')} />,
    },
    success: {
        textsStyles: 'text-green-800',
        containerStyles: 'bg-green-50',
        icon: <XCircleIcon {...AlertStatusProps('green')} />,
    },
    warning: {
        textsStyles: 'text-yellow-800',
        containerStyles: 'bg-yellow-50',
        icon: <XCircleIcon {...AlertStatusProps('yellow')} />,
    },
    error: {
        textsStyles: 'text-red-800',
        containerStyles: 'bg-red-50',
        icon: <XCircleIcon {...AlertStatusProps('red')} />,
    },
};
