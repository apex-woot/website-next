import { Footer } from '@components/templates/common/footer';
import { PoweredList } from '@components/templates/common/powered-list';
import { MobileContent } from '@components/templates/free-form/components/mobile-content';
import { Hero } from '@components/templates/limited-offer-form/components/hero';
import { Services } from '@components/templates/limited-offer-form/components/services';
import { type FC } from 'react';

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
        <div className="pt-6 md:pt-14">
            <Footer />
        </div>
    </>
);
export default LimitedOfferFormLanding;
