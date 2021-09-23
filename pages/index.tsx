import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import footer from '../styles/Footer.module.scss'

import homeImg from '../public/home-img.png'
import homeFooter from '../public/home-footer.png'

import Button from '../components/Button'
import Section from '../components/Section'

const sections = [
  { title: 'string', subTitle: 'string', image: 'string' },
  { title: 'string', subTitle: 'string', image: 'string' },
  { title: 'string', subTitle: 'string', image: 'string' },
]

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Lucky Strike
          <br />
          ワンマンライブ「NOW」
          <br />
          チケット発売中！
        </h1>

        <Image src='/home-img.png' alt='' width={500} height={400} />

        <p className={styles.description}>Ticket sales site eplus.</p>

        <Button text='チケットはこちら' color='green' />

        <div className={styles.grid}>
          {sections.map((_, index) => (
            <Section key={index} />
          ))}
        </div>
      </main>

      <footer className={footer.footer}>
        <Image src={homeFooter} alt='Picture of the author' />
        <small className='text-lg'>© 2021 — Lucky Strike</small>
      </footer>
    </div>
  )
}

export default Home
