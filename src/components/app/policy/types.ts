export type BulletType = {
    bullet: string;
    defaultBullet: string;
};

export interface PolicyProps {
    data: {
        text: string;
        defaultText: string;
        title?: string;
        defaultTitle?: string;
        bullets?: BulletType[];
        link?: {
            text: string;
            defaultText: string;
            url: string;
        };
    }[];
    lng: string;
}

export interface ItemBulletProps {
    index: number;
    bullet: string;
}
