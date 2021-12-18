import React, { ReactElement, useEffect, useState } from 'react'
import type { NextPageWithLayout } from '../_app'
import NestedLayout from '../../layouts/NestedLayout'

import { useRouter } from 'next/router'
import { getPostPreview } from '../../plugins/microcms'

import SEO from '../../components/SEO'

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import news01 from '../../public/news01.png'
import NestedSection from '../../components/NestedSection'

const Story: NextPageWithLayout = () => {
  const router = useRouter()
  const [post, setPost] = useState<NewsApiModels>({
    id: '',
    createdAt: '',
    updatedAt: '',
    publishedAt: '',
    revisedAt: '',
    title: '',
    link: '',
    date: '',
    content: '',
  })
  const { id, draftKey } = router.query

  useEffect(() => {
    if (!id && !draftKey) return
    const fetchData = () => {
      if (typeof id === 'string' && typeof draftKey === 'string')
        getPostPreview(id, draftKey).then((contents) => {
          if (contents) setPost(contents)
        })
    }
    fetchData()
  }, [id, draftKey])

  return !id && !draftKey ? (
    <></>
  ) : (
    <div className='relative pt-12 sm:pt-20 min-h-screen'>
      <SEO name={post.title} path={router.asPath} />

      <NestedSection image={news01} title={'NEWS'} position='bottom'>
        <h3 className='text-3xl'>{post.title}</h3>
        <p>{post.date}</p>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {post.content ? post.content : ''}
        </ReactMarkdown>
      </NestedSection>
    </div>
  )
}

Story.getLayout = (page: ReactElement) => {
  return <NestedLayout>{page}</NestedLayout>
}

export default Story
