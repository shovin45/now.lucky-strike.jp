import '../styles/globals.scss'
import 'aos/dist/aos.css'

import React from 'react'
import type { AppProps } from 'next/app'
import AOS from 'aos'

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    AOS.init({
      easing: 'ease-out-sine',
      duration: 600,
    })
  }, [])
  return <Component {...pageProps} />
}
export default MyApp
