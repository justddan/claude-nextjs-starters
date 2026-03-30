'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { BookOpen, Code2, Zap, Palette } from 'lucide-react'

const sections = [
  {
    title: '시작하기',
    icon: Zap,
    items: [
      '프로젝트 설치',
      '프로젝트 구조 이해',
      '첫 번째 컴포넌트 만들기',
    ],
  },
  {
    title: '핵심 개념',
    icon: BookOpen,
    items: [
      'Next.js App Router',
      'TypeScript 설정',
      'Tailwind CSS v4',
      'ShadcnUI 컴포넌트',
    ],
  },
  {
    title: '개발 가이드',
    icon: Code2,
    items: [
      '라우팅 가이드',
      'API 라우트 생성',
      '데이터 페칭',
      '폼 처리 (react-hook-form)',
    ],
  },
  {
    title: '디자인 시스템',
    icon: Palette,
    items: [
      'CSS 변수 활용',
      '다크모드 구현',
      '컬러 팔레트',
      '타이포그래피',
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function DocsPage() {
  return (
    <div className="min-h-screen py-12">
      {/* 헤더 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">문서</h1>
        <p className="text-lg text-muted-foreground">
          Modern Starter Kit 사용법과 가이드를 확인하세요.
        </p>
      </motion.div>

      {/* 문서 섹션 */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section) => {
            const Icon = section.icon
            return (
              <motion.div key={section.title} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <CardTitle>{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                        >
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* 추가 리소스 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 mt-16"
      >
        <Card>
          <CardHeader>
            <CardTitle>추가 리소스</CardTitle>
            <CardDescription>
              외부 문서 및 커뮤니티 링크
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm">
              • <span className="font-medium">Next.js 공식 문서</span> - nextjs.org/docs
            </p>
            <p className="text-sm">
              • <span className="font-medium">React 공식 문서</span> - react.dev
            </p>
            <p className="text-sm">
              • <span className="font-medium">Tailwind CSS</span> - tailwindcss.com
            </p>
            <p className="text-sm">
              • <span className="font-medium">ShadcnUI</span> - ui.shadcn.com
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
