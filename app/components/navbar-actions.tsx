"use client"

import { ShoppingBag } from "lucide-react"
import Button from "./ui/button"
import { useEffect, useState } from "react"
import useCart from "@/hooks/use-cart"
import { useRouter } from "next/navigation"

const NavbarActions = () => {

    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => {
     setIsMounted(true)
    }, []);
    const router = useRouter();
    const cart = useCart();
    
    if(!isMounted){
      return null
    }

    

  return (
    <div className="ml-auto flex items-center gap-x-4">
        <Button
         className="flex items-center roundedfull bg-black px-4 py-2"
         onClick={()=>router.push('/cart')}
         >
           <ShoppingBag 
           size={20}
           color="white"
           /> 

           <span className="ml-2 text-sm font-medium text-white">
            {cart.items.length}
           </span>
        </Button>
    </div>
  )
}

export default NavbarActions