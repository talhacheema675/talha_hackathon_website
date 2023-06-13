import React from "react";
import Image from "next/image";
import { Product } from "@/utils/product";


const Body=()=>
{
    const filterproduct=Product.filter((Product)=>Product.id==1 || Product.id==4 || Product.id==10);
    return(

        <div >
            <div>
            <p className="text-blue-700 font-bold text-center mt-10">Products</p>
            <p className="text-3xl font-bold text-center p-10">Check What We Have</p>
            </div>
            
            <div className="flex lg:flex-row md:flex-row sm::flex-col flex-col justify-center mx-24 ">
                {filterproduct.map((item,index)=>{
                    return(
                        <div key={index} >
                                <div className="flex flex-col transition duration-300 hover:-translate-y-1 hover:scale-110"> 
                                    <div><Image src={item.image} alt="image" width={350} height={180}/> </div>
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


export default Body