'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { CheckCircle2, Zap } from 'lucide-react'

const changes = [
  {
    version: '1.0.0',
    date: '2024-03-30',
    type: 'release',
    changes: [
      'Next.js 16.2.1 업그레이드',
      'React 19 지원',
      'TypeScript 5.x 업데이트',
      'Tailwind CSS v4 통합',
      'ShadcnUI 컴포넌트 추가',
      'framer-motion 애니메이션 구현',
      '다크모드 (next-themes)',
      '대시보드 레이아웃 추가',
      '마케팅 페이지 구현',
    ],
  },
  {
    version: '0.5.0',
    date: '2024-03-15',
    type: 'beta',
    changes: [
      '초기 프로젝트 스캐폴딩',
      '기본 라우팅 구조 설정',
      'UI 컴포넌트 기초 구축',
      '스타일링 시스템 구성',
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
}

export default function ChangelogPage() {
  return (
    <div className="min-h-screen py-12">
      {/* 헤더 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">변경 이력</h1>
        <p className="text-lg text-muted-foreground">
          Modern Starter Kit의 버전 히스토리를 확인하세요.
        </p>
      </motion.div>

      {/* 변경사항 목록 */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl mx-auto px-4 space-y-6"
      >
        {changes.map((change) => (
          <motion.div key={change.version} variants={itemVariants}>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      v{change.version}
                      <Badge variant={change.type === 'release' ? 'default' : 'secondary'}>
                        {change.type === 'release' ? '릴리스' : '베타'}
                      </Badge>
                    </CardTitle>
                    <CardDescription>{change.date}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {change.changes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
