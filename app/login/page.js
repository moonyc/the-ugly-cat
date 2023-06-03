"use client"
import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'
import cls from 'classnames'

export default async function login() {
    const handleLoginWithEmail = async (e) => {
        e.preventDefault()
        console.log('login button')
    }
    return (
        <div className={styles.container}>
            <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <Link className={styles.logoLink} href="/">
                    <div className={styles.logoWrapper}>
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
                </Link>
            </div>
        </header>
        <main className={styles.main}>
            <div className={cls('glass',styles.mainWrapper)}>
                <h1 className={styles.signinHeader}>
                    Welcome
                </h1>
                <input
                    type='text'
                    placeholder='diderot@domain.com'
                    className={styles.emailInput}
                />
                <p className={styles.userMsg}></p>
                <button onClick={handleLoginWithEmail} className={styles.loginBtn}>
                    Sign In
                </button>
            </div>
        </main>
    </div>
    )
}