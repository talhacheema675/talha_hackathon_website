"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import {NavigationMenu,NavigationMenuItem,NavigationMenuList,NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/component/ui/navigation-menu"
import { SearchIcon, ShoppingCart } from "lucide-react"
import { Input } from "@/component/ui/input"

  const Header=()=>
  {
    return(
        <nav className="flex flex-row lg:px-20 md:px-20 sm:px-2 px-2 pt-8 lg:gap-28 md:gap-28 sm:gap-4 gap-4 w-full bg-white fixed  ">
            <div className="py-4"> <Link href="#"><Image src="/logo.webp" alt="Logo Image" width={130} height={130}/></Link></div>
            <div className="flex lg:text-base md:text-base text-xs lg:font-bold md:font-bold w-max "> <NavigationMenu>
                    <NavigationMenuList >
                        <NavigationMenuItem className="lg:px-8 md:px-8 sm:px-1 px-1"><Link href="/items/female">Female</Link></NavigationMenuItem>
                        <NavigationMenuItem className="lg:px-8 md:px-8 sm:px-1 px-1"><Link href="/items/male">Male</Link></NavigationMenuItem>
                        <NavigationMenuItem className="lg:px-8 md:px-8 sm:px-1 px-1"><Link href="/items/kids">Kids</Link></NavigationMenuItem>
                        <NavigationMenuItem className="lg:px-8 md:px-8 sm:px-1 px-1"><Link href="/items/product">Product</Link> </NavigationMenuItem>
                    </NavigationMenuList>
                    </NavigationMenu>
            </div>
            <div className="flex flex-row my-3 border border-solid rounded-lg text-xs pr-8 h-7 "> 
                <SearchIcon className="w-4 h-4 mt-1 mr-2" />
                <input type="text" placeholder="What are you looking for?"/>
            </div>
            <div className="mt-3"><ShoppingCart  /> </div>
        </nav>
    )
  }
  export default Header
  