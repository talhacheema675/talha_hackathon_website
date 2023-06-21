import { Button } from "@/component/ui/button";
import Image from "next/image";
import React from "react";
const Promotion=()=>
{
    return(
        <div>
            <div>
                <p className="text-blue-700 text-center font-bold my-4">PROMOTIONS</p>
                <p className="text-3xl font-bold text-center my-6">Our Promotions Events</p>
            </div> 
        <div className="flex md:flex-row lg:flex-row sm::flex-col flex-col justify-center gap-5">
            <div className="flex flex-col gap-4 lg:w-2/5 md:w-2/5 sm:w-full w-full">

                <div className=" flex flex-row bg-gray-300 justify-center h-60"> 
                <div className=" pt-8 h-44">
                    <p className="text-3xl font-bold ">GET UP<br/> TO 60%</p>
                    <p className="text-lg">For the<br/> summer<br/> season</p>
                </div>
                <div className="h-60"><Image src="/promotion1.webp" alt="promotion pic" height={100} width={300}className="h-56" /></div>
                </div>
                <div className="bg-gray-900 text-white text-center h-52 py-6">
                    <p className="text-4xl font-bold  flex justify-evenly ">GET 30% Off</p>
                    <p>USE PROMO CODE</p>
                    <Button className="bg-gray-800">DINEWEEKENDSALE</Button>
                </div>
            </div>
            <div className="flex flex-col-reverse  bg-red-100 h-max w-max pt-6 px-4">
                <div ><Image src="/promotion2.webp" alt="promotion pic" height={100} width={300}className="justify-center" /></div>
                <div className="text-lg pl-4">
                    <p className=" ">Flex Sweatshirt</p>
                    <p><del>$100.00</del><b className="font-bold pl-2"> $75.00</b></p>
                </div>
            </div>
            <div className="flex flex-col-reverse bg-gray-300 h-max w-max pt-6 px-4" >
            <div ><Image src="/promotion3.webp" alt="promotion pic" height={100} width={300} className="justify-center"/></div>
                <div className="text-lg pl-4 ">
                    <p>Flex Push Button Bomber</p>
                    <p><del>$225.00$</del><b className="font-bold pl-2"> $190.00</b></p>
                </div>
            </div>


        </div>
        </div>
    )
}

export default Promotion