
import Container from '@/app/components/ui/container'
import React from 'react'
import Gallery from '@/app/components/gallery';
import Info from '@/app/components/gallery/info';
import getProductsUnit from '@/actions/get-product-unit';


interface ProductPageProps{ 
  params:{
    productID: string
    storesID: string
  }
}


const ProductPage: React.FC<ProductPageProps> = async ({params}) => {


  const product = await getProductsUnit(params.storesID, params.productID)


  return (
     
    <div className='bg-white'>

      <Container>
          <div className="px-4 py-10 sm:px-6 lg:px-8">
            <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
              <Gallery images={product?.images}/>
              <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
                {/* info */}
                <Info data={product}/>
              </div>
            </div>

            <hr className='my-10' />
            {/* <ProductList title='Otros Productos' items={suggestedProducts} /> */}

          </div>
      </Container>

    </div>
  )

}

export default ProductPage
