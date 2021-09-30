import React, { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import NestedLayout from '../layouts/NestedLayout'

import SEO from '../components/SEO'
import TicketButton from '../components/TicketButton'

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import content from '../plugins/content'

import content02 from '../public/content02.png'
import NestedSection from '../components/NestedSection'

import { useDispatch, useSelector } from 'react-redux'
import { slice } from '../store/index'

const Story: NextPageWithLayout = () => {
  const title = 'STORY'
  const markdown = content.story

  const dispatch = useDispatch()
  const useState = () => {
    return useSelector((state: { url: string }) => state)
  }
  const url = useState().url

  dispatch(slice.actions.update(content.ticketUrl))

  return (
    <div className='relative pt-12 sm:pt-20 min-h-screen'>
      <SEO name={title} path='story' />

      <NestedSection image={content02} title={title} position='center'>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
      </NestedSection>
      <TicketButton url={url} />
    </div>
  )
}

Story.getLayout = (page: ReactElement) => {
  return <NestedLayout>{page}</NestedLayout>
}

export default Story
