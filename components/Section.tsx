import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Button from './Button'

type Props = {
  title?: string
  subTitle?: string
  image?: any
  reverse?: boolean | null
  href: string
}

const Section: React.FC<Props> = ({
  title,
  subTitle,
  image,
  reverse,
  href,
}) => {
  return (
    <>
      <div className={`border-t-4 last:border-b-4 w-full`} data-aos='fade-up'>
        <section
          className={`mx-auto my-10 max-w-screen-lg flex flex-col h-screen-80 lg:h-screen-60 justify-center items-center ${
            reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
          }`}
        >
          <div className='order-2'>
            <hgroup className='mt-5 lg:mt-0'>
              <h3
                className='text-sm text-center lg:text-left'
                data-aos='fade-up'
              >
                {subTitle}
              </h3>
              <h2
                className='mt-3 text-5xl font-bold text-center lg:text-left'
                data-aos='fade-up'
              >
                {title}
              </h2>
            </hgroup>
            <div className='flex lg:block justify-center'>
              <Link href={href}>
                <a tabIndex={-1}>
                  <Button
                    className='mx-auto lg:mx-0 mt-8'
                    text='詳細はこちら'
                    color='yellow'
                    data-aos='fade-up'
                  />
                </a>
              </Link>
            </div>
          </div>

          <div
            className='block order-1 px-5 max-w-screen-sm'
            data-aos='fade-up'
          >
            <Image src={image} alt='' />
          </div>
        </section>
      </div>
    </>
  )
}

export default Section
