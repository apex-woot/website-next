import clsx from 'clsx';
import { Button as DaisyButton } from 'react-daisyui';
import type { ButtonColorEnum, ButtonProps } from './types';

const Button = ({ iconLeft, iconRight, className, name, children, color, ...props }: ButtonProps) => {
    const colors = {
        red: 'bg-redLanding hover:bg-redLanding/80 border-none',
        yellow: 'bg-warning hover:bg-warning/80',
        sky: 'bg-sky hover:bg-sky/80 border-none',
    };
    return (
        <div className="relative">
            <DaisyButton
                name={name}
                id={name}
                className={clsx('placeholder:font-normal placeholder:text-sm ', colors[color as ButtonColorEnum], className)}
                {...props}
            >
                <div className="hidden xs:block absolute left-3">{iconLeft}</div>

                {children}
                <div className="hidden xs:block absolute right-3">{iconRight}</div>
            </DaisyButton>
        </div>
    );
};
export default Button;
