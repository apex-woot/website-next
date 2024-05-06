import { ButtonComponentProps } from '@components/app/common/buttons';
import { PlanDetailsType } from '../types';

export interface PlanButtonProps extends ButtonComponentProps {
    plans: PlanDetailsType;
    lng: string;
}
