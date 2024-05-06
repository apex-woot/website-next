import { languages } from '@app/i18n/settings';
import * as React from 'react';

export function generateStaticParams() {
    return languages.map((lng) => ({ lng }));
}

export default function ComponentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
