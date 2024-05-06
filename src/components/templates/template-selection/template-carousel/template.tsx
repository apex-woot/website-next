import Image from 'next/image';
import React, { type FC } from 'react';
import type { TemplateProps } from './types';

const Template: FC<TemplateProps> = ({ template, selected, right, left, onClick }) => {
    const leftClass = left ? 'relative md:scale-75 translate-x-16 z-[-10]' : '';
    const rightClass = right ? 'relative md:scale-75 translate-x-[-4rem] z-[-10]' : '';
    const selectedClass = selected ? 'border-[5px] rounded-2xl border-warning z-10' : '';

    return (
        <div
            className={`w-[60%] mx-auto md:w-full md:mx-0 scale-[0.98] transition-all duration-300 opacity-60
            cursor-pointer focus:outline-none ${selectedClass} ${leftClass} ${rightClass}`}
            onClick={onClick}
            aria-hidden="true"
        >
            <Image src={template.image} alt={template.name} className="w-full h-full rounded-xl" />
        </div>
    );
};

export default Template;
