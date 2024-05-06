import { StaticImageData } from 'next/image';

export type TestimonialType = {
    lgOrder?: number;
    avatarImg: StaticImageData;
    testimonialBody: string;
    defaultTestimonialBody: string;
    testimonialAuthor: {
        name: string;
        position: string;
        defaultPosition: string;
        origin: string;
    };
};
