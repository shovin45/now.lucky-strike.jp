import React from 'react'
import type { NextPageWithLayout } from './_app'
import type { ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import SEO from '../components/SEO'
import Section from '../components/Section'
import Button from '../components/Button'
import TicketButton from '../components/TicketButton'
import Layout from '../layouts/Layout'
import content from '../plugins/content'
import news from '../plugins/news'
import { getNews } from '../plugins/microcms'

import homeFooter from '../public/home-footer.png'
import content01 from '../public/content01.png'
import content02 from '../public/content02.png'
import content03 from '../public/content03.png'

import { useDispatch, useSelector } from 'react-redux'
import { slice } from '../store/index'

import { Colors } from '../components/Button'

const sections = [
  {
    title: 'Lucky Strike?',
    subTitle: 'Content 01 どんなグループなの？',
    image: content01,
    reverse: false,
    href: '/about',
    color: 'yellow' as Colors,
  },
  {
    title: 'STORY',
    subTitle: 'Content 02 ワンマンライブ開催の物語',
    image: content02,
    reverse: true,
    href: '/story',
    color: 'blue' as Colors,
  },
  {
    title: 'DETAIL',
    subTitle: 'Content 03 ワンマンライブ詳細情報',
    image: content03,
    reverse: false,
    href: '/detail',
    color: 'pink' as Colors,
  },
]

const Home: NextPageWithLayout = ({ contents }) => {
  const dispatch = useDispatch()
  const useState = () => {
    return useSelector((state: { url: string }) => state)
  }
  const url = useState().url
  dispatch(slice.actions.update(content.ticketUrl))

  const [open, setOpen] = React.useState(false)

  if (!Array.isArray(contents)) return <></>
  return (
    <div className='relative min-h-screen'>
      <SEO name='トップ' path='' />

      <div className='flex justify-center items-center p-10 sm:p-24 px-5 pt-16 w-full h-screen transition-height'>
        <div className='flex relative justify-center items-center w-full h-full border-4 sm:border-16'>
          <h1
            className={`absolute bottom-16 lg:bottom-2/4 -left-4 sm:-left-16 text-2xl font-bold translate-y-10 mix-blend-difference`}
          >
            Lucky Strike
            <br />
            ワンマンライブ「NOW」
            <br />
            2022年1月15日（土）
            <br />
            チケット発売中！
          </h1>
          <Image src='/home-img.png' alt='' width={500} height={400} />
          <a
            className='hidden md:inline-block absolute md:-right-20 md:bottom-2/4 p-1 text-sm font-bold border-2 transform rotate-90 translate-x-20 translate-y-1'
            href={url}
            target='_blank'
            rel='noreferrer'
          >
            Ticket sales site eplus.
          </a>
        </div>
      </div>
      <TicketButton url={url} />

      <div className='sm:py-16 pt-8 pb-16 mx-auto max-w-screen-md'>
        <h2 className='py-5 text-2xl font-bold text-center'>NEWS</h2>

        <ul>
          {contents.reduce((arr: any, n, index) => {
            if (index < 3 || open) {
              arr.push(
                <li key={index}>
                  <Link
                    href={n.content ? `/news/${n.id}` : n.link || ''}
                    data-aos='fade-up'
                    data-aos-delay={50 * (index - 2)}
                  >
                    <a className='flex justify-start p-5 border-b'>
                      <span className='w-28'>{n.date}</span>{' '}
                      <span
                        className={(n.link ? 'hover:underline' : '') + ' w-4/5'}
                      >
                        {n.title}
                      </span>
                    </a>
                  </Link>
                </li>,
              )
            }
            return arr
          }, [])}
        </ul>
        <div className='flex justify-center'>
          <Button
            className='mx-auto lg:mx-0 mt-8'
            color='white'
            text={!open ? 'すべて見る' : '閉じる'}
            onClick={() => {
              setOpen(!open)
            }}
          />
        </div>
      </div>

      {sections.map((_, index) => (
        <Section key={index} {..._} />
      ))}

      <TicketButton url={url} />

      <Image src={homeFooter} alt='Picture of the author' />
    </div>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export const getStaticProps: GetStaticProps = async () => {
  const contents = await getNews()
  return {
    props: {
      contents,
    },
  }
}

export default Home
