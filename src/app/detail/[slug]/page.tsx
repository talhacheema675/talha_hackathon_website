"use client"
import Image from "next/image";
import { Button } from "@/component/ui/button";
import { ShoppingCart } from "lucide-react";
import { useState,useContext,useEffect } from "react";
import Cartval, { Context } from "@/lib/ucontext";
 import { urlForImage } from "../../../../sanity/lib/image";
 import getdaata from "@/lib/getdata";
const Details= ({params}:{params:{slug:number}})=>
{

  const [getvalue,setvalue]= useState(1)
  let [scart,getcart]=useState(0)
  let [setabc,getabc]= useState([]);
 
  useEffect(()=>
  {
    const gettingdata= async()=>
    {
      let exactproduct= await getdaata(params.slug,1);
      getabc(exactproduct)
    };
    gettingdata()
  },[params.slug]); 
 
  return(
    <div >
        <div className="lg:p-24 md:p-24 p-6 pt-24">
            {setabc.map((item:any,index:any)=>{
                return(
                    <div key={index} >
                            <div className="flex lg:flex-row md:flex-row flex-col "> 
                            <div className="flex flex-row lg:w-2/3 md:w-2/3 w-full md:h-max h-96  gap-2 lg:m-6 md:m-6 m-1 ">
                              <div className="flex flex-col gap-2"> 
                                  <Image src={urlForImage(item.image).url()} alt="image" width="100" height={200} className="rounded-2xl cursor-pointer "/>
                                  <Image src={urlForImage(item.image).url()} alt="image" width="100" height={200} className="rounded-2xl  cursor-pointer"/>
                                  <Image src={urlForImage(item.image).url()} alt="image" width="100" height={200} className="rounded-2xl  cursor-pointer"/>
                              </div>
                              <div className=" w-full h-full"> <Image src={urlForImage(item.image).url()} alt="image" width="500" height="1200" className="rounded-2xl w-full h-full"/></div>
                              </div>
                              <div className="flex flex-col pt-16">
                                <p className="text-3xl "> {item.name}</p>
                                <p className="text-gray-500 text-2xl font-bold mb-10">{item.cloth}</p>
                                <p className="text-lg font-bold mb-">select size</p>
                                <div className="flex flex-row"><Button className="rounded-full bg-slate-300 text-black mr-2">XS</Button>
                                <Button className="rounded-full bg-slate-300 text-black mr-2">S</Button>
                                <Button className="rounded-full bg-slate-300 text-black mr-2">M</Button>
                                <Button className="rounded-full bg-slate-300 text-black mr-2">L</Button>
                                <Button className="rounded-full bg-slate-300 text-black mr-2 mb-8">XL</Button>
                                </div>
                                <div className="font-bold mb-8 flex flex-row">
                                            <p className="pr-4">Quantity</p> 
                                            <button onClick={()=>getvalue>1?setvalue(getvalue-1):""} className="text-2xl font-bold mx-6 text-center w-8 h-8 rounded-full bg-gray-300 hover:bg-gray-700">-</button>
                                            <p>{getvalue}</p>    
                                            <button onClick={()=>setvalue(getvalue+1)} className="text-2xl font-bold mx-6 text-center w-8 h-8 rounded-full bg-gray-300 hover:bg-gray-700">+</button></div>
                                <p className="font-bold mb-8">Total : {item.price}</p>
                                
                                <Button className="w-44" onClick={()=>{getcart(scart+1)}}><ShoppingCart/> Add to Cart </Button>
                                <Context initialCartValue={scart}/>
                                <p>value:{scart}</p>
                              </div>
                            </div>
                    </div>
                )
            })}
        </div>

    </div>
);
}
  export default Details;