import { Layout } from '@/component'
import '../styles/globals.css'
// import {StateContext} from './context/StateContext'


export const metadata = {
  title: 'Ecommerce site',
  description: 'Buy whatever you need',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <StateContext> */}
        <Layout>
          {children}
        </Layout>
      {/* </StateContext> */}
    </html>
  )
}
