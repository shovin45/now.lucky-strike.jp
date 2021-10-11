import GlobalNav from '../components/GlobalNav'
import Footer from '../components/Footer'
import type { NextPage } from 'next'

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <GlobalNav />


      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
