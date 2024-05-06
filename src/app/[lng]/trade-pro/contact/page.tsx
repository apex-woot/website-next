import { ContactSection } from '@components/app/contact';
import { Hero } from '@components/app/hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact',
    description:
        'Reach out to trades.org via our contact page. Find our contact details including phone number, email address, and physical location. Get in touch with our team for inquiries, support, or partnership opportunities.',
};
export default async function Contact({ params: { lng } }: { params: { lng: string } }) {
    return (
        <>
            <Hero
                lng={lng}
                subtitle="pages.contact.contact"
                defaultSubtitle="trades.org contact"
                titles={[
                    {
                        title: 'pages.contact.contactUs',
                        defaultTitle: 'Contact Us',
                    },
                ]}
            />
            <ContactSection lng={lng} />
        </>
    );
}
