import { Product } from "@/utils/product";
import Image from "next/image";
import React from "react";
const Allcat=()=>
{   return(
        <div >
            <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 grid-cols-1 justify-center gap-6  p-24 lg:pl-24 md:pl-24 sm:pl-32 pl-32">
                {Product.map((item,index)=>{
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
export default Allcat