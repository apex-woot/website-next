import type { MouseEventHandler } from 'react';

export interface StartFreeLandingButtonProps {
    title: string;
    specificationDisplay?: boolean;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
