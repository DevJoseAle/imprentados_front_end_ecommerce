"use client"

import Image from "next/image"
import { Products } from "@/types"
import IconButton from "./iconbutton"
import { Expand, ShoppingCart } from "lucide-react"
import Currency from "./currency"
import { useParams, useRouter } from "next/navigation"


interface ProductCardProps{
    data: Products
}

const ProductCard: React.FC<ProductCardProps> = ({data}) => {
    const router = useRouter()
    const params = useParams();
    
    console.log(params.storesID)
    const handleClick = () =>{

        router.push(`${params.storesID}/product/${data?.id}`)

    }
    
  return (
    <div onClick={handleClick} className=" bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
        {/* IMG and Actions */}
        <div className="aspect-square rounded-xl bg-gray-100 relative">
     
                <Image 
                className=" aspect-square object-cover rounded-md"
                src={`${data.images?.[0]?.url}`} 
                alt="Imagen de producto" 
                fill 
                />

            <div className=" opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                <div className=" flex gap-x-6 justify-center">
                    <IconButton
                    onClick={()=>{}}
                    icon={<Expand size={20} className="text-gray-600"/> }
                    />
                    <IconButton
                    onClick={()=>{}}
                    icon={<ShoppingCart size={20} className="text-gray-600"/> }
                    />
                </div>
            </div>
        </div>
        {/* Description */}
        <div>
            <p className="font-semibold text-lg">
                {data.name}
            </p>
            <p className="text-gray-600 text-md">
                {data.category?.name}
                
            </p>
            <p className="text-gray-600 text-md">
                {data.subcategory.name}
            </p>
        </div>

        <div className="flex items-center justify-between">
            <Currency value={data?.price}/> 
        </div>

    </div>
  )
}

export default ProductCard