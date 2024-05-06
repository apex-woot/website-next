import { Login } from '@components/app/login/login';
import '@lib/env';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Login',
    description:
        'Log in to trades.org platform to access your account. Enter your credentials securely to manage your profile, settings, and activities.',
};

export default async function LoginPage({ params: { lng } }: { params: { lng: string } }) {
    return <Login lng={lng} />;
}
