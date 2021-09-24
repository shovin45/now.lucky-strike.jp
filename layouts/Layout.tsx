import GlobalNav from '../components/GlobalNav'
import Footer from '../components/Footer'

import React from 'react'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalNav />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
