import { FC } from 'react'
import Link from 'next/link'
import Button from '../components/Button'

type Props = {
  url: string
}

const click = () => {
  if (!window) return
  window.gtag('event', 'click', {
    eplus_click: 'eplus_click'
  })
}

const TikectButton: FC<Props> = ({ url }) => {
  return (
    <div className='flex justify-center'>
      <Link href={url}>
        <a tabIndex={-1} onClick={click}>
          <Button
            className='inline-block my-12 sm:my-16 mx-auto'
            text='チケットはこちら'
            color='green'
          />
        </a>
      </Link>
    </div>
  )
}

export default TikectButton
