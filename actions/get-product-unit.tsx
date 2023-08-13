import { Products } from '@/types';
import qs from 'query-string'


const URL = `${process.env.NEXT_PUBLIC_API_URL}`

//localhost:3000/api/



const getProductsUnit = async (storeId: string,  productId:string) : Promise<Products | any> =>{


     const res = await fetch(`${URL}/${storeId}/product/${productId}`)
    return res.json()
}

export default getProductsUnit