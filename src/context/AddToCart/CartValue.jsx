import React, { createContext, useState } from 'react'

export const cartContext = createContext(null);

export const CartContextProvider = (props)=>{
    const [cartValue, setCartValue] = useState(0);
    return(
        <cartContext.Provider value={{cartValue, setCartValue}}>
            {props.children}
        </cartContext.Provider>
    )
}
