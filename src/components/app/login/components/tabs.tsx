'use client';
import { useTranslation } from '@app/i18n/client';
import { LoginButton } from '@components/app/common/buttons';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { Tabs as DaisyTabs } from 'react-daisyui';
import type { SocialOptions, TabOptions } from '../types';

const AUTH_METHODS: string = process.env.NEXT_PUBLIC_AVAILABLE_AUTH_METHODS || '';

const Tabs = ({ signupMessages }: { signupMessages: any[] }) => {
    const { lng } = useParams<{ lng: string }>();
    const loginWithSocials = AUTH_METHODS?.split('|') as SocialOptions[];

    const { t } = useTranslation(lng);
    const [selectedTab, setSelectedTab] = useState<TabOptions>('SIGNUP');

    const commonStyles = '!text-xs text-black w-full h-full leading-8 font-medium text-base break-words no-underline';
    const selectedStyles = `${commonStyles} bg-white border rounded-full !border-gray-200`;

    const tabs = [
        {
            value: 'SIGNUP',
            label: t('login.tabs.signUp', 'Create an Account'),
            className: selectedTab === 'SIGNUP' ? selectedStyles : commonStyles,
        },
        {
            value: 'LOGIN',
            label: t('login.tabs.login', 'Login to Account'),
            className: selectedTab === 'LOGIN' ? selectedStyles : commonStyles,
        },
    ];

    return (
        <div className="space-y-6">
            <DaisyTabs className="h-11 bg-secondary w-full justify-between items-center rounded-full flex-nowrap">
                {tabs.map(({ label, ...props }, idx) => (
                    <DaisyTabs.Tab
                        onClick={() => setSelectedTab(props.value as TabOptions)}
                        active={props.value === selectedTab}
                        key={`tabs-${+idx}`}
                        {...props}
                    >
                        {label}
                    </DaisyTabs.Tab>
                ))}
            </DaisyTabs>
            {selectedTab === 'LOGIN' && (
                <p className="text-sm font-medium mb-3">{t('login.login', 'Please login to your dashboard using the options below')}</p>
            )}
            {selectedTab === 'SIGNUP'
                ? signupMessages.map((m, i) => (
                      <p key={+i} className="text-sm font-medium">
                          {m}
                      </p>
                  ))
                : ''}
            <div className="space-y-3">
                {loginWithSocials.map((label, idx) => (
                    <LoginButton
                        selectedTab={selectedTab}
                        args={{ session_id: '', claim: '' }}
                        label={label}
                        key={`login-button-${+idx}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Tabs;
