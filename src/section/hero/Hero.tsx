import React from "react";
import Image from "next/image";
import { Button } from "@/component/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
const Hero=()=>
{

    return(
        <div className="flex md:flex-row lg:flex-row sm:flex-col flex-col gap-8 pt-24">
            <div className="flex flex-col gap-12 p-16">
                    <Button className="w-32 h-10 bg-blue-200 text-blue-800 font-bold hover:bg-blue-200">Sale 70%</Button>
                    <p className="text-5xl font-bold">An Industrial Take <br/>on Streetwear</p>
                    <p className="text-grey-400">Anyone can beat you but no one can beat<br/> your outfit as long as you wear Dine outfits.</p>
                    <Link href="/all_products"><Button className="w-36 h-16"><ShoppingCart className=""/> Start Shopping</Button></Link>
                    <div className="flex flex-row gap-9">
                        <Image src={"/hero1.webp"} alt="Image" width="90" height="40"/>
                        <Image src={"/hero2.webp"} alt="Image" width="90" height="40"/>
                        <Image src={"/hero3.webp"} alt="Image" width="90" height="40"/>
                        <Image src={"/hero4.webp"} alt="Image" width="90" height="40"/>
                    </div>
            </div>

            <div className="lg:w-1/2 md:w-1/2 sm:w-screen w-screen h-screen flex align-middle pt-10 rounded-full overflow-visible bg-red-100"> <Image src="/hero.webp" alt="main pic" width="200" height="96" className="w-full h-full -mt-8 pl-10"/></div>

        </div>
    )
}
export default Hero