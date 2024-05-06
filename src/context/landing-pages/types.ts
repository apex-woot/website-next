import type { ReactNode } from 'react';

export type LandingPageContextType = {
    selectedTemplate: Record<string, unknown>;
    setSelectedTemplate: (payload: unknown) => void;
};

export interface LandingPageProviderProps {
    children: ReactNode;
}
