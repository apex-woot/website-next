export type TradeProType = {
    name: string;
    defaultName: string;
    noReviews: number;
    stars: number;
    img: string;
    classes: string;
    active: boolean;
    showStars?: boolean;
};

export interface CardViewsProps {
    tradePros: TradeProType[];
}
