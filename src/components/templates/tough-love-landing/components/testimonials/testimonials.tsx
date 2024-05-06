import { useTranslation } from '@app/i18n/client';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { type FC } from 'react';
import Slider from 'react-slick';
import { Testimonial } from './components/testimonial';
import { testimonialsList } from './data';

const Testimonials: FC = () => {
    const { lng } = useParams<{lng: string}>();
    const { t } = useTranslation(lng);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        initialSlide: 0,
    };

    return (
        <section className="mx-auto bg-vectorDesktop [@media(max-width:576px)]:bg-vectorMobile bg-cover bg-no-repeat [@media(min-width:576px)]:pb-24 ">
            <div className={'pt-20 max-lg:px-5'}>
                <div className="lg:px-28 pt-20 sm:pt-40 max-w-[1440px] mx-auto">
                    <h1 className={'text-gray-800 md:leading-10 leading-8 font-extrabold mb-8 text-3xl'}>
                        {t('toughLove.testimonials.title', 'Here’s what our customers are saying about us...')}
                    </h1>
                    <div className="hidden lg:block">
                        <div className="w-full columns-3 gap-5">
                            {testimonialsList
                                .sort((testimonial, testimonialNext) => (testimonial?.lgOrder ?? 0) - (testimonialNext?.lgOrder ?? 0))
                                .map(
                                    (
                                        {
                                            avatarImg,
                                            testimonialBody,
                                            defaultTestimonialBody,
                                            testimonialAuthor: { name, origin, position, defaultPosition },
                                        },
                                        index,
                                    ) => (
                                        <div
                                            key={`testimonial${+index}`}
                                            className="lg:w-full inline-block box-border mb-[1.25rem] lg:mx-0 max-w-md mx-auto"
                                        >
                                            <div className="bg-white lg:py-6 py-4 xl:px-12 px-10 shadow-lg rounded-lg">
                                                <div className="w-16 h-16 mb-4">
                                                    <Image
                                                        src={avatarImg}
                                                        className="w-full rounded-full"
                                                        alt={`${t('toughLove.testimonials.alt', 'Reviewer Image')} ${index}`}
                                                    />
                                                </div>
                                                <p className="text-sm text-gray-800 leading-6 mb-5 italic font-normal">
                                                    {t(testimonialBody, defaultTestimonialBody)}
                                                </p>
                                                <p className="text-sm text-gray-800 leading-6 font-bold italic">
                                                    {name}
                                                    <br /> {t(position, defaultPosition)}
                                                    <br /> {origin}
                                                </p>
                                            </div>
                                        </div>
                                    ),
                                )}
                        </div>
                    </div>
                </div>
                <div className="block lg:hidden mb-[50px] md:mb-0">
                    <Slider {...settings} className="slick-slider-custom text-center">
                        {testimonialsList.map((testimonial, index) => (
                            <Testimonial key={`testimonial-card-${index + 1}`} {...testimonial} />
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
