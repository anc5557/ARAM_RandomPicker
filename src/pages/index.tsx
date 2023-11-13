// path : src/pages/index.tsx
// 홈페이지

import React from 'react'
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter()
    const handleStartClick = () => {
        router.push('/settings')
    }

    return (
        <div>
            <h1>ARAM Auto Random Pick</h1>
            <p>Random picks are not supported in private room. </p>
            <p>This website supports random picks.</p>
            <p>league of legends version :
                <span className="text-red-500"> 11.12 </span>
            </p>
            <p>To start the random pick, click the button below.</p>
            <button onClick={handleStartClick} className="bg-blue-500 hover:bg-blue-7 00 text-white font-bold py-2 px-4 rounded">
                START
            </button>
        </div>
    )
}
