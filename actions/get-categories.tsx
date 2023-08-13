import { Category } from '@/types';



const getCategories = async (id:string) : Promise<Category[]> =>{
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/${id}/categories`
    const res = await fetch(URL)

    return res.json()
}

export default getCategories