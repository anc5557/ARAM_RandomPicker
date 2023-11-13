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
        <title>칼바람나락 자동픽</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
