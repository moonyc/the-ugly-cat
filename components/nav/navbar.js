'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from './navbar.module.css'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { magic } from '@/lib/magic-client';

const NavBar = (props) => {
    const [dropDown, setDropDown] = useState(false)
    const [username, setUserName] = useState('')
    const router = useRouter()

    useEffect(() => {
        async function getUserName() {
            try {
                const { email } = await magic.user.getMetadata()
                if(email) {
                    setUserName(email)
                } 
            } catch (error) {
                console.log("Couldn't retrieve the username", error)
            }
        }
        getUserName()
    }, [])

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
    const handleSignOut = async (e) => {
        e.preventDefault()

        try{
            await magic.user.logout()
            router.push('/login')
        }catch(error) {
            console.error("Error loggin out", error)
            router.push("/login")
        }
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
                                <p className={styles.linkName} onClick={handleSignOut}> Sign out</p>
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