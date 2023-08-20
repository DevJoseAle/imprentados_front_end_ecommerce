import { Products } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/homepage`




const getProductsHome = async () : Promise<Products[]> =>{
    

    let resp = await fetch(URL, {next:{revalidate: 20}})
    let resp2 = resp.json()

    
    return resp2
}

export default getProductsHome