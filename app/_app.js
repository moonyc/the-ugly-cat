import { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { magic } from "@/lib/magic-client";
import Loading from "@/components/loading/loading";

export default function MyApp({ Component, pageProps }) {
    const router = useRouter()
    const [isLoading, setIsLoggedIn] = useState(true)
    useEffect(() => {
        const handleLoggedIn = async () => {
            const isLoggedIn = await magic.user.isLoggedIn()
            if(isLoggedIn) {
                router.push("/")
                setIsLoggedIn(true)
            } else {
                router.push("/login")
                setIsLoggedIn(false)
            }
        }
        handleLoggedIn()
    }, [router])
    return <React.StrictMode>isLoading ? <Loading/> : <Component {...pageProps} /></React.StrictMode>
}
