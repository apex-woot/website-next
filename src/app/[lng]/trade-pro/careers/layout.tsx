import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
    title: 'Terms',
    description:
        'Read and agree to our terms and conditions governing the usage of metadata provided by [Your Company Name]. Learn about the guidelines for accessing, sharing, and utilizing metadata on our website.',
};

export default function CareersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
