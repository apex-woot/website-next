import { Input } from 'react-daisyui';
import { twMerge } from 'tailwind-merge';
import type { InputProps } from './types';

const input = ({
    iconLeft,
    iconRight,
    label,
    labelClassName,
    containerClassName,
    errorMessage,
    errorClassName,
    placeholder,
    className,
    name,
    ...props
}: InputProps) => (
    <div className={twMerge('form-control', containerClassName)}>
        {label && (
            <label htmlFor={name}>
                <span className={twMerge('label-text text-white label font-medium', labelClassName)}>{label}</span>
            </label>
        )}
        <div className="relative">
            {iconLeft && <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">{iconLeft}</div>}
            <Input
                name={name}
                id={name}
                placeholder={placeholder}
                className={twMerge(
                    iconLeft ? 'pl-10' : 'pl-3',
                    iconRight ? 'pr-10' : 'pr-3',
                    'placeholder:font-normal placeholder:text-sm',
                    className,
                )}
                {...props}
            />
            {iconRight && <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">{iconRight}</div>}
        </div>
        {errorMessage && (
            <label htmlFor={name}>
                <span className={twMerge('label-text-alt label text-error pb-0 pt-1', errorClassName)}>{errorMessage}</span>
            </label>
        )}
    </div>
);

export default input;
