import { useEffect } from 'react'
import { useRouter } from 'next/router'
import useScript from './useScript'

export const useTracking = (trackingId?: string) => {
  const { pathname } = useRouter()

  useScript('url', `https://www.googletagmanager.com/gtag/js?id=${trackingId}`)
  useScript(
    'text',
    `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${trackingId}');`,
  )

  useEffect(() => {
    if (!window.gtag) return
    if (!trackingId) {
      console.log(
        'Tracking not enabled, as `trackingId` was not given and there is no `GA_MEASUREMENT_ID`.',
      )
      return
    }
    window.gtag('config', trackingId, { page_path: pathname })
  }, [pathname, trackingId])
}
