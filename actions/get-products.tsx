import { Products } from '@/types';
import qs from 'query-string'

// const URL = `${process.env.NEXT_PUBLIC_API_URL2}/product`
const URL = `${process.env.NEXT_PUBLIC_API_URL}`


interface Query {
    storeID?: string
    categoryID?: string
    subcategoryID?: string
    isFeatured?: boolean
}

const getProducts = async (id: string) : Promise<Products[] | any> =>{
    
    // const url = qs.stringifyUrl({
    //     url: URL,
    //     query:{
    //         categoryID: query.categoryID,
    //         storeID: query.storeID,
    //         subcategoryID: query.subcategoryID,
    //         isFeatured:query.isFeatured,

    //     }
    // })

    let myHeaders = new Headers();
    myHeaders.append("Cookie", "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDk0ZDVlOWNkYmQwNDZjZTMxZThkZGQiLCJlbWFpbCI6InRoaWFnb0Bnb29nbGUuY29tIiwiaWF0IjoxNjg3NTMzNTA3LCJleHAiOjE2OTAxMjU1MDd9.EoNNmdTONZTWhO0dBXbYKnl6B3ru8bZmnPKk6GI2jiU");

    let requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    const res = await fetch(`${URL}/${id}/product`, requestOptions)

    // const res = await fetch(`${URL}/${id}/product`)
    return res.json()
}

export default getProducts