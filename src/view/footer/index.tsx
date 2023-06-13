import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Linkedin, Twitter } from "lucide-react"

const Footer=()=>
{
    return(
        <div>
            <div className="grid md:grid-cols-4 gap-24  m-20 text-gray-500">
                <div className="flex flex-col">
                    <div className="mb-4"> <Link href="#"><Image src="/logo.webp" alt="Logo Image" width={130} height={130}/></Link></div>
                    <div><p>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p></div>
                    <div className="flex flex-row gap-6 pt-4 text-black"> <Facebook/> <Twitter/> <Linkedin/> </div>
                </div>
                <div >
                    <p className="font-bold text-black text-xl ">Company</p>
                    <ul ><li className="pb-2 pt-4">About</li>
                        <li className="mb-2">Terms of Use</li>
                        <li className="mb-2">Privacy Policy</li>
                        <li className="mb-2">How it Works</li>
                        <li className="mb-2">Contact Us</li>
                    </ul>
                </div>
                <div>
                <p className="font-bold text-black text-xl">Support</p>
                    <ul><li className="mb-2 pt-4">Support Carrer</li>
                        <li className="mb-2">24h Service</li>
                        <li className="mb-2">Quick Chat</li>
                    </ul>
                </div>
                <div>
                <p className="font-bold text-black text-xl">Contact</p>
                    <ul><li className="mb-2 pt-4">Support Carrer</li>
                        <li className="mb-2">Whatsapp</li>
                        <li className="mb-2">Support 24h</li>
                    </ul>
                </div>

            </div>
            <div className=" flex md:flex-row flex-col  justify-between p-8 border border-t-2    border-black">
                <p>Copyright © 2022 Dine Market</p>
                <p>Design by. <b>Teksol Studio</b></p>
                <p>Code by. <b>Talha-Cheema on github</b></p>
            </div>
        </div>
    )
}
export default Footer