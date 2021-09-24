import React, { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Head from 'next/head'
import NestedLayout from '../layouts/NestedLayout'

import content01 from '../public/content01.jpg'
import NestedSection from '../components/NestedSection'

const About: NextPageWithLayout = () => {
  const title = 'ABOUT'
  return (
    <div className='relative pt-12 sm:pt-20 min-h-screen'>
      <Head>
        <title>{title} | Lucky Strike ワンマンライブ「NOW」特設サイト</title>
        <meta
          name='description'
          content='Lucky Strike ワンマンライブ「NOW」特設サイト'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NestedSection image={content01} title={title} />
    </div>
  )
}

About.getLayout = (page: ReactElement) => {
  return <NestedLayout>{page}</NestedLayout>
}

export default About