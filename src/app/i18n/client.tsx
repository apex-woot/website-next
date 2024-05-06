'use client';

import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next';
import { cookieName, getOptions, languages } from './settings';

const runsOnServerSide = typeof window === 'undefined';

//
i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(resourcesToBackend((language: string, namespace = 'translation') => import(`./locales/${language}/${namespace}.json`)))
    .init({
        ...getOptions(),
        lng: undefined, // let detect the language on client side
        detection: {
            order: ['path', 'htmlTag', 'cookie', 'navigator'],
        },
        preload: runsOnServerSide ? languages : [],
    });

export function useTranslation(lng: string, ns?: string, options?: any) {
    const [cookies, setCookie] = useCookies([cookieName]);
    const ret = useTranslationOrg(ns, options);
    const { i18n } = ret;
    if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
        i18n.changeLanguage(lng);
    } else {
        const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);
        useEffect(() => {
            if (activeLng === i18n.resolvedLanguage) return;
            setActiveLng(i18n.resolvedLanguage);
        }, [activeLng, i18n.resolvedLanguage]);
        useEffect(() => {
            if (!lng || i18n.resolvedLanguage === lng) return;
            i18n.changeLanguage(lng);
        }, [lng, i18n]);
        useEffect(() => {
            if (cookies.NEXT_LOCALE === lng) return;
            setCookie(cookieName, lng, { path: '/' });
        }, [lng, cookies.NEXT_LOCALE]);
    }
    return ret;
}

export function switchLanguageUrl(url: string, newLanguage: string) {
    const urlParts = url.split('/');

    // Check if the URL has a language prefix (e.g., '/en/', '/es/')
    if (urlParts.length > 1 && ['en', 'es'].includes(urlParts[1])) {
        // Replace the current language prefix with the new language
        urlParts[1] = newLanguage;
        return urlParts.join('/');
    }
    // If no language prefix is found, prepend the new language
    return `/${newLanguage}${url}`;
}
