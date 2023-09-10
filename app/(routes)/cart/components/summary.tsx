"use client";

import axios from "axios";
import { MouseEventHandler, useEffect } from "react";
import { useSearchParams } from "next/navigation";


import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";
import Currency from "@/app/components/ui/currency";
import Button from "@/app/components/ui/button";
import { Products } from "@/types";

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.deleteAll);
  const phoneNumber = '+56926087500';
  
  const itemsForWhatsappOrder = items.map((item)=>(
    `-${item.name} el cual tiene el valor de ${item.price}\n` 
  ).toString())

  
  const whatsappOrder: MouseEventHandler<HTMLButtonElement> = () =>{
      const whatsappMessage = encodeURIComponent(
    `¡Hola! Estoy interesado en hacer un pedido.\nEstoy interesado en comprar:\n${itemsForWhatsappOrder.toString().split(',').join('')}\nMuchas Gracias\n*Enviado desde link de pedido de imprentados.cl*`
        );
      const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}`;
      window.location.href = whatsappLink
      
 
  }

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Payment completed.');
      removeAll();
    }

    if (searchParams.get('canceled')) {
      toast.error('Something went wrong.');
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price)
  }, 0);

  const onCheckout = async () => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
      productIds: items.map((item) => item.id)
    });

    window.location = response.data.url;
  }

  return ( 
    <div
      className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 className="text-lg font-medium text-gray-900">
        Resumen del Pedido
      </h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Total del pedido</div>
         <Currency value={totalPrice} />
        </div>
      </div>
      <Button onClick={whatsappOrder} disabled={items.length === 0} className="w-full mt-6">
        Realizar Pedido Por Whatsapp
      </Button>

      {/* //!TODO, Checkout con flow */}
    </div>
  );
}
 
export default Summary;