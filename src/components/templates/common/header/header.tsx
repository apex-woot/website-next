import { type FC } from 'react';
import type { HeaderProps } from './types';

const Header: FC<HeaderProps> = ({ children, className }) => {
    const textWhite = 'text-white lg:text-left text-3xl lg:text-2xl 2xl:text-5xl';
    const textWarning = 'text-warning text-2xl';

    return (
        <h1
            className={`text-center font-extrabold leading-tight lg:mt-10 xl:text-4xl mb-8
                      ${className === 'text-white' ? textWhite : textWarning}`}
        >
            {children}
        </h1>
    );
};

export default Header;
