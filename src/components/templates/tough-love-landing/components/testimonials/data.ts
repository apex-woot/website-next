import TestimonialIMG1 from '~/images/testimonials1.png';
import TestimonialIMG2 from '~/images/testimonials2.png';
import TestimonialIMG3 from '~/images/testimonials3.png';
import TestimonialIMG4 from '~/images/testimonials4.png';
import TestimonialIMG5 from '~/images/testimonials5.png';
import TestimonialIMG6 from '~/images/testimonials6.png';
import type { TestimonialType } from './types';

export const testimonialsList: TestimonialType[] = [
    {
        lgOrder: 1,
        avatarImg: TestimonialIMG1,
        testimonialBody: 'toughLove.testimonials.data.body1',
        defaultTestimonialBody:
            "“This is exactly what our business needed. We just didn't have the knowledge or time to invest in website management. Our sales have gone up 28% in the last six months since we started using trades.org!”",
        testimonialAuthor: {
            name: 'Denise J.',
            position: 'toughLove.testimonials.data.position1',
            defaultPosition: 'Subcontractor',
            origin: 'Louisville, KY',
        },
    },
    {
        lgOrder: 3,
        avatarImg: TestimonialIMG2,
        testimonialBody: 'toughLove.testimonials.data.body2',
        defaultTestimonialBody:
            "“Excellent customer service and most importantly, this platform was super easy for us to use. I’ve been so busy helping with client support and getting out in the field to do plumbing, I haven't been able to give our website and marketing efforts any real attention. But now that we solved things with trades.org, we are running smoothly.”",
        testimonialAuthor: {
            name: 'Manny R.',
            position: 'toughLove.testimonials.data.position2',
            defaultPosition: 'Plumbing Tech',
            origin: 'Nashville, TN',
        },
    },
    {
        lgOrder: 5,
        avatarImg: TestimonialIMG3,
        testimonialBody: 'toughLove.testimonials.data.body3',
        defaultTestimonialBody: '“It just works. You get a subscription and let them do their thing. I’m very pleased!”',
        testimonialAuthor: {
            name: 'John B.',
            position: 'toughLove.testimonials.data.position3',
            defaultPosition: 'General Contractor',
            origin: 'Chicago, Illinois',
        },
    },
    {
        lgOrder: 2,
        avatarImg: TestimonialIMG4,
        testimonialBody: 'toughLove.testimonials.data.body4',
        defaultTestimonialBody:
            "“I’ve been a plumber for over 25 years and it wasn't till my 26th year that I decided to get a website and marketing help, and let me tell you I’m thrilled with the results!”",
        testimonialAuthor: {
            name: 'Jimmy K.',
            position: 'toughLove.testimonials.data.position4',
            defaultPosition: 'Plumber',
            origin: 'Austin, TX',
        },
    },
    {
        lgOrder: 4,
        avatarImg: TestimonialIMG5,
        testimonialBody: 'toughLove.testimonials.data.body5',
        defaultTestimonialBody:
            '“I decided to start my own business as an electrician and trades.org made it very easy to do so. It’s a great tool!”',
        testimonialAuthor: {
            name: 'Ramino D.',
            position: 'toughLove.testimonials.data.position5',
            defaultPosition: 'Electrician',
            origin: 'San Diego, CA',
        },
    },
    {
        lgOrder: 6,
        avatarImg: TestimonialIMG6,
        testimonialBody: 'toughLove.testimonials.data.body6',
        defaultTestimonialBody:
            '“Before, I wasn’t getting enough work and was stressed about running the business. Today, I have twice as many clients that are happy and returning for more work.”',
        testimonialAuthor: {
            name: 'Michael L.',
            position: 'toughLove.testimonials.data.position6',
            defaultPosition: 'Developer',
            origin: 'Los Angeles, CA',
        },
    },
];
