"use client"
import { Billboard as BillboardType } from "@/types"
import { useEffect, useState } from "react"

interface BillboardProps{
    data: any
}


const Billboard: React.FC<BillboardProps> = ({data}) => {
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => {
      setIsMounted(true)
      
    }, [isMounted, data])
    
    if(!isMounted) return null
    
    console.log('BILLBOARD', data[0].imageUrl) 
    
  return (
    
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
        <div 
        style={{ backgroundImage: `url(${data[0]?.imageUrl})`}}
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        > 
            <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs ">
                    {data[0].label}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Billboard