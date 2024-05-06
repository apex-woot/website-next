import Markdown from 'markdown-to-jsx';
import React, { type FC } from 'react';
import type { StyledTextSectionProps } from './types';

const StyledTextSection: FC<StyledTextSectionProps> = ({ headerText, bodyText, headExtraStyles, paragraphExtraStyles }) => (
    <div className="md:w-[540px]">
        <h1 className={`${headExtraStyles} text-4xl lg:text-5xl font-extrabold text-white`}>{headerText}</h1>
        <p
            className={`${paragraphExtraStyles} my-5 pb-5 md:pb-0 text-white
        static left-0 top-[211px] pt-4 not-italic text-xl font-extralight leading-8`}
        >
            <Markdown>{bodyText}</Markdown>
        </p>
    </div>
);

export default StyledTextSection;
