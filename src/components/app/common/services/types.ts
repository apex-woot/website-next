import { StaticImageData } from 'next/image';

export interface Features {
    title: string;
    defaultTitle: string;
    description: string;
    defaultDescription: string;
}

export interface Service {
    icon: StaticImageData;
    title: string;
    defaultTitle: string;
    subtitle: string;
    defaultSubtitle: string;
    trackingId: string;
    features: Features[];
}

export interface ServiceProps {
    data: Service[];
}
