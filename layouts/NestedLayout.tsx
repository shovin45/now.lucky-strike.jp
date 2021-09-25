import GlobalNav from '../components/GlobalNav'
import Footer from '../components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import type { NextPage } from 'next'

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <GlobalNav />
      <div className='absolute z-50 p-2 -m-10'>
        <Link href='/'>
          <a className='block'>
            <Image src='/home-img.png' alt='' width={121} height={97} />
          </a>
        </Link>
      </div>

      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
