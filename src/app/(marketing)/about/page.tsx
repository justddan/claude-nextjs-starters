'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Zap, Users, Lightbulb } from 'lucide-react'

const values = [
  {
    title: '빠른 개발',
    description: '복잡한 설정 없이 바로 프로젝트를 시작할 수 있도록 설계했습니다.',
    icon: Zap,
  },
  {
    title: '개발자 경험',
    description: '직관적인 구조와 명확한 문서로 최고의 개발 경험을 제공합니다.',
    icon: Users,
  },
  {
    title: '모던 기술 스택',
    description: '최신 웹 개발 기술을 활용하여 미래에 대비합니다.',
    icon: Lightbulb,
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

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      {/* 헤더 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">Modern Starter Kit에 대해</h1>
        <p className="text-lg text-muted-foreground">
          더 빠르고 쉬운 웹 개발을 위해 만들어진 프로젝트입니다.
        </p>
      </motion.div>

      {/* 미션 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 mb-16"
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">우리의 미션</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Modern Starter Kit은 개발자들이 프로젝트 설정에 시간을 낭비하지 않고
              실제 비즈니스 로직 구현에 집중할 수 있도록 돕기 위해 만들어졌습니다.
            </p>
            <p>
              최신 웹 기술을 활용하면서도 사용하기 쉬운 구조를 유지하여,
              경험 많은 개발자부터 초보자까지 모두에게 유용한 프로젝트가 되고자 합니다.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* 핵심 가치 */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-4xl mx-auto px-4 mb-16"
      >
        <h2 className="text-2xl font-bold mb-8">핵심 가치</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <motion.div key={value.title} variants={itemVariants}>
                <Card>
                  <CardHeader>
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* 기술 스택 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4"
      >
        <Card>
          <CardHeader>
            <CardTitle>기술 스택</CardTitle>
            <CardDescription>
              최신 웹 개발 기술로 구성되어 있습니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-3">Frontend</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Next.js 16.2.1</li>
                  <li>• React 19</li>
                  <li>• TypeScript 5</li>
                  <li>• Tailwind CSS v4</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">라이브러리 & 도구</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• ShadcnUI</li>
                  <li>• framer-motion</li>
                  <li>• next-themes</li>
                  <li>• react-hook-form</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
