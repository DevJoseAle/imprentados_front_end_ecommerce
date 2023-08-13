import { Stores } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/stores`;


const getStores = async () : Promise<any> =>{

    var myHeaders = new Headers();
    myHeaders.append("Cookie", "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDk0ZDVlOWNkYmQwNDZjZTMxZThkZGQiLCJlbWFpbCI6InRoaWFnb0Bnb29nbGUuY29tIiwiaWF0IjoxNjg3NTMzNTA3LCJleHAiOjE2OTAxMjU1MDd9.EoNNmdTONZTWhO0dBXbYKnl6B3ru8bZmnPKk6GI2jiU");

    var requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

const resp = await fetch(URL, requestOptions)
  .then(response => response.json())

return resp

}

export default getStores