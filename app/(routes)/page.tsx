
import getBillboard from "@/actions/get-billboard";
import Container from "../components/ui/container"
import getProducts from "@/actions/get-products";
import ProductList from "../components/ui/product-list";
import getProductsHome from "@/actions/get-products-home";
import getBillboardByStoreId from "@/actions/get-billboard-by-store";
import getStores from '@/actions/get-stores';
import { Billboard, Stores } from "@/types";




const HomePage = async () => {

  
  const stores: Stores[] = await getStores() 
  
  const billboard = await getBillboard()
  return (
    
    <Container>
      <div className="space-y-10 pb-10">

        {
          stores.map((store) =>(
            <p key={store.id}> {store.name}</p>
          ))
        }
     
        { billboard.map((billboard) =>(
          <>
           {/* <Billboard data={billboard} />
           <div className=" flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
           <ProductList title={'Productos'} items={products2} /> 
           </div>
           <Billboard data={billboard} />
           <div className=" flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
           <ProductList title={'Productos'} items={products2} /> 
           </div>   */}
          </>
        ))
           
        }
      </div>
    </Container>
  )
}

export default HomePage
 