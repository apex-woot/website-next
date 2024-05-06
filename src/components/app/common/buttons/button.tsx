import { type FC } from 'react';
import { twMerge } from 'tailwind-merge';
import type { ButtonComponentProps } from './types';

const ButtonComponent: FC<ButtonComponentProps> = ({ children, className = '', dataTrackingId, dataTrackingEvent, href, ...props }) => (
    <button
        {...props}
        data-tracking-id={dataTrackingId}
        className={twMerge('btn btn-primary font-medium text-white', className)}
        data-tracking-event={dataTrackingEvent}
    >
        <>
            {props.startIcon}
            {children}
        </>
    </button>
);

export default ButtonComponent;
