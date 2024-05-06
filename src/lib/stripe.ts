const api = process.env.NEXT_PUBLIC_HOST_URL;

export const getStripe = async () =>
    fetch(`${api}/stripe-publishable-key`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }).then((result) => result.json());

export const createCheckoutSession = (offering: string, successUrl: string, cancelUrl: string, clientReferenceId = '') =>
    fetch(`${api}/create-checkout-session`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': process.env.NEXT_PUBLIC_BROADCAST_SERVICE_API_KEY,
        },
        body: JSON.stringify({
            offering,
            successUrl,
            cancelUrl,
            clientReferenceId,
            source: 'stripe',
            type: 'create-checkout-session',
        }),
    }).then((response) => response.json());

export const getStripeSubscriptions = (accessToken: string) =>
    fetch(`${api}/user/subscription/get`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${accessToken}` },
    }).then((response) => response.json());
