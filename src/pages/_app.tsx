// path : src/pages/_app.tsx
// 글로벌 설정을 위한 App 컴포넌트

import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>ARAM Auto Random Pick</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
