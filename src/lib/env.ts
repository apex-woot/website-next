/**
 * Configuration for type-safe environment variables.
 * Imported through src/app/page.tsx
 * @see https://x.com/mattpocockuk/status/1760991147793449396
 */
import { z } from 'zod';

const envVariables = z.object({
    NEXT_PUBLIC_SHOW_LOGGER: z.enum(['true', 'false']).optional(),
    NODE_ENV: z.string(),
    PUBLIC_ADDITIONAL_SITEMAP_URL: z.string(),
    NEXT_PUBLIC_BROADCAST_URL: z.string(),
    NEXT_PUBLIC_HOST_URL: z.string(),
    NEXT_PUBLIC_STRIPE_SUCCESS_URL: z.string(),
    NEXT_PUBLIC_STRIPE_CANCEL_URL: z.string(),
    NEXT_PUBLIC_BROADCAST_SERVICE_API_KEY: z.string(),
    NEXT_PUBLIC_AUTH0_CLIENT_ID: z.string(),
    LOCALAZY_META_FILE_URL: z.string(),
    NEXT_PUBLIC_AVAILABLE_AUTH_METHODS: z.string(),
    NEXT_PUBLIC_AUTH0_AUDIENCE: z.string(),
    NEXT_PUBLIC_AUTH0_LOGIN_REDIRECT_URL: z.string(),
    NEXT_PUBLIC_AUTH0_DOMAIN: z.string(),
    NEXT_PUBLIC_DASHBOARD_URL: z.string(),
});

envVariables.parse(process.env);

declare global {
    namespace NodeJS {
        interface ProcessEnv extends z.infer<typeof envVariables> {}
    }
}
