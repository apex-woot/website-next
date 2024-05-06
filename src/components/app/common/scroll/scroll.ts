const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

export default scrollTo;
