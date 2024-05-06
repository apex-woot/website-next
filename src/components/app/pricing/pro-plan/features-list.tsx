import { type FC } from 'react';
import type { FeatureListProps } from './types';

const FeaturesList: FC<FeatureListProps> = ({ item, index }) => (
    <li key={`price-${index}`} className="py-4 px-4 flex items-center space-x-3 text-base text-white">
        <svg
            fill="none"
            aria-hidden="true"
            viewBox="0 0 24 24"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-indigo-300"
        >
            <path strokeWidth={2} d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>{item}</span>
    </li>
);

export default FeaturesList;
