'use client'

import { motion } from 'framer-motion'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 prose prose-invert max-w-none"
      >
        <h1 className="text-4xl font-bold mb-8">개인정보처리방침</h1>
        <p className="text-muted-foreground mb-8">마지막 업데이트: 2024년 3월 30일</p>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">1. 개요</h2>
            <p className="text-muted-foreground leading-relaxed">
              Modern Starter Kit("저희")은 귀하의 개인정보를 보호하기 위해 최선을 다합니다.
              이 개인정보처리방침은 저희가 수집하는 정보와 사용 방식을 설명합니다.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">2. 수집하는 정보</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              저희는 다음과 같은 정보를 수집할 수 있습니다:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>이름, 이메일 주소 등 직접 제공한 정보</li>
              <li>브라우저 타입, IP 주소 등 자동으로 수집된 정보</li>
              <li>쿠키 및 유사한 추적 기술을 통한 정보</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">3. 정보 사용</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              수집된 정보는 다음 목적으로 사용됩니다:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>서비스 제공 및 개선</li>
              <li>사용자 지원 및 통신</li>
              <li>법적 요구 사항 충족</li>
              <li>사기 예방</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">4. 정보 보호</h2>
            <p className="text-muted-foreground leading-relaxed">
              저희는 귀하의 개인정보를 보호하기 위해 적절한 기술적, 관리적 보안 조치를 취합니다.
              하지만 인터넷을 통한 전송은 100% 안전을 보장할 수 없습니다.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">5. 제3자와의 공유</h2>
            <p className="text-muted-foreground leading-relaxed">
              저희는 귀하의 동의 없이 개인정보를 제3자와 공유하지 않습니다.
              법적 요구나 서비스 제공 필요시에만 제한적으로 공유할 수 있습니다.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">6. 귀하의 권리</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              귀하는 다음 권리를 가집니다:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>보유한 개인정보 접근권</li>
              <li>오류 수정권</li>
              <li>정보 삭제권</li>
              <li>처리 제한권</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">7. 문의</h2>
            <p className="text-muted-foreground leading-relaxed">
              개인정보 처리에 관한 문의사항이 있으시면 contact@example.com으로 연락주시기 바랍니다.
            </p>
          </div>
        </section>
      </motion.div>
    </div>
  )
}
