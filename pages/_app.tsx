import '../styles/globals.scss'
import 'aos/dist/aos.css'

import React from 'react'
import type { AppProps } from 'next/app'
import AOS from 'aos'

import Layout from '../layouts/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    AOS.init({
      easing: 'ease-out-sine',
      duration: 600,
    })
  }, [])
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
