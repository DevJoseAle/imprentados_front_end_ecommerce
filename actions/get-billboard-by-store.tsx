import { Billboard } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}`


const getBillboardByStoreId = async (storeId:string) : Promise<Billboard> =>{


    const res = await fetch(`${URL}/${storeId}/billboard`)
    return res.json();
}

export default getBillboardByStoreId

