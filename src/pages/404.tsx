// path : src/pages/404.tsx

import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const NotFoundPage: NextPage = () => {
  const router = useRouter()
  return (
    <div>
      <h1>404</h1>
      <p>요청하신 페이지를 찾을 수 없습니다.</p>
      <button onClick={() => router.push('/')}>홈으로</button>
    </div>
  )
}

export default NotFoundPage