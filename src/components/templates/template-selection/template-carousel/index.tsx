import useWindowSize from '@hooks/useWindowSize';
import React, { useState, useEffect, useRef, type FC } from 'react';
import Slider from 'react-slick';
import Arrow from './arrow';
import Template from './template';
import { templates } from './utils';

//store
import { useStore } from '@nanostores/react';
import { template } from '@store/landing-store';

const TemplateCarousel: FC = () => {
    const $template = useStore(template);
    const [imageIndex, setImageIndex] = useState(0);
    const sliderRef = useRef<Slider>(null);
    const { screenWidth } = useWindowSize();

    useEffect(() => {
        template.set(!$template ? templates[0] : $template);
    }, []);

    const sliderSettings = {
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: '0',
        slidesToShow: templates.length >= 4 && screenWidth >= 768 ? 3 : 1,
        speed: 500,
        autoPlay: true,
        nextArrow: <Arrow pathD={'M9 5l7 7-7 7'} />,
        prevArrow: <Arrow pathD={'M15 19l-7-7 7-7'} />,
        beforeChange: (current: number, next: number) => {
            setImageIndex(next);
            template.set(templates[next]);
        },
        swipe: screenWidth < 1024,
        arrows: true,
    };

    useEffect(() => {
        if ($template?.id && sliderRef.current) {
            const foundIndex = templates.findIndex((template) => template.id === $template.id);

            if (foundIndex !== -1) {
                setImageIndex(foundIndex);
                sliderRef.current.slickGoTo(foundIndex);
            }
        }
    }, [$template]);

    return (
        <Slider ref={sliderRef} {...sliderSettings}>
            {templates.map((templateItem, index) => (
                <Template
                    key={`templates-${index}`}
                    template={templateItem}
                    selected={index === imageIndex}
                    left={(imageIndex === 0 && index === templates.length - 1) || index === imageIndex - 1}
                    right={(imageIndex === templates.length - 1 && index === 0) || index === imageIndex + 1}
                    onClick={() => {
                        setImageIndex(index);
                        template.set(templateItem);
                    }}
                />
            ))}
        </Slider>
    );
};

export default TemplateCarousel;
