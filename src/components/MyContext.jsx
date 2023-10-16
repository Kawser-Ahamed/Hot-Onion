import { createContext, useState} from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const myContext = createContext({name:'',});

// eslint-disable-next-line react/prop-types
export const CartProviderr = ({children}) =>{
    const [name,setName] = useState('Kawser');
    return (<myContext.Provider value={{name,setName}}>{children}</myContext.Provider>)
}

// eslint-disable-next-line react/prop-types
export const CartProvider2 = ({children}) =>{
    const [name,setName] = useState('Kawser');
    return (<myContext.Provider value={{name,setName}}>{children}</myContext.Provider>)
}