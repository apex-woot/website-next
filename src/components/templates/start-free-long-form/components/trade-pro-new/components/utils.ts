const starColor = {
    ACTIVE_MARKED: '#FFC815',
    INACTIVE_MARKED: '#8C8C8C',
    UNMARKED: '#E6E6E6',
};

export const mapAmountToStarsArray = (starsAmount: number, active: boolean) => {
    const stars = new Array(5).fill(0).map((_, index) => {
        if (index >= starsAmount) return starColor.UNMARKED;
        return active ? starColor.ACTIVE_MARKED : starColor.INACTIVE_MARKED;
    });
    return stars;
};
