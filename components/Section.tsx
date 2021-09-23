import React from 'react'

import Button from './Button'

import Image from 'next/image'

type Props = {
  title?: string
  subTitle?: string
  image?: any
  reverse?: boolean | null
}

const Section: React.FC<Props> = ({ title, subTitle, image, reverse }) => {
  return (
    <>
      <section
        className={`sm:flex h-screen ${
          reverse ? 'flex-row-reverse' : 'flex-row'
        }`}
      >
        <div>
          <hgroup>
            <h2>{title}</h2>
            <h3>{subTitle}</h3>
          </hgroup>
          <Button text='詳細はこちら' color='yellow' />
        </div>

        <Image src={image} alt='' />
      </section>
    </>
  )
}

export default Section
