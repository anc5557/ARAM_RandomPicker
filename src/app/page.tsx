// path : /src/app/page.tsx
// 메인 페이지로 칼바람나락 자동픽을 소개하는 페이지
// 로그인 기능 없음
// 자동픽하는 방법 설명
// 버튼 클릭시 자동픽 시작
// 롤 버전 정보

import React from 'react'

export default function Home() {
  return (
    <div>
      <h1>칼바람나락 자동픽</h1>
      <p>칼바람 나락 사설방은 무작위가 아닙니다.</p>
      <p>이 웹사이트는 무작위픽을 지원합니다.</p>
      <p>칼바람나락 무작위픽은 롤 버전
        <span className="text-red-500"> 11.12 </span>
        기준 입니다.
      </p>
      <p>무작위픽을 시작하시려면 아래 버튼을 눌러주세요.</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        START
      </button>
    </div>
  )
}

  