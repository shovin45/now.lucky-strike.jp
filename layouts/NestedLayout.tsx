import GlobalNav from '../components/GlobalNav'
import Footer from '../components/Footer'
import Image from 'next/image'
import type { NextPage } from 'next'

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <GlobalNav />
      <div className='absolute z-10 p-2 -m-10'>
        {/* <img src='/home-img.png' alt='' width={121} height={97} /> */}
        <Image src='/home-img.png' alt='' width={121} height={97} />
      </div>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
