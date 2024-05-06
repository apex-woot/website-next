import { createContext } from 'react';
import type { LandingPageContextType } from './types';

export const LandingPagesContext = createContext<LandingPageContextType>({
    selectedTemplate: {},
    setSelectedTemplate(payload) {
        return payload;
    },
});
