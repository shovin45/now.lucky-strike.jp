import React, { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Head from 'next/head'
import NestedLayout from '../layouts/NestedLayout'

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import content from '../plugins/content'

import content02 from '../public/content02.jpg'
import NestedSection from '../components/NestedSection'

const Story: NextPageWithLayout = () => {
  const title = 'STORY'
  const markdown = content.story

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

      <NestedSection image={content02} title={title}>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
      </NestedSection>
    </div>
  )
}

Story.getLayout = (page: ReactElement) => {
  return <NestedLayout>{page}</NestedLayout>
}

export default Story
