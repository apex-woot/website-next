import { type FC, useMemo, useState } from 'react';
import { LandingPagesContext } from './context';
import type { LandingPageProviderProps } from './types';

const LandingPagesProvider: FC<LandingPageProviderProps> = ({ children }) => {
    const [selectedTemplate, setSelectedTemplateState] = useState({});

    const setSelectedTemplate = (payload: any) => {
        setSelectedTemplateState(payload);
    };

    const value = useMemo(
        () => ({
            selectedTemplate,
            setSelectedTemplate,
        }),
        [selectedTemplate, setSelectedTemplate],
    );

    return <LandingPagesContext.Provider value={value}>{children}</LandingPagesContext.Provider>;
};

export default LandingPagesProvider;
