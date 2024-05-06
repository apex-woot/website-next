'use client';
import { useParams } from 'next/navigation';
import { type FC } from 'react';
import { ServiceCard } from './components';
import type { ServiceProps } from './types';

const Services: FC<ServiceProps> = ({ data: services }) => {
    return (
        <div className="bg-lightGrey">
            <div className="max-w-6xl mx-auto pb-12 pt-20 px-5 ">
                <div className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${services.length} gap-4`}>
                    {services.map((service, index) => (
                        <ServiceCard key={`service-card-${+index}`} {...service} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
