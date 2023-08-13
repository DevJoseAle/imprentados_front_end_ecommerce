import { Subcategory } from '@/types';



const getSubcategories = async (id: string) : Promise<Subcategory[]> =>{
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/${id}/subcategory`
    const res = await fetch(URL)
    
    return res.json()
}

export default getSubcategories