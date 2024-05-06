import type { URL } from 'node:url';
import { type Auth0Client, type PopupLoginOptions, createAuth0Client } from '@auth0/auth0-spa-js';
import { setUser, store } from '@store/user-store';

export let auth0Client: Auth0Client | undefined;

export async function getAuth0Client() {
    const audience = process.env.NEXT_PUBLIC_AUTH0_AUDIENCE;
    const updateScope = 'update:current_user_metadata update:current_user_identities';
    const readScope = 'read:current_user openid email phone profile';
    const scope = `stripe_customer_portal is_setup ${updateScope} ${readScope}`;
    if (!auth0Client) {
        auth0Client = await createAuth0Client({
            domain: `${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}`,
            clientId: `${process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}`,
            authorizationParams: {
                scope: scope,
                audience: `https://${audience}/api/v2/`,
                redirect_uri: 'http://localhost:3000/',
            },
        });
    }

    return auth0Client;
}

async function auth0Login(options: PopupLoginOptions['authorizationParams']) {
    if (typeof window !== 'undefined') {
        try {
            const auth0 = await getAuth0Client();
            const config = buildPopupConfigOptions();

            await auth0?.loginWithPopup({ authorizationParams: options }, config);

            const user = await auth0?.getUser();
            if (user) setUser(user);
            return user;
        } catch (e) {
            console.error(e);
            return null;
        }
    }
    return null;
}

export const getUser = async () => {
    try {
        const auth0 = await getAuth0Client();
        let isAuthenticated = await auth0?.isAuthenticated();

        if (!isAuthenticated) {
            isAuthenticated = !!(await auth0?.getTokenSilently());
        }
        return isAuthenticated ? await auth0?.getUser() : false;
    } catch (e) {
        return false;
    }
};

export const getAuth0AccessToken = async () => {
    if (typeof window !== 'undefined') {
        try {
            const auth0 = await getAuth0Client();
            return await auth0?.getTokenSilently();
        } catch (e) {
            return false;
        }
    }
    return false;
};

export const loginWithFacebook = async (options: PopupLoginOptions) =>
    auth0Login({ ...options.authorizationParams, connection: 'facebook' });
export const loginWithGoogle = async (options: PopupLoginOptions) =>
    auth0Login({ ...options.authorizationParams, connection: 'google-oauth2' });
export const loginWithApple = async (options: PopupLoginOptions) => auth0Login({ ...options.authorizationParams, connection: 'apple' });
export const loginWithPhone = async (options: PopupLoginOptions) => auth0Login({ ...options.authorizationParams, connection: 'sms' });
export const loginWithEmail = async (options: PopupLoginOptions) => auth0Login({ ...options.authorizationParams, connection: 'email' });

export const logout = async () => {
    if (typeof window !== 'undefined') {
        const auth0 = await getAuth0Client();
        // @ts-ignore
        auth0?.logout({ returnTo: window.location.origin });
    }
};

const buildPopupConfigOptions = () => {
    const width = 600;
    const height = 600;
    const left = window.screenX + (window.innerWidth - width) / 2;
    const top = window.screenY + (window.innerHeight - height) / 2;
    const target = 'auth0:authorize:popup';
    const features = `left=${left},top=${top},width=${width},height=${height},resizable,scrollbars=yes,status=1`;

    return { popup: window.open({} as URL, target, features) };
};
