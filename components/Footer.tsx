import React from 'react'

import ShareButton from '../components/ShareButton'

import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className='text-center'>
      <div className='flex flex-col justify-center pt-16 pb-6'>
        <p className='mb-2 text-lg font-bold'>Share</p>
        <ShareButton className='block mb-10' />
      </div>
      <div className='underline hover:no-underline --ls-text-blue'>
        <Link href='/contact'>
          <a>Contact - お問い合わせ</a>
        </Link>
      </div>
      <small className='flex flex-col justify-center text-xs h-screen-10'>
        © 2021 — Lucky Strike
      </small>
    </footer>
  )
}

export default Footer
