"use client"
import { Products } from '@/types'
import React from 'react'
import Currency from '../ui/currency';
import Button from '../ui/button';
import { ShoppingCart } from 'lucide-react';

interface Props {
    data: Products
}

const Info: React.FC<Props> = ({data}) => {
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

            <div className='mt-10 flex items-center gap-x-3'>
                <Button className=' flex items-center gap-x-2'>
                    Agregar a Carrito
                    <ShoppingCart />
                </Button>

            </div>
        </div>
    </div>
  )
}


export default Info