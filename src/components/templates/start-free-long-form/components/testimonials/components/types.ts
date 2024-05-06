import { StaticImageData } from 'next/image';
import type { MouseEventHandler } from 'react';

type TestimonialAuthorType = {
    name: string;
    position: string;
    defaultPosition: string;
    origin: string;
};

export type TestimonialsListType = {
    avatarImg: StaticImageData;
    testimonialBody: string;
    defaultTestimonialBody: string;
    testimonialAuthor: TestimonialAuthorType;
};

export type ArrowButtonProps = {
    onClick?: MouseEventHandler<HTMLDivElement>;
};

export interface CardListProps {
    testimonialsList: TestimonialsListType[];
}
