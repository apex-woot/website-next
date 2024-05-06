import Link from 'next/link';
import React, { type FC } from 'react';
import { StartFreeLandingButton } from '../start-free-landing-button';
import type { TextLayoutProps } from './types';

const TextLayout: FC<TextLayoutProps> = ({ children, buttonTitle, className }) => (
    <div className={`${className} flex flex-col md:my-10 md:items-center lg:items-start lg:max-w-md`}>
        {children}
        <div className="w-[390px] hidden md:flex md:self-center lg:self-start">
            <Link href={'#hero-form'}>
                <StartFreeLandingButton title={buttonTitle} />
            </Link>
        </div>
    </div>
);

export default TextLayout;
