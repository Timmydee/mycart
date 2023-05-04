import React from 'react'
import Link from 'next/link'
import styles from '@/styles'
import { urlFor } from '@/lib/client'

const HeroBanner = ({heroBanner}) => {
  return (
    <div className={`${styles.innerWidth} ${styles.xPaddings} pt-14 bg-gray-800 bg-opacity-5 flex lg:flex-row items-center lg:justify-between flex-col `}>
      <div className=''>
        <h1 className={`${styles.h1Style}`}>{heroBanner.product}</h1>
        <h5 className={`${styles.h5Style} max-w[682px] py-8`}>{heroBanner.desc}</h5>
        
        <Link href={`/product/${heroBanner.product} `}>
          <button type='button' className='bg-red-500 p-4 rounded-2xl text-white'>SHOP NOW</button>
        </Link>
      </div>


      <div className='pt-5 lg:pt-0'>
        <img src={urlFor(heroBanner.image).url()} alt='headphones' className='' />
      </div>
    </div>
  )
}

export default HeroBanner