import type { HeroProps } from 'react-daisyui';

export type TitlesType = {
    title: string;
    defaultTitle: string;
};

export interface HeroComponentProps extends HeroProps {
    BgImage?:
        | any
        | {
              type: 'svg';
              img: any;
          };
    ctaText?: string;
    defaultCtaText?: string;
    titles: TitlesType[];
    subtitle: string;
    defaultSubtitle: string;
    lng: string;
}
