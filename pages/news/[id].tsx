import React, { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app'
import NestedLayout from '../../layouts/NestedLayout'
import { GetStaticProps, GetStaticPaths } from 'next'

import { useRouter } from 'next/router'
import { getNews, getPost } from '../../plugins/microcms'

import SEO from '../../components/SEO'

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import news01 from '../../public/news01.png'
import NestedSection from '../../components/NestedSection'

const Story: NextPageWithLayout = ({ contents }) => {
  const router = useRouter()
  if (Array.isArray(contents)) return <></>

  const { title, date, content } = contents

  return (
    <div className='relative pt-12 sm:pt-20 min-h-screen'>
      <SEO name={title} path={router.asPath} />

      <NestedSection image={news01} title={'NEWS'} position='bottom'>
        <h3 className='text-3xl'>{title}</h3>
        <p>{date}</p>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {content ? content : ''}
        </ReactMarkdown>
      </NestedSection>
    </div>
  )
}

Story.getLayout = (page: ReactElement) => {
  return <NestedLayout>{page}</NestedLayout>
}

export const getStaticProps: GetStaticProps = async (context) => {
  const contents = await getPost(context?.params?.id as string)

  return {
    props: {
      contents,
    },
  }
}
export const getStaticPaths: GetStaticPaths = async () => {
  const contents = await getNews()

  const paths = contents.reduce(
    (arr: { params: { id: string } }[], { id, content }) => {
      if (content) arr.push({ params: { id } })
      return arr
    },
    [],
  )

  return {
    paths,
    fallback: true,
  }
}

export default Story
