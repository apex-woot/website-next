import { LoginProps, SocialOptions, TabOptions } from '@components/app/login/types';
import type { ReactNode } from 'react';
import type { ButtonProps } from 'react-daisyui';

export interface ButtonComponentProps extends ButtonProps {
    href?: string;
    dataTrackingId?: string;
    dataTrackingEvent?: string;
}

export interface IconButtonProps extends Partial<ButtonProps> {
    icon?: ReactNode;
    href?: string;
}

export interface LoginButtonProps extends ButtonProps {
    args: LoginProps;
    label: SocialOptions;
    selectedTab: TabOptions;
}
