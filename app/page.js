
import styles from './page.module.css'
import Banner from '../components/banner/banner'
import NavBar from '../components/nav/navbar'
import SectionCards from '../components/card/section-cards'
import {  getVideos } from '../lib/videos'



export  default async function Home() {
  
  const historyVideos = await getVideos('alessandro barbero')
  const newyorkVideos = await getVideos('new york city skyline shorts')
  const johnnyharrisVideos = await getVideos('johnny harris videos')
  const breakingItalyVideos= await getVideos('Breaking Italy Night')

  
  
  // const popularVideos = await getPopularVideos()

  
 
  return (
    <div className={styles.main}>
    
    <NavBar/>
      <Banner  
        title="Sasha and Taylor Swift" 
        subTitle="Dictators on Directors"
        imgUrl="/nyc.jpg"  
        />
        <div className={styles.sectionWrapper}>
        <SectionCards title="New York" videos={newyorkVideos} size="large"/>
        <SectionCards title="History" videos={historyVideos} size="small"/>
        <SectionCards title="US Journalism" videos={johnnyharrisVideos} size="small"/>
        
        <SectionCards title="Politics" videos={breakingItalyVideos} size="small"/>
        
        {/* <SectionCards title="Popular" videos={popularVideos} size="small"/> */}
        </div>
    </div>
  )
}
