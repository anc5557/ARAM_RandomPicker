// path : src/pages/_app.tsx
// 글로벌 설정을 위한 App 컴포넌트

import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import 'tailwindcss/tailwind.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>ARAM Auto Random Pick</title>
      </Head>
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between flex-wrap bg-purple-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link href="/">
            <span className="font-semibold text-xl tracking-tight cursor-pointer">ARAM Auto Random Pick</span>
          </Link>
        </div>
      </nav>
      <div className="min-h-screen pb-16 pt-20">
        <Component {...pageProps} />
      </div>
      {/* 푸터를 화면 하단에 고정합니다. */}
      <div className="fixed bottom-0 inset-x-0 h-4 bg-purple-500 h-10"></div>
    </>
  )
}

export default App
