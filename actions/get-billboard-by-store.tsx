import { Billboard } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}`


const getBillboardByStoreId = async (storeId:string) : Promise<Billboard> =>{
    // const res = await fetch(`${URL}/${id}/billboard`)
    // return res.json()
    let myHeaders = new Headers();
    myHeaders.append("Cookie", "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDk0ZDVlOWNkYmQwNDZjZTMxZThkZGQiLCJlbWFpbCI6InRoaWFnb0Bnb29nbGUuY29tIiwiaWF0IjoxNjg3NTMzNTA3LCJleHAiOjE2OTAxMjU1MDd9.EoNNmdTONZTWhO0dBXbYKnl6B3ru8bZmnPKk6GI2jiU");

    let requestOptions : RequestInit= {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
};

    const res = await fetch(`${URL}/${storeId}/billboard`, requestOptions)
    return res.json();
}

export default getBillboardByStoreId

//http://localhost:3000/api/48ba5244-8585-42fd-a669-fb2ea195c400/billboard