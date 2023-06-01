import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/app/components/banner'


export default function Home() {
  return (
    <div className={styles.container}>
    <div className={styles.heading}>
    <Image
        src="/the-ugly-cat.svg"
        width={50}
        height={50}
        alt="The Ugly cat logo"
      />
      <h1 className={styles.theUglyCat}>
        The Ugly Cat
      </h1>
    </div>
      
      <Banner  
        title="Sasha and Taylor Swift" 
        subTitle="Dictators on Directors"
        imgUrl="/nyc.jpg"  
        />
    </div>
  )
}
