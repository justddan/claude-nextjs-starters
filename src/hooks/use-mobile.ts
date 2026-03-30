'use client'

import { useEffect, useState } from 'react'

const MOBILE_BREAKPOINT = 768

export function useMobile(): boolean {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }

    // 초기값 설정
    setIsMobile(mql.matches)

    // 이벤트 리스너 등록 (deprecated addEventListener 사용, 구 브라우저 대응)
    if (mql.addEventListener) {
      mql.addEventListener('change', onChange)
    } else {
      // 구 API 호환성
      mql.addListener(onChange)
    }

    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener('change', onChange)
      } else {
        mql.removeListener(onChange)
      }
    }
  }, [])

  // SSR 안전성: undefined 상태에서 false 반환 (서버에서는 데스크탑으로 취급)
  return !!isMobile
}
