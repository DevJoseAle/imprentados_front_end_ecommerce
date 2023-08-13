
import getCategory from "@/actions/get-category";
import getProducts from "@/actions/get-products";
import getSubcategories from "@/actions/get-subcategories";
import Billboard from "@/app/components/ui/billboard";

import Filter from "./components/filter";
import Container from "@/app/components/ui/container";
import getCategories from "@/actions/get-categories";
import NoResults from "@/app/components/ui/noResults";
import ProductCard from "@/app/components/ui/productCard";
import getStores from "@/actions/get-stores";
import getBillboard from "@/actions/get-billboard";
import getBillboardByStoreId from "@/actions/get-billboard-by-store";
import { useParams } from "next/navigation";
import getProductsHome from "@/actions/get-products-home";



export const revalidate = 0;

interface StorePageProps{
  params:{
    storesID: string
  },
  searchParams:{
    subcategoryID: string
  }
}

const StorePage: React.FC<StorePageProps> = async ({
  params,
  searchParams
}) => {

  const products = await getProducts(params.storesID)



  const subcategories = await getSubcategories(params.storesID)
  const billboard = await getBillboardByStoreId(params.storesID);
  const categories = await getCategories(params.storesID)
  return (
    <div className=" bg-white">
      <Container>
        <Billboard data={billboard} /> 

          <div className=" px-4 sm:px-6 lg:px-8 pb-24">
            <div className=" lg:grid lg:grid-cols-5 lg:gap-x-8">
              <div className=" hidden lg:block">
                <Filter 
                  valueKey="subcategoryID" 
                  name="Subcategorias"
                  data={subcategories}
                  />
                <Filter 
                  valueKey="subcategoryID" 
                  name="Categorias"
                  data={categories}
                  />
              </div>
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
            {
              products.length === 0 && <NoResults />
            }  
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {
                products.map((item:any) =>(
                  <ProductCard data={item} key={item.id} />
                ))
              }
            </div>
            </div>
          </div>
      </Container>
    </div>
  )
}

export default StorePage