import React, { useState, useEffect } from 'react'

import { debounce } from 'mabiki'

const Window = () => {
  const [style, setStyle] = useState(':root {}')
  useEffect(() => {
    const resize = () => {
      setStyle(`:root { --vh: ${window.innerHeight / 100}px }`)
    }
    resize()
    addEventListener('orientationchange', debounce(resize, 200))

    return () => {
      removeEventListener('orientationchange', debounce(resize, 200))
    }
  }, [])

  return <style>{style}</style>
}

export default Window
