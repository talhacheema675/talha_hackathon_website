"use client"
import { FC, ReactNode, createContext, useState } from "react";
interface CartProviderProps {
    children?: React.ReactNode;
    initialCartValue: number;
  }
  
 const Cartval=createContext(0)
export const Context: FC<CartProviderProps> =({children,initialCartValue})=>{

    return(
        <div>
            
        <Cartval.Provider value={0}>
            {children}
        </Cartval.Provider>
        </div>
    )
}
export default Cartval