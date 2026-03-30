'use client'

import { motion } from 'framer-motion'

export default function TermsPage() {
  return (
    <div className="min-h-screen py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 prose prose-invert max-w-none"
      >
        <h1 className="text-4xl font-bold mb-8">이용약관</h1>
        <p className="text-muted-foreground mb-8">마지막 업데이트: 2024년 3월 30일</p>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">1. 약관 동의</h2>
            <p className="text-muted-foreground leading-relaxed">
              Modern Starter Kit을 사용함으로써 귀하는 본 약관에 동의하는 것입니다.
              약관에 동의하지 않으시면 서비스를 사용할 수 없습니다.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">2. 서비스 설명</h2>
            <p className="text-muted-foreground leading-relaxed">
              Modern Starter Kit은 Next.js 기반의 웹 애플리케이션 개발 보일러플레이트입니다.
              저희는 서비스를 무료로 제공하며, 언제든 변경 또는 중단할 수 있습니다.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">3. 사용자 책임</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              사용자는 다음에 동의합니다:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>서비스를 합법적으로만 사용</li>
              <li>다른 사용자를 괴롭히거나 해치지 않음</li>
              <li>지적재산권을 침해하지 않음</li>
              <li>악성 코드 배포하지 않음</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">4. 지적재산권</h2>
            <p className="text-muted-foreground leading-relaxed">
              Modern Starter Kit의 모든 콘텐츠, 기능, 소프트웨어는 MIT 라이선스 하에 배포됩니다.
              자세한 내용은 LICENSE 파일을 참조하시기 바랍니다.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">5. 면책조항</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              저희 서비스는 "있는 그대로" 제공됩니다:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>명시적 또는 묵시적 보증 없음</li>
              <li>상품성 또는 특정 목적 적합성 보장 안 함</li>
              <li>서비스 중단이나 오류에 대한 책임 없음</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">6. 책임 제한</h2>
            <p className="text-muted-foreground leading-relaxed">
              저희는 서비스 사용으로 인한 어떤 손해(직접, 간접, 부수적 손해 포함)에
              대해서도 책임을 지지 않습니다.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">7. 약관 변경</h2>
            <p className="text-muted-foreground leading-relaxed">
              저희는 예고 없이 약관을 변경할 수 있습니다.
              변경된 약관 사용 시 새로운 약관에 동의한 것으로 간주됩니다.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">8. 준거법</h2>
            <p className="text-muted-foreground leading-relaxed">
              본 약관은 대한민국 법률에 따라 해석 및 집행됩니다.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">9. 문의</h2>
            <p className="text-muted-foreground leading-relaxed">
              약관에 관한 문의사항은 contact@example.com으로 연락주시기 바랍니다.
            </p>
          </div>
        </section>
      </motion.div>
    </div>
  )
}
