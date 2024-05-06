export type ProvidersEnum = 'AWS' | 'Twilio' | 'Google' | 'BBB';

export interface ProviderProps {
    wrapperClassname?: string;
    labelClassname?: string;
    listClassname?: string;
    itemClassname?: string;
    provider: ProvidersEnum[];
}
