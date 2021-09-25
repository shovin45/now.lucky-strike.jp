import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import style from '../styles/GlobalNav.module.scss'

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
  const { pathname } = useRouter()
  return (
    <nav className='relative z-50'>
      <ul
        className={`${className} absolute top-0 right-0 flex justify-end pt-6 sm:pt-9 px-5 sm:px-24 w-full `}
      >
        {nav.map(({ name, href }) => {
          return (
            <li
              className={`mx-1 px-2 sm:px-4 last:-mr-2 sm:last:-mr-4 text-xs sm:text-base font-bold ${
                style.button
              } ${pathname == href ? style.active : ''}`}
              key={name}
              tabIndex={0}
            >
              <Link href={href}>
                <a tabIndex={-1}>{name}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default GlobalNav
