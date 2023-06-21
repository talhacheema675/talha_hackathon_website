
import { Button } from "@/component/ui/button"
import { Input } from "@/component/ui/input" 
const Banner=()=>
{
    return(
        <div className="text-center my-36">
        <div className="text-3xl font-bold"><p>Subscribe Our Newsletter</p></div>
        <div><p className=" text-8xl font-extrabold text-gray-200">Newsletter</p></div>
        <div className="-mt-16 text-lg"><p>Get the latest information and promo offers directly</p></div>
        <div className="flex flex-row  mt-10 justify-center">
        <Input type="email" placeholder="Email" className="w-96 mx-4 border border-black" />
        <Button type="submit" className="w-28 flex justify-center">Get Started </Button>
        </div>
        
        </div>
    )
}
export default Banner