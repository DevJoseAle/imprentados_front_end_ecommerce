import { Billboard } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboard`


const getBillboard = async () : Promise<Billboard[]> =>{

    

    const res = await fetch(`${URL}/billboard`)
    return res.json();
}

export default getBillboard

//http://localhost:3000/api/48ba5244-8585-42fd-a669-fb2ea195c400/billboard