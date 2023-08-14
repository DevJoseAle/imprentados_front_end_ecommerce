import { Products } from '@/types';
import qs from 'query-string'

// const URL = `${process.env.NEXT_PUBLIC_API_URL2}/product`
const URL = `${process.env.NEXT_PUBLIC_API_URL}`


interface Query {
    storeID?: string
    categoryID?: string
    subcategoryID?: string
    isFeatured?: boolean
}

const getProducts = async (id: string) : Promise<Products[] | any> =>{
    
   
    let res = await fetch(`${URL}/${id}/product`)

    // const res = await fetch(`${URL}/${id}/product`)
    return res.json()
}

export default getProducts