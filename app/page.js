import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/app/components/banner'
import NavBar from './components/nav/navbar'
import SectionCards from './components/card/section-cards'
// import { getVideos } from '../lib/videos'

async function getData() {
  
  const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
  const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=disney%20trailer&key=${YOUTUBE_API_KEY}`)
  
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  } else {
    const data = await response.json()
    return data.items.map((item) => {
      return {
          title: item.snippet.title,
          imgUrl: item.snippet.thumbnails.high.url,
          id: item?.id?.videoId,
      }
  })
  }
}




export  default async function Home() {
  const disneyVideos = await getData()
  return (
    <div className={styles.container}>
    
    <NavBar username="theuglycat@sashacorp.dev" />
      <Banner  
        title="Sasha and Taylor Swift" 
        subTitle="Dictators on Directors"
        imgUrl="/nyc.jpg"  
        />
        <div className={styles.sectionWrapper}>
        <SectionCards title="Disney" videos={disneyVideos} size="large"/>
        <SectionCards title="Disney" videos={disneyVideos} size="medium"/>
        <SectionCards title="Disney" videos={disneyVideos} size="small"/>
        </div>
    </div>
  )
}
