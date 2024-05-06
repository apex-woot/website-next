import type { ButtonProps as DaisyuiButtonProps } from 'react-daisyui';

export type ButtonColorEnum = 'red' | 'yellow' | 'sky';

export interface ButtonProps extends Omit<DaisyuiButtonProps, 'color'> {
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    color?: ButtonColorEnum;
}
