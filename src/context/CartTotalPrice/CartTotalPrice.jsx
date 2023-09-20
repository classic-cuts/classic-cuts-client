import { createContext, useState } from "react";
import CartProducts from "../../components/cart/CartProducts";

export const TotalPriceContext = createContext(null);

export const TotalPriceContextProvider = (props)=>{
    let total = 0;
    CartProducts.forEach((item) => {
    total += item.price;
    });

    const [totalPrice, setTotalPrice] = useState(total);
    return(
        <TotalPriceContext.Provider value={{totalPrice, setTotalPrice}}>
            {props.children}
        </TotalPriceContext.Provider>
    )
}
