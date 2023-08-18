import { Products } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/homepage`




const getProductsHome = async () : Promise<Products[] | any> =>{
    

    const resp = await fetch(URL)
    .then(response => response.json())

    
    return resp
}

export default getProductsHome