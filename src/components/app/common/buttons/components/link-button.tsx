'use client';
import { type FC } from 'react';
import { Button } from 'react-daisyui';
import type { IconButtonProps } from '../types';

const LinkButton: FC<IconButtonProps> = ({ href, icon, ...restProps }) => (
    <Button {...restProps} color="ghost" variant="link" startIcon={icon}>
        {restProps.children}
    </Button>
);

export default LinkButton;
