"use client"
import {  useState} from 'react'
import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'
import cls from 'classnames'
import { useRouter } from 'next/navigation'
import { magic } from '@/lib/magic-client'

export default function Login() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [userMsg, setUserMsg] = useState("")
    const [isLoading, setIsLoading] = useState(false)

 
    const handleOnChangeEmail =(e) => {
        setUserMsg("")
        const email = e.target.value;
        setEmail(email)
    }
    const handleLoginWithEmail = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        if(email) {
            if(email === "municfara@gmail.com") {
                // log in a user by their email
                try {
                    const didToken = await magic.auth.loginWithEmailOTP({ email: email });
                    if(didToken) {
                        setIsLoading(false)
                        router.push("/")
                    }
                } catch (error){
                    console.log("Someting went wrong during the login", error)
                    setIsLoading(false)
                }
            } else {
                setIsLoading(false)
                setUserMsg("Someting went wrong during the login")
            }
        } else {
            setIsLoading(false)
            setUserMsg("Enter a valid email address 🙀")
        }
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
                    onChange={handleOnChangeEmail}
                />
                <p className={styles.userMsg}>{userMsg}</p>
                <button onClick={handleLoginWithEmail} className={styles.loginBtn}>
                   {isLoading ? "Loading..." : "Sign In"}
                </button>
            </div>
        </main>
    </div>
    )
}