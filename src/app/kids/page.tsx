import { Product } from "@/utils/product";
import Image from "next/image";
import React from "react";
const Kidcat=()=>
{
    const filterproduct=Product.filter((Product)=>Product.category=="kids");
    return(
        <div >
            <div className="flex flex-row justify-center gap-6 pt-32">
                {filterproduct.map((item,index)=>{
                    return(
                        <div key={index} >
                                <div className="flex flex-col "> 
                                    <div><Image src={item.image} alt="image" width={250} height={120}/> </div>
                                    <div className="mt-2">
                                        <p className="text-lg font-bold">{item.name}</p> 
                                        <p className="text-gray-500 ">{item.cloth}</p> 
                                        <p className="font-bold">{item.price}</p>    
                                     </div>
                                </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
export default Kidcat