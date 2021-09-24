import React from 'react'
import Link from 'next/link'

type Props = {
  className?: string
}

const nav = [
  {
    name: 'TOP',
    href: '/',
  },
  {
    name: 'ABOUT',
    href: '/about',
  },
  {
    name: 'STORY',
    href: '/story',
  },
  {
    name: 'DETAIL',
    href: '/detail',
  },
]

const GlobalNav: React.FC<Props> = ({ className }) => {
  return (
    <nav className='relative z-50'>
      <ul
        className={`${className} absolute top-0 right-0 flex justify-end pt-2 sm:pt-4 px-5 sm:px-24 w-full `}
      >
        {nav.map(({ name, href }) => {
          return (
            <li
              className='p-4 sm:p-5 last:pr-0 text-xs sm:text-base font-bold'
              key={name}
            >
              <Link href={href}>{name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default GlobalNav
