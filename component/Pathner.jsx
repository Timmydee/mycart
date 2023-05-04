import React from 'react'
import styles from '@/styles'

// import Slider from 'react-slick'

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

const Pathner = () => {


  return (
    <div className={`${styles.innerWidth} ${styles.xPaddings} ${styles.yPaddings}`}>
        <div className='flex items-center justify-between'>
        {/* <div className='flex flex-wrap'> */}
            <img src='/brand1.png' alt='brand1' />
            <img src='/brand2.png' alt='brand2' />
            <img src='/brand3.png' alt='brand3' />
            <img src='/brand4.png' alt='brand4' />
            <img src='/brand2.png' alt='brand2' />
        </div>
    </div>
  )
}

export default Pathner