import React, { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Head from 'next/head'
import NestedLayout from '../layouts/NestedLayout'

import SEO from '../components/SEO'

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import content from '../plugins/content'

import content03 from '../public/content03.png'
import NestedSection from '../components/NestedSection'

const Detail: NextPageWithLayout = () => {
  const title = 'DETAIL'
  const markdown = content.detail

  return (
    <div className='relative pt-12 sm:pt-20 min-h-screen'>
      <SEO name={title} path='detail' />

      <NestedSection image={content03} title={title} position='right center'>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
      </NestedSection>
    </div>
  )
}

Detail.getLayout = (page: ReactElement) => {
  return <NestedLayout>{page}</NestedLayout>
}

export default Detail
