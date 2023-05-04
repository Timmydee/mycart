
import { Footer, FooterBanner, HeroBanner, Product } from '@/component'
import styles from '@/styles'

import client from '@/lib/client'
import Pathner from '@/component/Pathner'
import BrandBanner from '@/component/BrandBanner'
import NewsLetter from '@/component/Newsletter'


const Home = async () => {
  const dataBanner = await getDataBanner()
  const dataProduct = await getDataProduct()

  return (
    <div className=''>
      <HeroBanner heroBanner={dataBanner.length && dataBanner[0]} />

      {/* <Pathner /> */}
    
      <div className='flex flex-col items-center justify-center'>
        <h2 className={`${styles.h2Style} pt-8`}>Best Selling Products</h2>
      </div>

      <div className={`grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 ${styles.innerWidth} lg:pt-8 pt-4`}>
        {dataProduct?.map((produce) => <Product product={produce} key={produce._id}/>)}
          {console.log(dataProduct)}
      </div>

      <BrandBanner />

      {/* <NewsLetter /> */}

    </div>
  )

}


async function getDataBanner() {
  const bannerData = await client.fetch(`*[_type == "banner"]`)
  return bannerData;
}

async function getDataProduct() {
  const products = await client.fetch(`*[_type == "product"]`)
  return products;
}


export default Home


