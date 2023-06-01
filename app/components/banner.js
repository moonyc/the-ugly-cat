'use client';
import styles from './banner.module.css'
import cls from 'classnames'

export default function Banner (props) {
    const {title, subTitle, imgUrl} = props

    const handleOnPlay = () => {
       console.log("handle on play")
    }
    return (
        <div className={styles.container}>
            <div className={styles.leftWrapper}>
                <div className={styles.left}>
                <div className={cls( "glass",styles.glassWrapper)}s>
                    <div className={styles.nseriesWrapper}>
                        <p className={styles.firstLetter}> The </p>
                        <p className={styles.series}> UGLY<br/>CAT</p>
                    </div>
                    <h3 className={styles.title}>{title}</h3>
                    <h3 className={styles.subTitle}>{subTitle}</h3>
                    </div>
                    <div className={styles.playBtnWrapper}>
                        <button className={styles.button} onClick={handleOnPlay}>
                            <span>
                                Play
                            </span>
                            <i></i>
                        </button>
                    </div>
                </div>
            </div>
            <div
             className={styles.bannerImg}
             style={{
                backgroundImage: `url(${imgUrl})`,
             }}
            >

            </div>
        </div>
    )
}