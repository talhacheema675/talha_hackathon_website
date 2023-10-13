import React from "react";
import Image from "next/image";
import Link from "next/link";
import client from "@/lib/sanityClient"
import { urlForImage } from "../../../../sanity/lib/image";
import getdaata from "@/lib/getdata";

export default async function Filitem({params}:{params:{slug:string}})
{

    let filterproduct;
    if(params.slug=="female")
    {
         filterproduct= await getdaata("female",0);
    }
    else if(params.slug=="male")
    {
         filterproduct=await getdaata("male",0);
    }
    else if(params.slug=="kids")
    {
         filterproduct=await getdaata("kids",0);
    }
    else if(params.slug=="product")
    {
         filterproduct=await getdaata("",2);
    }
    else{
        filterproduct=await getdaata("",2)
    }
    return( 
        <div >
            <div className="grid  lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 grid-cols-1 gap-4 lg:p-32 md:p-32  pt-24 p-12">
                {filterproduct.map((item:any,index:any)=>{
                    return(
                        <div key={index} >
                            <Link href={`/detail/${item.id}`}>
                                <div className="flex flex-col "> 
                                    <div className="w-full "><Image src={urlForImage(item.image).url()} alt="image" width={250} height={120} className="w-full h-max"/> </div>
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
