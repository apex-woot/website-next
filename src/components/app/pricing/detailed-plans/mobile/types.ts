import { DetailPlanType, PlanType } from '../../types';

export type PlanDataType = {
    basic: boolean;
    premium: boolean;
    essential: boolean;
};

export type PlanStateType = {
    support: PlanDataType;
    features: PlanDataType;
    reporting: PlanDataType;
};

export type TableProps = PlanType & {
    data: string;
    planKey: string;
    children: string;
    details: DetailPlanType[];
};
