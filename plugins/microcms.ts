import { createClient } from 'microcms-js-sdk'
import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'
import { ja } from 'date-fns/locale'

const apiKey = process.env.NEXT_PUBLIC_MICROCMS_API_KEY || ''
export const client = createClient({
  serviceDomain: 'luckyschool',
  apiKey,
})

const yyyyMMddFormat = (date: string) => {
  if (!date) return
  const jstDate = utcToZonedTime(new Date(date), 'Asia/Tokyo')
  return format(jstDate, 'yyyy.MM.dd', { locale: ja })
}

export const getNews = async () => {
  const { contents } = await client.getList<NewsApiModels>({
    endpoint: 'now-news',
  })

  return contents.map(
    ({ date, createdAt, updatedAt, publishedAt, revisedAt, ...params }) => {
      return {
        ...params,
        date: yyyyMMddFormat(date),
        createdAt: yyyyMMddFormat(createdAt),
        updatedAt: yyyyMMddFormat(updatedAt),
        publishedAt: yyyyMMddFormat(publishedAt) || '',
        revisedAt: yyyyMMddFormat(revisedAt) || '',
      }
    },
  )
}

export const getPost = async (id: string) => {
  const res = await client.getListDetail<NewsApiModels>({
    endpoint: 'now-news',
    contentId: id,
  })

  return {
    ...res,
    date: yyyyMMddFormat(res.date),
    createdAt: yyyyMMddFormat(res.createdAt),
    updatedAt: yyyyMMddFormat(res.updatedAt),
    publishedAt: yyyyMMddFormat(res.publishedAt) || '',
    revisedAt: yyyyMMddFormat(res.revisedAt) || '',
  }
}
export const getPostPreview = async (id: string, draftKey: string) => {
  if (!id && !draftKey) return
  const res = await client.getListDetail<NewsApiModels>({
    endpoint: 'now-news',
    contentId: id,
    queries: { draftKey },
  })

  return {
    ...res,
    date: yyyyMMddFormat(res.date) || '',
    createdAt: yyyyMMddFormat(res.createdAt) || '',
    updatedAt: yyyyMMddFormat(res.updatedAt) || '',
    publishedAt: yyyyMMddFormat(res.publishedAt) || '',
    revisedAt: yyyyMMddFormat(res.revisedAt) || '',
  }
}
