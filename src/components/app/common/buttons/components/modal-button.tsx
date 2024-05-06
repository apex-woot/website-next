'use client';
import Link from 'next/link'; // Import Link from next.js for client-side routing
import React, { FC } from 'react';
import Button from '../button';
import type { ButtonComponentProps } from '../types';

const ModalButton: FC<ButtonComponentProps> = ({ href, children, ...restProps }) => {
    if (href) {
        return (
            <Link href={href}>
                <Button className="my-0 btn-sm no-underline hover:no-underline" color="ghost" type="button" {...restProps}>
                    {children}
                </Button>
            </Link>
        );
    }
    return (
        <Button size="xs" color="ghost" type="button" className="my-0 btn-sm no-underline hover:no-underline" {...restProps}>
            {children}
        </Button>
    );
};

export default ModalButton;
