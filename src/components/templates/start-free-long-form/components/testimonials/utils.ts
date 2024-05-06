import TestimonialIMG1 from '~/images/testimonials1.png';
import TestimonialIMG2 from '~/images/testimonials2.png';
import TestimonialIMG3 from '~/images/testimonials3.png';
import TestimonialIMG4 from '~/images/testimonials4.png';
import TestimonialIMG5 from '~/images/testimonials5.png';
import TestimonialIMG6 from '~/images/testimonials6.png';

import type { TestimonialsListType } from './components';

export const testimonialsList: TestimonialsListType[] = [
    {
        avatarImg: TestimonialIMG1,
        testimonialBody: 'startFree.testimonials.utils.body1',
        defaultTestimonialBody:
            "“This is exactly what our business needed. We just didn't have the knowledge or time to invest in website management. Our sales have gone up 28% in the last six months since we started using trades.org!”",
        testimonialAuthor: {
            name: 'Denise J.',
            position: 'startFree.testimonials.utils.position1',
            defaultPosition: 'Subcontractor',
            origin: 'Louisville, KY',
        },
    },
    {
        avatarImg: TestimonialIMG2,
        testimonialBody: 'startFree.testimonials.utils.body2',
        defaultTestimonialBody:
            "“Excellent customer service and most importantly, this platform was super easy for us to use. I’ve been so busy helping with client support and getting out in the field to do plumbing, I haven't been able to give our website and marketing efforts any real attention. But now that we solved things with trades.org, we are running smoothly.”",
        testimonialAuthor: {
            name: 'Manny R.',
            position: 'startFree.testimonials.utils.position2',
            defaultPosition: 'Plumbing Tech',
            origin: 'Nashville, TN',
        },
    },
    {
        avatarImg: TestimonialIMG3,
        testimonialBody: 'startFree.testimonials.utils.body3',
        defaultTestimonialBody: '“It just works. You get a subscription and let them do their thing. I’m very pleased!”',
        testimonialAuthor: {
            name: 'John B.',
            position: 'startFree.testimonials.utils.position3',
            defaultPosition: 'General Contractor',
            origin: 'Chicago, Illinois',
        },
    },
    {
        avatarImg: TestimonialIMG4,
        testimonialBody: 'startFree.testimonials.utils.body4',
        defaultTestimonialBody:
            "“I’ve been a plumber for over 25 years and it wasn't till my 26th year that I decided to get a website and marketing help, and let me tell you I’m thrilled with the results!”",
        testimonialAuthor: {
            name: 'Jimmy K.',
            position: 'startFree.testimonials.utils.position4',
            defaultPosition: 'Plumber',
            origin: 'Austin, TX',
        },
    },
    {
        avatarImg: TestimonialIMG5,
        testimonialBody: 'startFree.testimonials.utils.body5',
        defaultTestimonialBody:
            '“I decided to start my own business as an electrician and trades.org made it very easy to do so. It’s a great tool!”',
        testimonialAuthor: {
            name: 'Ramino D.',
            position: 'startFree.testimonials.utils.position5',
            defaultPosition: 'Electrician',
            origin: 'San Diego, CA',
        },
    },
    {
        avatarImg: TestimonialIMG6,
        testimonialBody: 'startFree.testimonials.utils.body6',
        defaultTestimonialBody:
            '“Before, I wasn’t getting enough work and was stressed about running the business. Today, I have twice as many clients that are happy and returning for more work.”',
        testimonialAuthor: {
            name: 'Michael L.',
            position: 'startFree.testimonials.utils.position6',
            defaultPosition: 'Developer',
            origin: 'Los Angeles, CA',
        },
    },
];
