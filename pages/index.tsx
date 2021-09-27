import type { NextPageWithLayout } from './_app'
import type { ReactElement } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import SEO from '../components/SEO'
import Section from '../components/Section'
import TicketButton from '../components/TicketButton'
import Layout from '../layouts/Layout'

import homeFooter from '../public/home-footer.png'
import content01 from '../public/content01.png'
import content02 from '../public/content02.png'
import content03 from '../public/content03.png'

const sections = [
  {
    title: 'Lucky Strike?',
    subTitle: 'Content 01 どんなグループなの？',
    image: content01,
    reverse: false,
    href: '/about',
  },
  {
    title: 'STORY',
    subTitle: 'Content 02 ワンマンライブ開催の物語',
    image: content02,
    reverse: true,
    href: '/story',
  },
  {
    title: 'DETAIL',
    subTitle: 'Content 03 ワンマンライブ詳細情報',
    image: content03,
    reverse: false,
    href: '/detail',
  },
]
const ticketUrl = 'https://eplus.jp/'

const Home: NextPageWithLayout = () => {
  return (
    <div className='relative min-h-screen'>
      <SEO name='トップ' path='' />

      <div className='flex justify-center items-center p-10 sm:p-24 px-5 pt-16 w-full h-screen transition-height'>
        <div className='flex relative justify-center items-center w-full h-full border-8 sm:border-16'>
          <h1
            className={`absolute bottom-16 lg:bottom-2/4 -left-6 sm:-left-16 text-2xl font-bold translate-y-10 mix-blend-difference`}
          >
            Lucky Strike
            <br />
            ワンマンライブ「NOW」
            <br />
            チケット発売中！
          </h1>
          <Image src='/home-img.png' alt='' width={500} height={400} />
          <a
            className='hidden md:inline-block absolute md:-right-20 md:bottom-2/4 p-1 text-sm font-bold border-2 transform rotate-90 translate-x-20 translate-y-1'
            href={ticketUrl}
            target='_blank'
            rel='noreferrer'
          >
            Ticket sales site eplus.
          </a>
        </div>
      </div>
      <TicketButton url={ticketUrl} />

      {sections.map((_, index) => (
        <Section key={index} {..._} />
      ))}

      <TicketButton url={ticketUrl} />

      <Image src={homeFooter} alt='Picture of the author' />
    </div>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
