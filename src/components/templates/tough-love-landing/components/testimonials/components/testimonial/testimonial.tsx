import { useTranslation } from '@app/i18n/client';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { type FC } from 'react';
import type { TestimonialProps } from './types';

const Testimonial: FC<TestimonialProps> = ({ avatarImg, testimonialBody, defaultTestimonialBody, testimonialAuthor }) => {
    const { lng } = useParams<{lng: string}>();
    const { name, position, defaultPosition, origin } = testimonialAuthor;
    const { t } = useTranslation(lng);

    return (
        <div className="lg:w-[32.33%] lg:mx-0 max-w-md mx-auto w-full md:px-1 py-4">
            <div className="bg-white pt-4 lg:py-6 py-4 xl:px-12 [@media(max-width:576px)]:px-8 px-10">
                <div className="w-16 h-16 mb-4">
                    <Image className="w-full rounded-full" src={avatarImg} alt="testimonialAuthorIcon" />
                </div>
                <p className="text-sm text-gray-800 leading-6 mb-5 italic font-normal">{t(testimonialBody, defaultTestimonialBody)}</p>
                <p className="text-sm text-gray-800 leading-6 font-bold italic ">
                    {name}
                    <br />
                    {t(position, defaultPosition)}
                    <br />
                    {origin}
                </p>
            </div>
        </div>
    );
};

export default Testimonial;
