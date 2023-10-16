import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const cartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartProvider = ({children})=>{
    const [foods,setFoods] = useState([{}]);
    return (<cartContext.Provider value={{foods,setFoods}}>{children}</cartContext.Provider>)
}