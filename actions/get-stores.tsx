import { Stores } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/stores`;


const getStores = async () : Promise<any> =>{

  const resp = await fetch(URL)
  .then(response => response.json())

return resp

}

export default getStores