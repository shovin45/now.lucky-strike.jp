import '../styles/globals.scss'
import 'aos/dist/aos.css'

import React from 'react'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import Window from '../plugins/Window'
import AOS from '../plugins/Aos'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  AOS()

  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <>
      <Component {...pageProps} />
      <Window />
    </>,
  )
}
export default MyApp
