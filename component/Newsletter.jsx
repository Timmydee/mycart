import React from 'react'
import styles from '@/styles'

const NewsLetter = () => {
  return (
    <div className={`flex items-center justify-center ${styles.innerWidth} bg-gray-800 bg-opacity-5`}>
        <div className={`${styles.xPaddings} ${styles.yPaddings}`}>
            <div>
                <h2 className={`${styles.h2Style} text-center`}>Follow products and discounts on Instagram</h2>
            </div>
            
            <div className='flex items-center space-x-4 pt-10'>
                <img src='/women1.png' alt='brand1' className='w-[200px] h-[200px]' />
                <img src='/women3.png' alt='brand2' className='w-[200px] h-[200px]' />
                <img src='/men3.png' alt='brand3' className='w-[200px] h-[200px]' />
                <img src='/women4.png' alt='brand4' className='w-[200px] h-[200px]' />
                <img src='/men2.png' alt='brand2' className='w-[200px] h-[200px]' />
            </div>

            <div className='pt-14'>
                <h2 className={`${styles.h2Style} text-center`}>Or subscribe to the newsletter</h2>
            </div>

            <div className='flex items-center justify-center pt-8'>
                <div className='w-[700px] flex'>
                    <input placeholder='Email' className='w-full border-b-2'/>
                    <button>Submit</button>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default NewsLetter