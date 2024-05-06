import type React from 'react';
import type { InputProps as DaisyuiInputProps } from 'react-daisyui';

export interface InputGroupProps extends DaisyuiInputProps {
    contentLeft?: React.ReactNode;
    contentRight?: React.ReactNode;
    contentLeftClassName?: string;
    contentRightClassName?: string;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    label?: string;
    labelClassName?: string;
    errorMessage?: string;
    errorClassName?: string;
}
