import { type FC } from 'react';
import type { IconProps } from './types';

const Arrow: FC<IconProps> = ({ onClick, pathD }) => {
    const rightClass = 'right-[15px] md:right-[25px]';
    const leftClass = 'left-[15px] md:left-[25px]';

    const leftOrRight = pathD === 'M9 5l7 7-7 7' ? rightClass : leftClass;

    return (
        <div
            className={`absolute transition-all cursor-pointer rounded-full flex justify-center
            items-center h-8 w-8 z-10 md:hover:opacity-50 lg:bg-gray-500 top-[40%] ${leftOrRight}`}
            onClick={onClick}
            aria-hidden="true"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-white h-10 w-10 lg:w-5 lg:h-5" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={pathD} />
            </svg>
        </div>
    );
};

export default Arrow;
