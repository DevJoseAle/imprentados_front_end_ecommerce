

import Container from "../components/ui/container"

import ProductList from "../components/ui/product-list";
import getProductsHome from "@/actions/get-products-home";

import BillboardHome from "../components/ui/billboardHome";



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
  
  let featured: HomePageFeatured[] | any = await getProductsHome()


  return (
    <div className=" bg-white">

    <Container background="bg-white">
      <div className="space-y-10 pb-10 bg-white">
      {
        featured.map((feat: any)=>( 
          <div key={feat.name}>
            <BillboardHome data={feat}/> 
            <ProductList title={feat.name} items={feat.products} />  
          </div>
      ))
    }
        
      </div>
    </Container>
    </div>
  )
}



export default  HomePage


