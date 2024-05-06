import React, { type FC } from 'react';
import type { SectionLayoutProps } from './types';

const SectionLayout: FC<SectionLayoutProps> = ({ children, className }) => (
    <div className={`${className} flex px-5 pt-16 flex-col lg:flex-row md:justify-evenly md:items-center `}>{children}</div>
);

export default SectionLayout;
