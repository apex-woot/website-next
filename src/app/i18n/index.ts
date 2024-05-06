import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { getOptions } from './settings';

type Language = 'en' | 'es';
const initI18next = async (lng: Language, ns?: string) => {
    const i18nInstance = createInstance();
    await i18nInstance
        .use(initReactI18next)
        .use(resourcesToBackend((language: 'en' | 'es', namespace: string) => import(`./locales/${language}/${namespace}.json`)))
        .init(getOptions(lng, ns));
    return i18nInstance;
};

export async function useTranslation(lng: string, ns?: string, options = { keyPrefix: undefined }) {
    const i18nextInstance = await initI18next(lng as Language, ns);
    return {
        t: i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns, options.keyPrefix),
        i18n: i18nextInstance,
    };
}
