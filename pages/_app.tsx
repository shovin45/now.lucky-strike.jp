import '../styles/globals.scss'
import 'aos/dist/aos.css'

import React from 'react'
import type { ReactElement, ReactNode } from 'react'
import { Provider } from 'react-redux'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import Window from '../plugins/Window'
import AOS from '../plugins/Aos'

import GA from '../components/GA'

import store from '../store/index'

type Props = { contents: any }
export type NextPageWithLayout<T = Props> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  AOS()

  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <Provider store={store}>
      <>
        <GA />
        <Component {...pageProps} />
        <Window />
      </>
    </Provider>,
  )
}

export default MyApp
