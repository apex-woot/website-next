import { type FC } from 'react';
import { PoweredList } from '../common/powered-list';
import { MobileContent } from '../free-form/components/mobile-content';
import Hero from './components/hero/hero';
import { Services } from './components/services';

const LimitedOfferFormLanding: FC = () => (
    <>
        <Hero />
        <div style={{ backgroundColor: '#eff2f6' }}>
            <MobileContent />
        </div>
        <Services onClickAction="scroll" />
        <PoweredList
            provider={['BBB', 'AWS', 'Twilio']}
            itemClassname="[&>*]:h-10"
            wrapperClassname="items-center flex-col w-full gap-4 flex pb-10 md:hidden"
        />
    </>
);
export default LimitedOfferFormLanding;
