import type { DetailPlanType, PlanType } from '@components/app/pricing/types';

export type PlanFeaturesProps = PlanType & { index: number };
export type DetailProps = { data: string; details: DetailPlanType[] } & PlanType;

export interface TooltipProps {
    message: string;
    colSpan?: number;
    children: string;
}
