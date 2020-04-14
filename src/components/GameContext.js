import React from "react";
import usePersistedState from "../hooks/use-persisted-state.hook" 

export const GameContext = React.createContext(null);

export const GameProvider = ({ children }) => {
    const [purchasedItems, setPurchasedItems] = usePersistedState("purchased-items", {
        cursor: 0,
        grandma: 0,
        farm: 0
    });
    
    const [numCookies, setNumCookies] = usePersistedState("num-cookies", 1000);

    return <GameContext.Provider value={{numCookies, setNumCookies, purchasedItems, setPurchasedItems}}>
            {children}
        </GameContext.Provider>;
}