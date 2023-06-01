import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/app/components/banner'
import NavBar from './components/nav/navbar'

export default function Home() {
  return (
    <div className={styles.container}>
    
    <NavBar username="theuglycat@sashacorp.dev" />
      <Banner  
        title="Sasha and Taylor Swift" 
        subTitle="Dictators on Directors"
        imgUrl="/nyc.jpg"  
        />
       
    </div>
  )
}
