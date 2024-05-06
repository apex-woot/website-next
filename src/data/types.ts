interface Contact {
    icon: React.ReactNode;
    text: string;
    defaultText: string;
    href: string;
    isBlank: boolean;
}

interface SocialNetwork extends Contact {
    iconOutline: React.ReactNode;
}

export interface ContactDataProps {
    links: {
        contact: Contact[];
        socialNetworks: SocialNetwork[];
    };
}
