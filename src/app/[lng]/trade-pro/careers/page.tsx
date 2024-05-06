'use client';
import { useEffect, useState } from 'react';

export default function Careers() {
    const [height, setHeight] = useState(800);

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            if (event?.data?.type === 'resize' || event?.data?.viewport?.height) {
                setHeight(event?.data?.viewport?.height);
            }
        };

        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);

    return (
        <iframe
            loading="lazy"
            title="Careers"
            frameBorder={0}
            src="https://tradesorg.retool.com/embedded/public/67ac2448-c8db-4a17-a19b-d46c7cbee38a"
            className="w-full h-full overflow-hidden block object-cover border-0"
            style={{ height: `${height}px` }}
        />
    );
}
