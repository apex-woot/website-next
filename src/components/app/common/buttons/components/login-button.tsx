'use client';
import { useTranslation } from '@app/i18n/client';
import { useUser } from '@auth0/nextjs-auth0/client';
import { getAuth0AccessToken } from '@lib/auth';
import { capitalizeFirstLetter } from '@lib/strings';
import { getStripeSubscriptions } from '@lib/stripe';
import { useStore } from '@nanostores/react';
import { setIsPaid, setUser, store } from '@store/user-store';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { type FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import Button from '../button';
import type { LoginButtonProps } from '../types';
import { SocialProvider, Socials } from '../utils';

const renderIcon = (Icon: SocialProvider['Icon'], label: string): ReactNode => {
    if (Icon.type === 'png') {
        return <Image width="27" height="27" className="mr-4" alt={`${label}-icon`} src={Icon.src} />;
    }
    if (Icon.type === 'svg') {
        const IconComponent = Icon.src as React.ComponentType<React.SVGProps<SVGSVGElement>>;
        return <IconComponent className="h-6 w-6 mr-4" />;
    }

    return null; // Handle any other cases (optional)
};

const LoginButton: FC<LoginButtonProps> = ({ args, label, selectedTab }) => {
    const router = useRouter();
    const { lng } = useParams<{ lng: string }>();
    const { user } = useStore(store);

    const { t } = useTranslation(lng);
    const { Icon, className, login } = Socials[label];

    const handleText = () => {
        const isUserRegister = user?.sub?.includes(label);
        const labels = {
            phone: t('loginButtons.phone', 'Connect with Phone'),
            email: t('loginButtons.email', 'Connect with Email'),
            LOGIN: `${t('loginButtons.login', 'Login with')} ${capitalizeFirstLetter(label)}`,
            SIGNUP: `${t('loginButtons.signup', 'Continue with')} ${capitalizeFirstLetter(label)}`,
            auth: `${t('loginButtons.auth', 'Successfully connected as')} ${user?.name}`,
        };

        if (isUserRegister) {
            return labels.auth;
        }

        return labels[selectedTab as keyof typeof labels];
    };

    const handleClick = async () => {
        const callback = Socials[label].login;

        const { email, full_name: fullName, phone_number: phoneNumber, session_id: stripeSessionID, claim: claimToken } = args;

        const authUser = await callback({
            // @ts-ignore
            email,
            stripeSessionID,
            full_name: fullName,
            phone_number: phoneNumber,
            claim: claimToken,
        });
        if (authUser) setUser(authUser);

        const accessToken = await getAuth0AccessToken();

        if (accessToken) {
            const stripeResponse = await getStripeSubscriptions(accessToken);
            if (stripeResponse.active) {
                setIsPaid(true);
            } else {
                setIsPaid(false);
            }
        }
    };
    return (
        <Button
            //@ts-ignore
            onClick={Socials[label].login}
            disabled={user?.sub?.includes(label)}
            data-tracking-id={`register-${label}`}
            data-tracking-event="Register - Start"
            className={twMerge('my-2 font-normal normal-case w-full', Socials[label].className)}
        >
            {renderIcon(Icon, label)}
            {handleText()}
        </Button>
    );
};

export default LoginButton;
