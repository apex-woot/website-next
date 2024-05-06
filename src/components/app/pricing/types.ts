import type { ReactNode } from 'react';

export type SubFeaturesType = {
    subFeatureText: string;
    defaultSubFeatureText: string;
};

export type PriceType = {
    setup: string;
    deleted: string;
    perMonth: string;
    subFeatures: SubFeaturesType[];
    subFeaturesMobile: SubFeaturesType[];
};

export type FeatureType = {
    title: string;
    defaultTitle: string;
    icon: ReactNode;
    description: string;
    defaultDescription: string;
};

export type FAQType = {
    answer: string;
    defaultAnswer: string;
    question: string;
    defaultQuestion: string;
};

export type DetailPlanType = {
    name: string;
    defaultName: string;
    description: string;
    defaultDescription: string;
};

export type DetailedPlansType = {
    support: DetailPlanType[];
    features: DetailPlanType[];
    reporting: DetailPlanType[];
};

export type ProType = {
    price: PriceType;
    features: FeatureType[];
};

export type PlanDetailsType = {
    id: string;
    name: string;
    defaultName: string;
    price: string;
    buttonText: string;
    defaultButtonText: string;
    support: boolean[];
    description: string;
    defaultDescription: string;
    features: boolean[];
    reporting: boolean[];
};

export type PlanType = {
    plans: {
        basic: PlanDetailsType;
        premium: PlanDetailsType;
        essential: PlanDetailsType;
    };
    lng: string;
};

export type DataType = {
    pro: ProType;
    faqs: FAQType[];
    detailedPlans: DetailedPlansType & PlanType;
};
