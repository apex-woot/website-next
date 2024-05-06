import type { PopupLoginOptions, User } from '@auth0/auth0-spa-js';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { loginWithApple, loginWithEmail, loginWithFacebook, loginWithGoogle, loginWithPhone } from '@lib/auth';
import { StaticImageData } from 'next/image';
import AppleIcon from '~/icons/apple-logo.png';
import FacebookIcon from '~/icons/facebook-logo.png';
import GoogleIcon from '~/icons/google-icon.png';

export interface SocialProvider {
    Icon: {
        src: StaticImageData | any;
        type: 'svg' | 'png';
    };
    login: (loginOptions: PopupLoginOptions) => Promise<User | null | undefined>;
    className: string;
    path: string;
}

export interface SocialsType {
    facebook: SocialProvider;
    google: SocialProvider;
    apple: SocialProvider;
    phone: SocialProvider;
    email: SocialProvider;
}
export const Socials: SocialsType = {
    facebook: {
        Icon: { type: 'png', src: FacebookIcon },
        login: loginWithFacebook,
        path: '/api/auth/login-facebook',
        className: 'text-blue-600 bg-white hover:bg-white border-blue-600 hover:border-blue-600',
    },
    google: {
        Icon: { type: 'png', src: GoogleIcon },
        login: loginWithGoogle,
        path: '/api/auth/login-google',
        className: 'bg-gray-200 hover:bg-gray-100 text-black border-gray-100 hover:border-gray-100',
    },
    apple: {
        Icon: { type: 'png', src: AppleIcon },
        login: loginWithApple,
        path: '/api/auth/login-apple',
        className: 'bg-black hover:bg-gray-800 text-white',
    },
    phone: {
        Icon: { type: 'svg', src: PhoneIcon },
        login: loginWithPhone,
        path: '/api/auth/login-phone',
        className: 'bg-white hover:bg-gray-200 text-black border-gray-200 hover:border-gray-300',
    },
    email: {
        Icon: { type: 'svg', src: EnvelopeIcon },
        login: loginWithEmail,
        path: '/api/auth/login-email',
        className: 'bg-white hover:bg-gray-200 text-black border-gray-200 hover:border-gray-300',
    },
};
