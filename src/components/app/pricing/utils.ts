import { getUser } from '@lib/auth';
import { createCheckoutSession } from '@lib/stripe';
import { loadStripe } from '@stripe/stripe-js';

export const handlePlan = async (offering: string) => {
    const retrivedKey = typeof window !== 'undefined' && JSON.parse(window?.localStorage?.getItem('stripe') || '{}');
    const stripeKey = retrivedKey.publishableKey;
    const stripe = await loadStripe(stripeKey);
    const user = await getUser();
    const successUrl = user ? process.env.NEXT_PUBLIC_AUTH0_LOGIN_REDIRECT_URL : process.env.NEXT_PUBLIC_STRIPE_SUCCESS_URL;
    const cancelUrl = process.env.NEXT_PUBLIC_STRIPE_CANCEL_URL;
    // @ts-ignore
    const clientReferenceId = user?.sub || '';
    return createCheckoutSession(offering, successUrl || '', cancelUrl || '', clientReferenceId).then((response) => {
        stripe
            ?.redirectToCheckout({
                sessionId: response.checkoutSessionId,
            })
            .then((result) => ({
                error: result.error.message,
                loading: false,
            }))
            .catch((err) => ({
                error: err.message,
                loading: false,
            }));
    });
};
