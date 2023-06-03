'use client';
import { useState } from 'react';
import Image from 'next/image'
import styles from './navbar.module.css'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const NavBar = (props) => {
    const [dropDown, setDropDown] = useState(false)
    const { username } = props
    const router = useRouter()

    const handleOnClickHome = (e) => {
        e.preventDefault()
        router.push("/")
    }

    const handleOnClickMyList = (e) => {
        e.preventDefault()
        router.push("/browse/my-list")
    }

    const handleDropDown = (e) => {
        e.preventDefault()
        setDropDown(!dropDown)
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <a className={styles.logoLink} >
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
                </a>
                <ul className={styles.navItems}>
                    <li className={styles.navItem} onClick={handleOnClickHome}>Home</li>
                    <li className={styles.navItem2} onClick={handleOnClickMyList}>My List</li>
                </ul>
                <nav className={styles.navContainer}>
                    <div>
                        <button className={styles.usernameBtn} onClick={handleDropDown}>
                            <p className={styles.username}>
                                {username}
                            </p>
                        </button>

                        { dropDown && (
                            <div className={styles.navDropdown}>
                            <div>
                                <Link href="/login">
                                    <p className={styles.linkName}> Sign out</p>
                                </Link>
                                <div className={styles.lineWrapper}></div>
                            </div>
                        </div>
                        )}
                    </div>

                </nav>
            </div>
        </div>
    )
}

export default NavBar