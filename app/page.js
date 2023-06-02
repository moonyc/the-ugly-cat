import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/app/components/banner'
import NavBar from './components/nav/navbar'
import SectionCards from './components/card/section-cards'
import { getVideos } from '../lib/videos'


export  default function Home() {
  const disneyVideos = getVideos()
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
