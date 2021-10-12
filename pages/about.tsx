import React, { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import NestedLayout from '../layouts/NestedLayout'

import SEO from '../components/SEO'
import TicketButton from '../components/TicketButton'
import Button, { Colors } from '../components/Button'
import Link from 'next/link'

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import content from '../plugins/content'

import content01 from '../public/content01.png'
import NestedSection from '../components/NestedSection'

import { useDispatch, useSelector } from 'react-redux'
import { slice } from '../store/index'

const About: NextPageWithLayout = () => {
  const title = 'ABOUT'
  const markdown = content.about

  const dispatch = useDispatch()
  const useState = () => {
    return useSelector((state: { url: string }) => state)
  }
  const url = useState().url

  dispatch(slice.actions.update(content.ticketUrl))

  return (
    <div className='relative pt-12 sm:pt-20 min-h-screen'>
      <SEO name={title} path='about' />

      <NestedSection image={content01} title={title} position='center 80%'>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
      </NestedSection>

      <div className='flex justify-center'>
        <Link href='https://www.lucky-strike.jp/about'>
          <a>
            <Button
              className='mx-auto lg:mx-0 mt-8'
              text='詳しくはこちら'
              color='yellow'
            />
          </a>
        </Link>
      </div>
    </div>
  )
}

About.getLayout = (page: ReactElement) => {
  return <NestedLayout>{page}</NestedLayout>
}

export default About
