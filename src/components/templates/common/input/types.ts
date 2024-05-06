import type { InputProps as DaisyuiInputProps } from 'react-daisyui';

export interface InputProps extends DaisyuiInputProps {
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    label?: string;
    labelClassName?: string;
    containerClassName?: string;
    errorMessage?: string;
    errorClassName?: string;
}
