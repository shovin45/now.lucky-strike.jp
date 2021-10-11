import React from 'react'

import button from '../styles/Button.module.scss'

export type Colors = 'black' | 'white' | 'yellow' | 'green' | 'blue' | 'pink'

type Props = {
  text?: string
  color: Colors
  className?: string
  disabled?: boolean
}

const Button: React.FC<Props> = ({ text, color, className, disabled }) => {
  return (
    <button
      className={`${className} ${button.button} ${button[color]}`}
      disabled={disabled}
    >
      {text}{' '}
      <svg
        width='6'
        height='10'
        viewBox='0 0 6 10'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={button.arrow}
      >
        <path d='M1 1L5 5L1 9' />
      </svg>
    </button>
  )
}

export default Button
