import React, { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import NestedLayout from '../layouts/NestedLayout'

import SEO from '../components/SEO'
import TicketButton from '../components/TicketButton'

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import content from '../plugins/content'

import content03 from '../public/content03.png'
import NestedSection from '../components/NestedSection'

import { useDispatch, useSelector } from 'react-redux'
import { slice } from '../store/index'

const Detail: NextPageWithLayout = () => {
  const title = 'DETAIL'
  const markdown = content.detail

  const dispatch = useDispatch()
  const useState = () => {
    return useSelector((state: { url: string }) => state)
  }
  const url = useState().url

  dispatch(slice.actions.update(content.ticketUrl))

  return (
    <div className='relative pt-12 sm:pt-20 min-h-screen'>
      <SEO name={title} path='detail' />

      <NestedSection image={content03} title={title} position='right center'>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
      </NestedSection>
      <TicketButton url={url} />
    </div>
  )
}

Detail.getLayout = (page: ReactElement) => {
  return <NestedLayout>{page}</NestedLayout>
}

export default Detail
