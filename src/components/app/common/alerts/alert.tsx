// main tools
import React, { type FC } from 'react';

// assets
import type { AlertProps } from 'react-daisyui';

// utils
import { AlertStatus } from './utils';

const Alert: FC<AlertProps> = ({ status = 'error', children }) => (
    <div className={`rounded-md p-4 ${AlertStatus[status].containerStyles}`}>
        <div className="flex justify-center">
            <div className="flex-shrink-0">{AlertStatus[status].icon}</div>
            <div className="ml-3">
                <h3 className={`text-sm font-medium ${AlertStatus[status].textsStyles}`}>{children}</h3>
            </div>
        </div>
    </div>
);

export default Alert;
