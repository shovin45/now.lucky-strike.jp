import { useEffect } from 'react'

type Type = 'url' | 'text'

const useScript = (type: Type, text: string) => {
  useEffect(() => {
    const script = document.createElement('script')

    switch (type) {
      case 'url':
        script.src = text
        break
      case 'text':
        script.text = text
        break
    }

    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [text, type])
}

export default useScript
