import React, { useState, useEffect } from 'react'

const Window = () => {
  const [style, setStyle] = useState(':root {}')
  useEffect(() => {
    const resize = () => {
      setStyle(`:root { --vh: ${window.innerHeight / 100}px }`)
    }
    resize()
    addEventListener('resize', resize)

    return () => {
      removeEventListener('resize', resize)
    }
  }, [])

  return <style>{style}</style>
}

export default Window
