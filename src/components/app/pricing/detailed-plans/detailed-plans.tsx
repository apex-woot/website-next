import React from 'react';
import { DesktopPricing } from './desktop';
import { MobilePricing } from './mobile';

export default async function DetailedPlans({ lng }: { lng: string }) {
    return (
        <div className="bg-white" id="detailedPlans">
            <div className="max-w-7xl mx-auto bg-white py-16 sm:py-24 sm:px-6 lg:px-8">
                {/* xs to lg */}
                <MobilePricing lng={lng} />
                {/* lg+ */}
                <DesktopPricing lng={lng} />
            </div>
        </div>
    );
}
