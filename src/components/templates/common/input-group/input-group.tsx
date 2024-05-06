import clsx from 'clsx';
import { Input, Join } from 'react-daisyui';
import type { InputGroupProps } from './types';

const inputgroup = ({
    contentLeft,
    contentRight,
    contentLeftClassName,
    contentRightClassName,
    iconLeft,
    iconRight,
    label,
    labelClassName,
    errorMessage,
    errorClassName,
    className,
    name,
    ...props
}: InputGroupProps) => (
    <div className="form-control">
        {label && (
            <label htmlFor={name}>
                <span className={clsx('label-text text-white label font-medium', labelClassName)}>{label}</span>
            </label>
        )}
        <Join className="relative">
            <div className="flex w-full component-preview items-center justify-center font-sans">
                {iconLeft && <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">{iconLeft}</div>}
                {contentLeft && <div className={clsx(contentLeftClassName, 'h-full')}>{contentLeft}</div>}
                <Input
                    type="text"
                    name={name}
                    id={name}
                    className={clsx(
                        iconLeft ? 'pl-10' : 'pl-3',
                        iconRight ? 'pr-10' : 'pr-3',
                        'placeholder:font-normal placeholder:text-sm',
                        'join-item rounded-l-none',
                        className,
                    )}
                    placeholder="10"
                    bordered
                    {...props}
                />
                {contentRight && <span className={contentRightClassName}>{contentRight}</span>}

                {iconRight && <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">{iconRight}</div>}
            </div>
        </Join>
        {errorMessage && (
            <label htmlFor={name}>
                <span className={clsx('label-text-alt label text-error pb-0 pt-1', errorClassName)}>{errorMessage}</span>
            </label>
        )}
    </div>
);
export default inputgroup;
