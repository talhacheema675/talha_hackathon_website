import { Product } from "@/utils/product";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Filitem({params}:{params:{slug:string}})
{
    let filterproduct;
    if(params.slug=="female")
    {
         filterproduct=Product.filter((Product)=>Product.category=="female");
    }
    else if(params.slug=="male")
    {
         filterproduct=Product.filter((Product)=>Product.category=="male");
    }
    else if(params.slug=="kids")
    {
         filterproduct=Product.filter((Product)=>Product.category=="kids");
    }
    else if(params.slug=="product")
    {
         filterproduct=Product.filter((Product)=>Product.category=="kids" ||Product.category=="male"||Product.category=="female" );
    }
    else{
        filterproduct=Product;
    }
    return(
        <div >
            <div className="grid  lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 grid-cols-1 gap-4 lg:p-32 md:p-32  pt-24 p-12">
                {filterproduct.map((item,index)=>{
                    return(
                        <div key={index} >
                            <Link href={`/detail/${item.id}`}>
                                <div className="flex flex-col "> 
                                    <div className="w-full "><Image src={item.image} alt="image" width={250} height={120} className="w-full h-max"/> </div>
                                    <div className="mt-2">
                                        <p className="text-lg font-bold">{item.name}</p> 
                                        <p className="text-gray-500 ">{item.cloth}</p> 
                                        <p className="font-bold">{item.price}</p>    
                                     </div>
                                </div>
                                </Link>

                        </div>
                    )
                })}
            </div>

        </div>
    );
};
