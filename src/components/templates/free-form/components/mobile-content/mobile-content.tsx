'use client';
import { useTranslation } from '@app/i18n/client';
import { scrollTo } from '@components/app/common/scroll';
import { CheckCircleIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { bulletPoints } from '@components/templates/common';
import { BulletList } from '@components/templates/common/bullet-list';
import { Button } from '@components/templates/common/button';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { type FC } from 'react';

const MobileContent: FC = () => {
    const { lng } = useParams<{lng: string}>();
    const { t } = useTranslation(lng);

    return (
        <div className="md:hidden block">
            <div className={'mx-auto'}>
                <div id="bullets" className="px-6 pb-16">
                    <Link href="#bullets" className="text-center block w-14 h-14 mx-auto relative -top-8">
                        <Button size="lg" shape="circle" className="rounded-full border-none  bg-white hover:bg-white/80" type="button">
                            <ChevronDownIcon className="w-10 h-10 text-primary" />
                        </Button>
                    </Link>
                    <h1 className="text-gray-800 leading-9 font-extrabold mb-12" style={{ fontSize: '32px', letterSpacing: '-1.6px' }}>
                        {t('common.onlinePresence', "We'll help you take your online presence to the next level...")}
                    </h1>

                    <BulletList items={bulletPoints} icon={<CheckCircleIcon className="w-8 h-8 text-sky" />} />

                    <div className="pt-6">
                        <Button color="red" className="w-full" onClick={() => scrollTo('form')}>
                            {t('common.getStartedButton', 'Get started for free').toUpperCase()}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MobileContent;
