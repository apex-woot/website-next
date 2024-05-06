import { SetStateAction } from 'react';

export interface LoginProps {
    email?: string | string[];
    full_name?: string | string[];
    session_id?: string | string[];
    phone_number?: string | string[];
    claim?: string | undefined;
}

export type TabOptions = 'SIGNUP' | 'LOGIN';
export type SocialOptions = 'facebook' | 'google' | 'apple' | 'phone' | 'email';

export interface TabsProps {
    selectedTab: TabOptions;
    setSelectedTab: SetStateAction<TabOptions>;
}
