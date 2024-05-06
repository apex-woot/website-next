'use client';
import { useTranslation } from '@app/i18n/client';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { type FC } from 'react';
import Slider from 'react-slick';
import { NextArrow } from './next-arrow';
import { PrevArrow } from './prev-arrow';
import type { CardListProps } from './types';

const CardList: FC<CardListProps> = ({ testimonialsList }) => {
    const { lng } = useParams<{lng: string}>();
    const { t } = useTranslation(lng);

    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        className: 'slick-slider-custom',
        verticalSwiping: true,
        centerMode: true,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    centerMode: false,
                    slidesToScroll: 1,
                    vertical: false,
                    verticalSwiping: false,
                },
            },
        ],
    };
    return (
        <div className="w-[270px] xs:w-[80%] sm:w-[75%] lg:max-w-md lg:p-0">
            <Slider {...settings}>
                {testimonialsList.map((testimonial, index) => {
                    const { avatarImg, testimonialBody, defaultTestimonialBody, testimonialAuthor } = testimonial;
                    const { name, position, defaultPosition, origin } = testimonialAuthor;
                    return (
                        <div
                            key={`testimonial-${index + 1}`}
                            className="lg:opacity-10 scale-[0.98] bg-white border-solid border-0 rounded ring-0 lg:m-3"
                        >
                            <div className="px-5 pt-5 m-2">
                                <Image className="rounded-full w-16" src={avatarImg} alt="testimonialAuthorIcon" />
                                <div className="text-base text-gray-800 leading-6 mb-5 italic">
                                    <p className="my-5">{t(testimonialBody, defaultTestimonialBody)}</p>
                                    <p className="leading-5 font-bold">
                                        {name}
                                        <br />
                                        {t(position, defaultPosition)}
                                        <br />
                                        {origin}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default CardList;
