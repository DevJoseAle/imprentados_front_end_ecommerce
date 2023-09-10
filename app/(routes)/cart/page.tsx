"use client"

import Container from "@/app/components/ui/container";
import { useEffect, useState } from "react";
import CartItem from "./components/cart-item";
import Summary from "./components/summary";
import useCart from "@/hooks/use-cart";

export const revalidate = 60

const CartPage = () => {
    const [isMounted, setIsMounted] = useState(false)
    const cart = useCart();
    useEffect(() => {
     setIsMounted(true)
    }, []);

    if(!isMounted){
        return null
      }


  
  return (
    <div className="bg-white">
    <Container>
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-black">Items a Pedir</h1>
        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
          <div className="lg:col-span-7">
            {cart.items.length === 0 && <p className="text-neutral-500">NO hay items agregados al carrito</p>}
            <ul>
              {cart.items.map((item) => (
                <CartItem key={item.id} data={item} />
              ))}
            </ul>
          </div>
          <Summary />
        </div>
      </div>
    </Container>
  </div>

  )
}

export default CartPage