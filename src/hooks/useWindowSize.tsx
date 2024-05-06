import { useEffect, useState } from 'react';

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: Number.NaN,
        height: Number.NaN,
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            };

            window.addEventListener('resize', handleResize);
            handleResize();

            return () => window.removeEventListener('resize', handleResize);
        }
        return () => undefined;
    }, []);

    return {
        screenWidth: windowSize.width,
        screenHeight: windowSize.height,
    };
};

export default useWindowSize;
