'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'Modern Starter Kit은 무엇인가요?',
    answer: 'Modern Starter Kit은 Next.js, React, TypeScript, Tailwind CSS, ShadcnUI로 구성된 완전한 웹 애플리케이션 보일러플레이트입니다. 프로젝트 설정 없이 바로 개발을 시작할 수 있습니다.',
  },
  {
    question: '어떤 브라우저를 지원하나요?',
    answer: '모든 모던 브라우저(Chrome, Firefox, Safari, Edge)의 최신 두 버전을 지원합니다. IE는 지원하지 않습니다.',
  },
  {
    question: '라이선스는 어떻게 되나요?',
    answer: 'Modern Starter Kit은 MIT 라이선스 하에 배포됩니다. 자유롭게 사용, 수정, 배포할 수 있습니다.',
  },
  {
    question: '프로덕션 배포는 어떻게 하나요?',
    answer: 'npm run build를 실행하여 프로덕션 빌드를 생성한 후, Vercel, Netlify, AWS 등의 호스팅 서비스에 배포할 수 있습니다.',
  },
  {
    question: 'TypeScript를 꼭 써야 하나요?',
    answer: '아니요. JavaScript를 사용할 수도 있습니다. 하지만 TypeScript를 사용하면 더 안전하고 유지보수하기 쉬운 코드를 작성할 수 있습니다.',
  },
  {
    question: '데이터베이스를 어떻게 연결하나요?',
    answer: 'Prisma, Supabase, Firebase 등의 ORM/BaaS 서비스를 사용하여 데이터베이스를 연결할 수 있습니다. API 라우트를 통해 데이터베이스와 통신합니다.',
  },
  {
    question: '팀 협업은 어떻게 하나요?',
    answer: 'Git을 사용하여 버전 관리를 하고, GitHub, GitLab 등에서 협업할 수 있습니다. ESLint와 Prettier로 코드 스타일을 통일할 수 있습니다.',
  },
  {
    question: '성능 최적화는 어떻게 하나요?',
    answer: 'Next.js의 Image 컴포넌트, 동적 import, 코드 스플리팅 등을 활용하여 성능을 최적화할 수 있습니다.',
  },
]

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="cursor-pointer hover:shadow-md transition-shadow">
      <CardHeader
        onClick={() => setIsOpen(!isOpen)}
        className="pb-3"
      >
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">{question}</CardTitle>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          </motion.div>
        </div>
      </CardHeader>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <CardContent>
          <p className="text-sm text-muted-foreground">{answer}</p>
        </CardContent>
      </motion.div>
    </Card>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
}

export default function FaqPage() {
  return (
    <div className="min-h-screen py-12">
      {/* 헤더 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">자주 묻는 질문</h1>
        <p className="text-lg text-muted-foreground">
          Modern Starter Kit에 관해 자주 묻는 질문들의 답변입니다.
        </p>
      </motion.div>

      {/* FAQ 항목 */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl mx-auto px-4 space-y-3"
      >
        {faqs.map((faq, index) => (
          <motion.div key={index} variants={itemVariants}>
            <FaqItem question={faq.question} answer={faq.answer} />
          </motion.div>
        ))}
      </motion.div>

      {/* 추가 도움 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 mt-16"
      >
        <Card>
          <CardHeader>
            <CardTitle>더 궁금한 점이 있으신가요?</CardTitle>
            <CardDescription>
              문서를 확인하거나 커뮤니티에 질문해보세요.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <a href="/docs" className="text-primary hover:underline font-medium">
                문서 보기
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="https://github.com" className="text-primary hover:underline font-medium">
                GitHub 이슈 등록
              </a>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
