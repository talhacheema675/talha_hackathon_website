"use client"
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {NavigationMenu,NavigationMenuItem,NavigationMenuList,} from "@/component/ui/navigation-menu"
import { SearchIcon, ShoppingCart,MenuIcon } from "lucide-react"
import { Input } from "@/component/ui/input"
import { Button } from "@/component/ui/button"

  const Header=()=>
  {
    const [showdata,getdata]=useState(1)
    return(
        <nav className="flex flex-row">
            <div className="flex flex-col md:flex-row lg:flex-row justify-between px-8 md:w-full w-full h-max text-center bg-white fixed">
                <div  className="md:py-4 py-8 mt-1"> <Link href="#"><Image src="/logo.webp" alt="Logo Image" width={130} height={130} /></Link></div>
                <div className={`flex md:flex-row flex-col ${showdata%2!=0 ?"hidden md:flex":""}`}>
                    <div className={`flex text-base font-bold w-max md:flex-row flex-col `}> <NavigationMenu>
                            <NavigationMenuList className="flex flex-col md:flex-row">
                                <NavigationMenuItem className="lg:px-8 md:px-8 sm:px-1 px-1"><Link href="/items/female">Female</Link></NavigationMenuItem>
                                <NavigationMenuItem className="lg:px-8 md:px-8 sm:px-1 px-1"><Link href="/items/male">Male</Link></NavigationMenuItem>
                                <NavigationMenuItem className="lg:px-8 md:px-8 sm:px-1 px-1"><Link href="/items/kids">Kids</Link></NavigationMenuItem>
                                <NavigationMenuItem className="lg:px-8 md:px-8 sm:px-1 px-1"><Link href="/items/product">Product</Link> </NavigationMenuItem>
                            </NavigationMenuList>
                            </NavigationMenu>
                    </div>
                </div>
                <div className={`flex flex-col md:flex-row mt-1 ${showdata%2!=0 ?"hidden md:flex":""} `}>
                    <div className="flex flex-row my-3 border border-solid rounded-lg text-xs pr-8 h-7 "> 
                        <SearchIcon className="w-4 h-4 mt-1 mr-2" />
                        <input type="text" placeholder="What are you looking for?"/>
                    </div>
                    <div className="mt-3 md:pl-3 pl-20"><ShoppingCart  /></div>
                </div>
               <Button onClick={()=>getdata(showdata+1)} className="m-4 mt-7 md:hidden fixed top-1 right-2 "><MenuIcon/></Button>


            </div>
            

            
        </nav>
    )
  }
  export default Header
  