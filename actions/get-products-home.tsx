import { Products } from '@/types';
import qs from 'query-string'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/product`
// "http://localhost:3000/api/00f2ed12-ac79-46b1-9980-bd4e05c348b1/product";

// `${process.env.NEXT_PUBLIC_API_URL2}/product`



const getProductsHome = async () : Promise<Products[] | any> =>{
    

    // const res = await fetch(URL)
    // return res.json()

    var myHeaders = new Headers();
    myHeaders.append("Cookie", "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDk0ZDVlOWNkYmQwNDZjZTMxZThkZGQiLCJlbWFpbCI6InRoaWFnb0Bnb29nbGUuY29tIiwiaWF0IjoxNjg3NTMzNTA3LCJleHAiOjE2OTAxMjU1MDd9.EoNNmdTONZTWhO0dBXbYKnl6B3ru8bZmnPKk6GI2jiU");

    let requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    let res = await fetch(URL, requestOptions);
    // .then(response => response.text())
    //  .then(result => console.log('DESDE GET PRODUCTS HOME',typeof result))
    // .catch(error => console.log('error', error));
    
    return res.json();
}

export default getProductsHome