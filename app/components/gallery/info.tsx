"use client"
import { Products } from '@/types'
import React, { MouseEventHandler } from 'react'
import Currency from '../ui/currency';
import Button from '../ui/button';
import { ShoppingCart } from 'lucide-react';
import useCart from "@/hooks/use-cart"


interface Props {
    data: Products
}

const Info: React.FC<Props> = ({data}) => {
    const cart = useCart()

    const onAddToCart: MouseEventHandler<HTMLButtonElement> =(e)=>{
        e.stopPropagation();
        cart.addItem(data)
    }
  return (

    <div>
        <h1 className=' text-4xl font-bold text-gray-900'>
            {data.name.toLocaleUpperCase()} 
        </h1>
        <div className=' mt-3 flex items-end justify-between'>
            <p className=' text-2xl text-gray-900'>
            <Currency value={data?.price}/>
            </p>
        </div>
        <hr className='my-4' />
        <div className='flex flex-col gap-y-6'>

            <div className='flex items-center gap-x-4'>
                <h3 className='font-semibold text-black text-lg'> Categoria:</h3>
                <div className=' text-lg'> {data?.category?.name}</div>
            </div>
            <div className='flex items-center gap-x-4'>
                <h3 className='font-semibold text-black text-lg'> Subcategoria:</h3>
                <div className=' text-lg'> {data?.subcategory?.name}</div>
            </div>
            <div className='flex items-center gap-x-4'>
                <h3 className='font-semibold text-black text-lg'> Descripcion:</h3>
                <div className=' text-lg'> {data?.description}</div>
            </div>

            <div className='mt-10 flex items-center gap-x-3'>
                <Button className=' flex items-center gap-x-2' onClick={onAddToCart}>
                    Agregar a Carrito
                    <ShoppingCart />
                </Button>

            </div>
        </div>
    </div>
  )
}


export default Info