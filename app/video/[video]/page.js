'use client'
import { useRouter } from "next/navigation"

export default function Video () {
    const router = useRouter()
    console.log({router})
    return <div>
        video page {router.query}
    </div>
}