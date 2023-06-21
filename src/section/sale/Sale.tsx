import Image from "next/image";
import female1 from "@/assets/images/fe1.webp";
import { Button } from "@/component/ui/button";
const Sale=()=>
{
    return(
        <div className="bg-gray-100 lg:p-12 md:p-12 sm:p-4 p-4  mt-16">
            <div className="grid grid-cols-3 mb-24  ">
                <p ></p>
                <p></p>
                <p className="flex justify-center lg:text-6xl md:text-6xl sm:text-3xl text-3xl font-bold">Unique and Authentic Vintage Designer Jewellery</p></div>
            <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col justify-between">
                <div className="grid grid-cols-2 gap-24 text-lg">
                    <div><p><b>Using Good Quality Materials</b><br/>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p></div>
                    <div><p><b>100% Handmade Products</b><br/>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p></div>
                    <div><p><b>Modern Fashion Design</b><br/>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p></div>
                    <div><p><b>Modern Fashion Design</b><br/>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p></div>
                </div>
                <div className=" flex flex-row lg:w-2/3 md:w-2/3 sm:w-full w-full ">
                    <div><Image src={female1} alt="image" width={"2000"} height={"3200"} className="h-80"/></div>
                    <div className="flex flex-col px-8 text-base ">
                        <p>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                        <Button className="w-28 h-16 mt-12">See All Products</Button>
                    </div>
                </div> 
            </div>
            

        </div>
    )
}

export default Sale