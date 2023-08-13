import { Billboard, Products } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/product`


const getProduct = async (id:string) : Promise<Products> =>{
    const res = await fetch(`${URL}/${id}`)
    return res.json()
}

export default getProduct