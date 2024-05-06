import { StaticImageData } from 'next/image';

export type TemplateType = {
    id: number;
    name: string;
    image: StaticImageData;
};

export type TextDataType = {
    head: string;
    defaultHead: string;
    body: string;
    defaultBody: string;
};
