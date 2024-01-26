import { WATCHLIST_KEY } from "./Constant";

export const getWatchlistFromLocalStorage = () => {
    const Watchlist = localStorage.getItem(WATCHLIST_KEY);

    let value;
    if(Watchlist) {
        value = JSON.parse(Watchlist);
    }
    else{
        value = [];
    }

    return value;
};