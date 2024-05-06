'use client';
import { useTranslation } from '@app/i18n/client';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function NotFound() {
    const { lng } = useParams<{lng: string}>();
    const { t } = useTranslation(lng);
    return (
        <main>
            <section className="bg-white">
                <div className="flex items-center flex-col justify-center py-14 sm:py-24 max-sm:px-6">
                    <div className="text-6xl font-bold text-gray-700">{t('pages.404.oops', 'Oops!')}</div>

                    <h2 className="text-2xl font-normal text-gray-600 my-6 text-center">
                        {t('pages.404.title', 'We can’t seem to find that page. Try visiting the home page.')}
                    </h2>
                    <div className="grid md:flex gap-4 justify-center">
                        <Link href="/" className="btn  no-underline">
                            <p className="px-8">{t('pages.404.homeButton', 'Home')}</p>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
