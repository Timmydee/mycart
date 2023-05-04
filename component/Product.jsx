import React from 'react'
import { urlFor } from '@/lib/client'
import Link from 'next/link'
import styles from '@/styles'

const Product = ({product: {image,name,slug, price, category, details}}) => {
  return (
    <div className={`${styles.xPaddings} lg:py-4 py-8 `}>
      <Link className='' href={`/product/${slug.current}`}>
        <div className='max-w-[312px]'>
          <div className=''>
            <img
              src={urlFor(image && image[0]).width(250).height(400).url()} 
              alt={name}
              className='bg-[#ebebeb] rounded transition-transform'
            />
          </div>
          
          <div>
            <p className={` ${styles.pStyle}`}>{name}</p>
            <div className={`flex items-center justify-between`}>
              <p className={` ${styles.p2Style}`}>{details}</p>
              <p className={` ${styles.pStyle}`}>${price}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Product