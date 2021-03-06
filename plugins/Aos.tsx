import { useEffect } from 'react'

import AOS from 'aos'

const Aos = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      duration: 1000,
      offset: 150,
      once: true,
    })
  }, [])
}

export default Aos
