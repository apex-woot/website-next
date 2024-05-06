import { AiOutlineMail } from '@react-icons/all-files/ai/AiOutlineMail';
import { BsChat } from '@react-icons/all-files/bs/BsChat';
import { BsMap } from '@react-icons/all-files/bs/BsMap';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FiFacebook } from '@react-icons/all-files/fi/FiFacebook';
import { FiInstagram } from '@react-icons/all-files/fi/FiInstagram';
import type { ContactDataProps } from './types';

const contactUsData: ContactDataProps = {
    links: {
        contact: [
            {
                icon: <AiOutlineMail size={20} fill="#888" />,
                text: 'contact@trades.org',
                defaultText: 'contact@trades.org',
                href: 'mailto:contact@trades.org',
                isBlank: false,
            },
            {
                icon: <BsChat size={20} fill="#888" />,
                text: '(512) 729-3544',
                defaultText: '(512) 729-3544',
                href: 'tel:(512)-729-3544',
                isBlank: false,
            },
            {
                icon: <BsMap size={20} fill="#888" />,
                text: '3605 Menchaca Rd, Austin TX, 78704',
                defaultText: '3605 Menchaca Rd, Austin TX, 78704',
                href: 'https://www.google.com/maps/place/3605+Manchaca+Rd,+Austin,+TX+78704/@30.2373563,-97.7847173,17z/data=!4m5!3m4!1s0x8644b4cd0a277389:0xd3e596f6ae453a7b!8m2!3d30.2373563!4d-97.7825286',
                isBlank: true,
            },
        ],
        socialNetworks: [
            {
                icon: <FaFacebook size={20} fill="#888" />,
                iconOutline: <FiFacebook size={24} stroke="#618faf" />,
                text: 'contactUs.fbText',
                defaultText: 'Like us on Facebook',
                href: 'https://www.facebook.com/trades.org',
                isBlank: true,
            },
            {
                icon: <FaInstagram size={20} fill="#888" />,
                iconOutline: <FiInstagram size={24} stroke="#618faf" />,
                text: 'contactUs.igText',
                defaultText: 'Follow us on Instagram',
                href: 'https://www.instagram.com/trades_org/',
                isBlank: true,
            },
        ],
    },
};

export default contactUsData;
