import styles from '@/styles'
import Link from 'next/link'
import React from 'react'

const BrandBanner = () => {
  return (
    <div className='relative w-full py-7 lg:py-3'>
        <div>
            <img src='/zara.png' alt='zara' className='object-contain' />
        </div>

        <img src='/zaraLogo1.png' alt='zaraLogo' className='absolute top-3 right-1 object-cover w-[550px]'/>
        <img src='/zaraLogo2.png' alt='zaraLogo' className='absolute lg:block hidden max-w-[191px] top-[30%] right-[40%]'/>

        <p className={`${styles.pStyle} text-white absolute top-[50%] w-[400px] right-[25%] lg:block hidden`}>Lustrous yet understated. The new evening
            wear collection exclusively offered at the
            reopened Giorgio Armani boutique in Los
            Angeles.
        </p>

        <Link className='absolute top-[65%] lg:right-[43%] right-3' href={``}>
            <button type='button' className='bg-white lg:p-4 p-2 text-[#505050]'>SEE COLLECTION</button>
        </Link>
    </div>

  )
}

export default BrandBanner