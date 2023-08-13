"use client"
import { priceFormatter } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

interface CurrencyProps{
    value?: string | number
}

const Currency: React.FC<CurrencyProps> = ({value}) => {
    const [isMounted, setisMounted] = useState(false)
    useEffect(() => {
      setisMounted(true)
    }, [])
    if(!isMounted) return null
  return (
    <>
    { value != 3 ? (
          <div className='font-semibold'>
            <p>Precio: </p>
            {priceFormatter.format(Number(value))}
          </div>
    )
    :
    (
        <div className='font-semibold'>
        <p className=' text-red-400 mt-3 text-center items-center'>COTIZAR</p>
        
      </div>
    )
    

      
    }
    </>

  )
}

export default Currency