'use client';
import LinkButton from '@components/app/common/buttons/components/link-button';
import { ChatBubbleBottomCenterIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { type FC } from 'react';

const ContactLinks: FC = () => (
    <>
        <LinkButton className="p-[5px]" href="mailto:contact@trades.org" icon={<EnvelopeIcon className="w-5 h-5 text-gray-400" />} />
        <LinkButton className="p-[5px]" href="tel:(512)-729-3544" icon={<ChatBubbleBottomCenterIcon className="w-5 h-5 text-gray-400" />} />
        <LinkButton className="p-[5px]" href="tel:(512)-729-3544" icon={<PhoneIcon className="w-5 h-5 text-gray-400" />} />
    </>
);

export default ContactLinks;
