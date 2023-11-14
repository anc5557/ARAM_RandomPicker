// path : src/pages/index.tsx
// 홈페이지

import React from 'react'
import { useRouter } from 'next/router'
import { version } from '../data/lol_data'

export default function Home() {
    const router = useRouter()
    const handleStartClick = () => {
        router.push('/settings')
    }

    return (
        <div className="container mx-auto px-4 py-12 flex flex-col items-center pb-10 pt-36">
            <h1 className="text-5xl font-bold text-center text-gray-800 mb-3">ARAM</h1>
            <h1 className="text-5xl font-bold text-center text-gray-800 mb-10">Random Picker</h1>
            <p className="text-base text-gray-600 text-center lg:text-lg mb-4 ">Random picks are not supported in private room.</p>
            <p className="text-base text-gray-600 text-center lg:text-lg mb-4">This website supports random picks.</p>
            <p className="text-base text-gray-600 text-center lg:text-lg mb-4">League of Legends version:
                <span className="text-red-500"> {version} </span>
            </p>
            <p className="text-base text-gray-600 text-center lg:text-lg mb-10">To start the random pick, click the button below.</p>
            <button onClick={handleStartClick} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out flex justify-center">
                START
            </button>
        </div>

    )
}
