import React from 'react'

import Button from './Button'
import button from '../styles/Button.module.scss'

import Image from 'next/image'

type Props = {
  title?: string
  subTitle?: string
  image?: string
}

const Section: React.FC<Props> = ({ title, subTitle, image }) => {
  return (
    <>
      <section className='flex'>
        <div>
          <hgroup>
            <h2>Lucky Strike? {title}</h2>
            <h3>Content 01 どんなグループなの？{subTitle}</h3>
          </hgroup>
          <Button text='詳細はこちら' color='yellow' />
        </div>

        <div>{image}</div>

        {/* <Image src={image} alt='' /> */}
      </section>
    </>
  )
}

export default Section
