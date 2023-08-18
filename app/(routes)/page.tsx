

import Container from "../components/ui/container"

import ProductList from "../components/ui/product-list";
import getProductsHome from "@/actions/get-products-home";

import BillboardHome from "../components/ui/billboardHome";

export const revalidate = 60;
interface HomePageFeatured {
  id:         string;
  name:       string;
  userId:     string;
  isFeatured: boolean;
  createdAt:  string;
  updatedAt:  string;
  billboards: BillboardHome[];
  products:   ProductHome[];
}

interface BillboardHome {
  id:         string;
  storeId:    string;
  label:      string;
  imageUrl:   string;
  createdAt:  string;
  updatedAt:  string;
  atHomePage: boolean;
}

 interface ProductHome {
  id:            string;
  storeId:       string;
  categoryID:    string;
  subcategoryID: string;
  hasPrice:      boolean;
  isFeatured:    boolean;
  isArchived:    boolean;
  price:         string;
  name:          string;
  description:   string;
  createdAt:     string;
  updatedAt:     string;
  images:        string[]
}



const HomePage = async () => {

  let featured: HomePageFeatured[] = await getProductsHome()

  return (
    
    <Container>
      <div className="space-y-10 pb-10">
      {
        featured.map((feat: any)=>( 
          <>
            <BillboardHome data={feat}/> 
            <ProductList title={feat.name} items={feat.products} />  
          </>
      ))
      }
        
      </div>
    </Container>
  )
}



export default  HomePage