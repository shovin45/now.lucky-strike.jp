import { useEffect } from 'react'

import AOS from 'aos'

const Aos = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-sine',
      duration: 600,
    })
  }, [])
}

export default Aos
