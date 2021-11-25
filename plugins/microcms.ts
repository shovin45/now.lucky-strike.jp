import { createClient } from 'microcms-js-sdk'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'

const apiKey = process.env.NEXT_PUBLIC_MICROCMS_API_KEY || ''
export const client = createClient({
  serviceDomain: 'luckyschool',
  apiKey,
})

export const getNews = async () => {
  const { contents } = await client.get({
    endpoint: 'now-news',
  })
  const yyyyMMddFormat = (date: string) => {
    return format(new Date(date), 'yyyy.MM.dd', { locale: ja })
  }
  return contents.map(
    ({
      date,
      createdAt,
      updatedAt,
      publishedAt,
      revisedAt,
      ...params
    }: NewsApiModels) => {
      return {
        ...params,
        date: yyyyMMddFormat(date),
        createdAt: yyyyMMddFormat(createdAt),
        updatedAt: yyyyMMddFormat(updatedAt),
        publishedAt: yyyyMMddFormat(publishedAt),
        revisedAt: yyyyMMddFormat(revisedAt),
      }
    },
  )
}
