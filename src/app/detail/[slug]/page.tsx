import { Product } from "@/utils/product";
import Image from "next/image";
import { Button } from "@/component/ui/button";
import { ShoppingCart } from "lucide-react";
const Details=({params}:{params:{slug:number}})=>
{
  const exactproduct=Product.filter((Product)=>Product.id==params.slug);
  return(
    <div >
        <div className="p-36">
            {exactproduct.map((item,index)=>{
                return(
                    <div key={index} >
                            <div className="flex flex-row gap-8 flex-wrap"> 
                              <div> <Image src={item.image} alt="image" width="100" height={200} className="rounded-2xl"/></div>
                              <div> <Image src={item.image} alt="image" width="500" height={1200} className="rounded-2xl"/></div>
                              <div className="pt-10">
                                <p className="text-3xl "> {item.name}</p>
                                <p className="text-gray-500 text-2xl font-bold mb-10">{item.cloth}</p>
                                <p className="text-lg font-bold mb-">select size</p>
                                <Button className="rounded-full bg-slate-300 text-black mr-2">XS</Button>
                                <Button className="rounded-full bg-slate-300 text-black mr-2">S</Button>
                                <Button className="rounded-full bg-slate-300 text-black mr-2">M</Button>
                                <Button className="rounded-full bg-slate-300 text-black mr-2">L</Button>
                                <Button className="rounded-full bg-slate-300 text-black mr-2 mb-8">XL</Button>
                                <p className="font-bold mb-8">Quantity <input type="text" className="w-10  border-solid border-black border-2"/></p>
                                <p className="font-bold mb-8">Total : {item.price}</p>
                                <Button className="w-44"><ShoppingCart/> Add to Cart </Button>

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