import React from 'react'

import ShareButton from '../components/ShareButton'

const Footer: React.FC = () => {
  return (
    <footer className='text-center'>
      <div className='flex flex-col justify-center h-screen-40'>
        <p className='mb-2 text-lg font-bold'>Share</p>
        <ShareButton className='block mb-10' />
      </div>
      <small className='flex flex-col justify-center text-xs h-screen-10'>
        © 2021 — Lucky Strike
      </small>
    </footer>
  )
}

export default Footer
