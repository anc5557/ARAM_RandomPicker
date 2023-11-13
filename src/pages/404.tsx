// path : src/pages/404.tsx

import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const NotFoundPage: NextPage = () => {
  const router = useRouter()
  return (
    <div>
      <h1>404</h1>
      <p> page not found </p>
      <button onClick={() => router.push('/')}>go back home </button>
    </div>
  )
}

export default NotFoundPage