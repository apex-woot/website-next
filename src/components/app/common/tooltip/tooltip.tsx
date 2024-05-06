'use client';
import { type FC } from 'react';
import { Tooltip as TooltipComponent, type TooltipProps } from 'react-daisyui';

const Tooltip: FC<TooltipProps> = ({ children, message }) => (
    <TooltipComponent message={message} className={'before:w-[10rem] cursor-pointer before:bg-black before:text-left before:text-xs'}>
        {children}
    </TooltipComponent>
);

export default Tooltip;
