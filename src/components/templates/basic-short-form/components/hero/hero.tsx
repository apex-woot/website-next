import { type FC } from 'react';
import type { HeroProps } from './types';

const Hero: FC<HeroProps> = ({ children }) => (
    <div className="relative lg:overflow-hidden">
        <div className="bg-wieDigital h-screen w-screen bg-cover z-[-1] blur-[2px] bg-no-repeat hidden lg:block" />
        <div className="h-screen w-screen z-0 opacity-[0.85] bg-[#303d50] absolute top-0 hidden lg:block" />
        <div className="bg-[#1f2937] w-full h-full opacity-100 z-[-1] absolute top-0 right-0 xl:w-3/5 lg:w-[66%] lg:h-[2000px] lg:z-0 lg:opacity-70 lg:rotate-[15deg] lg:-mt-[500px] lg:-mr-52" />
        <div className="lg:absolute top-0 left-0 w-full flex flex-col items-center overflow-y-auto h-full">{children}</div>
    </div>
);

export default Hero;
