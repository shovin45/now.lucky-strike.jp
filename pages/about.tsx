import React, { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Head from 'next/head'
import NestedLayout from '../layouts/NestedLayout'

import SEO from '../components/SEO'

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import content from '../plugins/content'

import content01 from '../public/content01.png'
import NestedSection from '../components/NestedSection'

const About: NextPageWithLayout = () => {
  const title = 'ABOUT'
  const markdown = content.about

  return (
    <div className='relative pt-12 sm:pt-20 min-h-screen'>
      <SEO name={title} path='about' />

      <NestedSection image={content01} title={title} position='center bottom'>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
      </NestedSection>
    </div>
  )
}

About.getLayout = (page: ReactElement) => {
  return <NestedLayout>{page}</NestedLayout>
}

export default About
