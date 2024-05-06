import type { TemplateType } from '@store/landing-store';

export type IconProps = {
    onClick?: () => void;
    pathD: string;
};

export type UtilsTemplatesType = {
    templates: TemplateType[];
};

export interface TemplateProps {
    template: TemplateType;
    selected: boolean;
    onClick: () => void;
    right: boolean;
    left: boolean;
}
