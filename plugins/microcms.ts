import { createClient } from 'microcms-js-sdk'

const apiKey = process.env.NEXT_PUBLIC_MICROCMS_API_KEY || ''
export const client = createClient({
  serviceDomain: 'luckyschool',
  apiKey,
})
