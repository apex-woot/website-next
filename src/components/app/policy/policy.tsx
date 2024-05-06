import { useTranslation } from '@app/i18n';
import { LinkButton } from '@components/app/common/buttons';
import React from 'react';
import { ItemBullet } from './components';
import type { PolicyProps } from './types';

export default async function Policy({ data, lng }: PolicyProps) {
    const { t } = await useTranslation(lng);

    return (
        <div className="max-w-6xl mx-auto px-10 md:px-5">
            {data.map((item, index) => (
                <div key={`term-${+index}`} className="list-none text-gray-400">
                    <h4 className="font-bold pb-4">{t(item?.title || '', item.defaultTitle || '')}</h4>
                    <p className="pb-6 text-justify">
                        {t(item.text, item.defaultText)}
                        {item.link && (
                            <LinkButton href={item.link.url} className="p-0 pl-1">
                                {t(item.link.text, item.link.defaultText)}
                            </LinkButton>
                        )}
                    </p>
                    {item.bullets && (
                        <ul className="pb-6">
                            {item.bullets.map((bulletObject, idx) => (
                                <ItemBullet
                                    key={`term-bullet-${+idx}`}
                                    bullet={t(bulletObject.bullet, bulletObject.defaultBullet)}
                                    index={idx}
                                />
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
}
