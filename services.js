export const getInitialCardsToShow = () => {
    const windowWidth = window.innerWidth;
    return {
        largeScreen: windowWidth >= 1024 ? 8 : windowWidth >= 768 ? 4 : 2,
        mediumScreen: windowWidth >= 768 ? 4 : 2,
        smallScreen: 2,
    };
};
