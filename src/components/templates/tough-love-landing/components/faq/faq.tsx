import { useTranslation } from '@app/i18n/client';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { type FC } from 'react';
import CutawayDesign from '~/images/Cutaway-Design-5.png';
import Featured1 from '~/images/pexels-andrea-piacquadio-37.png';
import Featured2 from '~/images/pexels-kindel-media-7578989-1.png';
import Featured3 from '~/images/science-in-hd-IU10leGdwxg-unsplash-1.png';
import { faqs } from './utils';

const FAQ: FC = () => {
    const { lng } = useParams<{lng: string}>();
    const { t } = useTranslation(lng);

    return (
        <section className="mx-auto bg-white ">
            <div className="w-full relative -top-16 [@media(min-width:1299px)]:h-[395px]">
                <Image className="w-full [@media(min-width:1299px)]:h-full" alt="" src={CutawayDesign} />
            </div>
            <div className="flex md:flex-row flex-col max-w-[1440px] mx-auto">
                <div className="md:w-5/12 w-full">
                    <div className="relative lg:-mt-48 -mt-32">
                        <Image
                            src={Featured1}
                            alt=""
                            className={`lg:max-w-lg md:max-w-xs md:max-height-xs
                            mx-auto lg:w-full lg:h-full w-64 h-64
                            [@media(min-width:768px)]:border-[30px] border-white rounded-full border-[15px]`}
                        />
                    </div>
                    <div className="text-right relative lg:-top-10 md:-mt-8 md:block hidden">
                        <Image src={Featured2} alt="" className="w-20 h-20 ml-auto rounded-full " />
                    </div>
                    <div className="pr-8 relative lg:-top-16  md:-top-12 -top-12 lg:-left-8 -left-8">
                        <Image
                            src={Featured3}
                            alt=""
                            className={`lg:w-52 lg:h-52 md:w-40 md:h-40 sm:w-36 sm:h-36 w-28 h-28 rounded-full
                            [@media(min-width:768px)]:border-[10px] border-[#eff2f6]`}
                        />
                    </div>
                </div>
                <div className="lg:w-1/2 w-full lg:pl-20 lg:pr-0">
                    <div className="px-6 lg:px-0">
                        <h1
                            className={`md:block hidden text-gray-800
                            leading-10 font-extrabold mb-8 text-4xl  max-sm:text-2xl`}
                        >
                            {t('toughLove.faq.title1', 'Answers to common')}
                            <br className="lg:block hidden" /> {t('toughLove.faq.title2', 'questions we receive...')}
                        </h1>
                        <h1
                            className={`md:hidden block text-gray-800
                            md:leading-10 leading-8 font-extrabold sm:pr-0 lg:pr-16 mb-12 `}
                        >
                            {t('toughLove.faq.title3', 'Here are some answers to common questions we get...')}
                        </h1>
                        {faqs.map((item, index) => (
                            <div className="w-full overflow-hidden" key={`faq-item-${index + 1}`}>
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className={`collapse collapse-arrow border-b
                                    border-base-300 bg-base-100 rounded-none`}
                                >
                                    <div className="collapse-title">
                                        <p className="text-lg font-semibold">{t(item.question, item.defaultQuestion)}</p>
                                    </div>
                                    <div className="collapse-content">
                                        <p className="pb-16px pl-0 pr-5 font-normal label-color text-base text-gray-500">
                                            {t(item.answer, item.defaultAnswer)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
