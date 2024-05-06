import { atom } from 'nanostores';

export type TemplateType = {
    id: number;
    name: string;
    image: any;
};

export const template = atom<TemplateType | null>(null);
