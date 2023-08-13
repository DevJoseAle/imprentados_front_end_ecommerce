import { Stores } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/stores`


const getStores = async () : Promise<any> =>{
    const res = await fetch(URL)

    return res.json()
}

export default getStores