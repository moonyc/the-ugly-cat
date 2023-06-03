'use client'
import Image from "next/image";
import styles from './card.module.css'
import { useState } from "react";
import cls from "classnames"
import {motion} from 'framer-motion'

export default function Card (props) {
    const { 
        imgUrl="https://images.unsplash.com/photo-1578849278619-e73505e9610f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80", 
        size= "medium",
        id
    } = props;
    const [imgSrc, setImgSrc] = useState(imgUrl)
    const classMap = {
        large: styles.lgItem,
        medium: styles.mdItem,
        small: styles.smItem
    }

    const handleOnError = () => {
        console.log('error-> image')
        setImgSrc("https://images.unsplash.com/photo-1578849278619-e73505e9610f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80")
    }

    const scale = id === 0 ? {scaleY: 1.1} : {scale: 1.1}
    return (
        <div className={styles.container}>
            <motion.div className={cls(styles.imgMotionWrapper,classMap[size])} whileHover={{ ...scale}}>
                <Image
                src={imgSrc}
                alt="image"
                fill
                className={styles.cardImg}
                onError={handleOnError}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </motion.div>
        </div>
    )
}