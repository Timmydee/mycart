'use client'
import React,{useState} from 'react'
import client from './client'
import { urlFor } from './client'
import styles from '@/styles'
// import {client, urlFor} from './client'
// import {useStateContext} from '../context/StateContext'

const ProductItem = async ({slug}) => {
    const [index, setIndex] = useState(0)

    const products = await getallProduct(slug)
    const dataProduct = await getDataProduct()

    const {image, name, details, price} = products
    // const {incQty, decQty, quantity} = useStateContext();

    console.log(products)
    console.log(dataProduct)

    // function setImage(i){
    //   setIndex(i)
    //   console.log(i)
    // }

  return (
    <div className={`${styles.innerWidth} ${styles.xPaddings} pt-10 flex justify-center`}>
      <div className={`flex lg:flex-row flex-col space-x-4`}>
          <div className='flex flex-col space-y-4'>
            <img src={urlFor(image && image[index]).width(400).url()} alt={name} className='object-contain mr-8' />
            
            <div className='flex space-x-4'>
              {image.map((item, i) => (
                <img src={urlFor(item).width(70).height(70).url()} 
                  // onMouseEnter={setImage(i)}
                  onClick={() => setIndex(i)}
                  className=''
                />
              ))}
            </div>

          </div>
          <div className='m-14'>
            <h1 className={`${styles.h5Style}`}>{name}</h1>
            <h2>Details: </h2>        
            <p className={`${styles.pStyle}`}>{details}</p>
            <br />
            <p className={`${styles.h5Style2}`}>${price}</p>

            <div className='flex flex-row space-x-3'>
              <h5>Quantity</h5>
              <div>
                <div className='flex flex-row border p-10 w-6 h-5'>
                  <span className='p-3'>+</span>
                  <span >0</span>
                  <span className='p-3'>-</span>
                </div>
              </div>
            </div>

            <div className='w-full flex space-x-8'>
              {/* <button type='button' className=' border p-6'>Add to Carts</button> */}
              <button type='button' className='bg-white p-4 text-[#505050]'>Add to Cart</button>
              <button type='button' className='bg-white p-4 text-[#505050]'>Buy Now</button>
              {/* <button type='button' className=' border p-6'>Buy Now</button> */}
            </div>
          </div>
      </div>

      <div>

      </div>
    </div>
  )
}

async function getDataProduct() {
    const dataProduct = await client.fetch(`*[_type == "product"]`)
    return dataProduct;
}
  
async function getallProduct(slug) {
    const products = await client.fetch(`*[_type == "product" && slug.current == '${slug}'][0]`)
    return products;
}

export default ProductItem