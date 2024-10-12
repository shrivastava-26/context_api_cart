

import { createContext, useState } from "react";

// creating store 

export const cartContext = createContext(null);

// creating provider

export const CartProvider = (props) => {

    const [Items, setItems] = useState([]);

    return (
        <cartContext.Provider value={{Items, setItems}}>
            {props.children}
        </cartContext.Provider>

    );

};