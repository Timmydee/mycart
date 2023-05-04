import React from 'react'
import Head from 'next/head'
import { Navbar } from './'
import { Footer } from './'
import styles from '@/styles'

const Layout = ({children}) => {
  return (
    <body className='layout'>
      <Head>
        <title>Mycart</title>
      </Head>
      <header className={`${styles.innerWidth} ${styles.xPaddings} bg-gray-800 bg-opacity-5`}>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </body>
  )
}

export default Layout