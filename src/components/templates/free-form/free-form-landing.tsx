import { type FC } from 'react';
import { PoweredList } from '../common/powered-list';
import { Hero } from './components/hero';
import { MobileContent } from './components/mobile-content';

const FreeFormLanding: FC = () => (
    <div className="relative">
        <Hero />
        <MobileContent />
        <div className="md:hidden flex place-content-center pb-8">
            <PoweredList provider={['AWS', 'Twilio', 'Google']} />
        </div>
    </div>
);

export default FreeFormLanding;
