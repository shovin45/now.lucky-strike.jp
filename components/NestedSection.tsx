import React from 'react'
import Image from 'next/image'

type Props = {
  image: StaticImageData
  title?: string
}

const NestedSection: React.FC<Props> = ({ image, title }) => {
  return (
    <article>
      <div
        className='mx-auto max-w-screen-xl'
        style={{ position: 'relative', width: '100%', height: '400px' }}
      >
        <Image src={image} alt='' layout='fill' objectFit='cover' />
      </div>

      <div className='relative z-10 px-5 mx-auto -mt-8 sm:-mt-12 max-w-screen-xl'>
        <h2 className='text-7xl sm:text-8xl font-bold mix-blend-overlay'>
          {title}
        </h2>
      </div>
    </article>
  )
}

export default NestedSection
