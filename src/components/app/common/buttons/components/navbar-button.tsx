'use client';
import React, { type FC } from 'react';
import { Button } from 'react-daisyui';
import type { IconButtonProps } from '../types';

const NavbarButton: FC<IconButtonProps> = ({ icon, ...props }) => (
    <Button {...props} shape="circle" color="ghost" size="sm" type="button" startIcon={icon} />
);

export default NavbarButton;
