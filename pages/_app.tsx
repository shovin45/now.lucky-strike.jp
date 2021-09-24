import '../styles/globals.scss'
import 'aos/dist/aos.css'

import React from 'react'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

import AOS from 'aos'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  React.useEffect(() => {
    AOS.init({
      easing: 'ease-out-sine',
      duration: 600,
    })
  }, [])
  return getLayout(<Component {...pageProps} />)
}
export default MyApp
