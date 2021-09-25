import { FC } from 'react'
import Link from 'next/link'
import Button from '../components/Button'

type Props = {
  url: string
}

const TikectButton: FC<Props> = ({ url }) => {
  return (
    <div className='flex justify-center'>
      <Link href={url}>
        <a tabIndex={-1}>
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
