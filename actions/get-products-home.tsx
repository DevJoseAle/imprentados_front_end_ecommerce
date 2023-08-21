import { Products } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}`




const getProductsHome = async () : Promise<Products[]> =>{
    

    let resp = await fetch( `${URL}/homepage`, {cache: 'no-store'})
    let resp2 = resp.json()

    
    return resp2
}

export default getProductsHome