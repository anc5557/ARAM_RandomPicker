// path : src/pages/_app.tsx
// 글로벌 설정을 위한 App 컴포넌트

import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import 'tailwindcss/tailwind.css'
import { ToastContainer } from 'react-toastify'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>ARAM Random Picker</title>
      </Head>
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between flex-wrap bg-purple-500 p-2">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link href="/">
            <span className="font-semibold text-xl tracking-tight cursor-pointer">ARAM Random Picker</span>
          </Link>
        </div>
      </nav>
      <div className="min-h-screen pb-8">
        <Component {...pageProps} />
      </div>
      <div className="fixed bottom-0 inset-x-0 p-4 bg-purple-500 "></div>
      <ToastContainer />
    </>
  )
}

export default App
