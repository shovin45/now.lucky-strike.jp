import React from 'react'

import Head from 'next/head'

const url = 'https://now.lucky-strike.jp/'
const title = 'Lucky Strike ワンマンライブ「NOW」特設サイト'
const description =
  '【生演奏＋歌＋ダンス＝∞】 笑顔で心を結び感動で世界を包む。 心から感動して笑顔になれるような音楽を。笑顔で涙が出てしまうような音楽を。'
const keywords =
  'Lucky Strike,ラッキーストライク,DANCE,ダンス,音楽,MUSIC,バンド,LIVE,ライブ,歌'
const twitter = '@LuckyStr1ke2010'

type Props = {
  name: string
  path: string
}

const SEO: React.FC<Props> = ({ name, path }) => {
  return (
    <Head>
      <title>{`${name} | ${title}`}</title>
      <meta name='description' content={description} />
      <link rel='icon' href='/favicon.ico' />
      <meta
        name='og:title'
        property='og:title'
        content={`${name} | ${title}`}
      />
      <meta name='Keywords' content={keywords} />
      <meta property='og:title' content={`${name} | ${title}`} />
      <meta property='og:type' content='website' />
      <meta property='og:image' content='/ogp.jpg' />
      <meta property='og:url' content={`${url}${path}`} />
      <meta property='og:description' content={description} />
      <meta property='og:site_name' content={title} />
      <meta property='og:locale' content='ja_JP' />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content={twitter} />
      <meta name='twitter:creator' content={twitter} />
      <meta name='twitter:description' content={description} />
      <link rel='canonical' href={url} />
    </Head>
  )
}

export default SEO
