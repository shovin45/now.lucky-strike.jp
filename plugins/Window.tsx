import React, { useState, useEffect } from 'react'

import { debounce } from 'mabiki'

const Window = () => {
  const [style, setStyle] = useState(':root {}')
  useEffect(() => {
    const resize = () => {
      setStyle(`:root { --vh: ${window.innerHeight / 100}px }`)
    }
    resize()
    addEventListener('resize', debounce(resize, 200))

    return () => {
      removeEventListener('resize', debounce(resize, 200))
    }
  }, [])

  return <style>{style}</style>
}

export default Window
