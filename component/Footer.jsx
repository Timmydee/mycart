import styles from '@/styles'
import React from 'react'

import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className={`${styles.innerWidth} ${styles.xPaddings} ${styles.yPaddings} `}>
      <div className='flex lg:flex-row flex-col lg:items-center lg:justify-between'>
        <div className='w-[392px]'>
          <img src='/logoCoral.png' alt='logo' className='pb-6'/>

          <p className={`${styles.pStyle2} lg:pb-4 pb-2`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className='flex space-x-3'>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>

        <div className='pt-6 lg:pt-0'>
          <h5 className={`${styles.h5Style2}`}>Catalog</h5>
          <p className={`${styles.pStyle2}`}>Necklaces</p>
          <p className={`${styles.pStyle2}`}>Hoodie</p>
          <p className={`${styles.pStyle2}`}>Jwerly Box</p>
          <p className={`${styles.pStyle2}`}>T-shirt</p>
          <p className={`${styles.pStyle2}`}>Short</p>
        </div>
        <div className='pt-6 lg:pt-0'>
          <h5 className={`${styles.h5Style2}`}>Catalog</h5>
          <p className={`${styles.pStyle2}`}>Necklaces</p>
          <p className={`${styles.pStyle2}`}>Hoodie</p>
          <p className={`${styles.pStyle2}`}>Jwerly Box</p>
          <p className={`${styles.pStyle2}`}>T-shirt</p>
          <p className={`${styles.pStyle2}`}>Short</p>
        </div>
        <div className='pt-6 lg:pt-0'>
          <h5 className={`${styles.h5Style2}`}>Catalog</h5>
          <p className={`${styles.pStyle2}`}>Necklaces</p>
          <p className={`${styles.pStyle2}`}>Hoodie</p>
          <p className={`${styles.pStyle2}`}>Jwerly Box</p>
          <p className={`${styles.pStyle2}`}>T-shirt</p>
          <p className={`${styles.pStyle2}`}>Short</p>
        </div>
      </div>
    </div>
  )
}

export default Footer