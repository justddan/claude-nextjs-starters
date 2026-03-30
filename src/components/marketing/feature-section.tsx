'use client'

import { Zap, Shield, Palette, Code2, Globe, Layers } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import type { Feature } from '@/types'

const features: Feature[] = [
  {
    title: '빠른 성능',
    description: 'Next.js와 React Compiler로 최적화된 번개 같은 성능',
    icon: Zap,
  },
  {
    title: '타입 안전성',
    description: 'TypeScript로 런타임 에러를 사전에 방지',
    icon: Shield,
  },
  {
    title: '아름다운 UI',
    description: 'Tailwind CSS와 ShadcnUI로 만든 현대적인 디자인',
    icon: Palette,
  },
  {
    title: '개발자 경험',
    description: '직관적인 구조와 풍부한 컴포넌트로 빠른 개발',
    icon: Code2,
  },
  {
    title: '반응형 디자인',
    description: '모든 기기에 자동으로 최적화되는 반응형 레이아웃',
    icon: Globe,
  },
  {
    title: '모듈화 구조',
    description: '쉽게 확장 가능한 깔끔한 프로젝트 구조',
    icon: Layers,
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

export function FeatureSection() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">강력한 기능들</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            모던 웹 개발을 위해 필요한 모든 것이 포함되어 있습니다.
          </p>
        </motion.div>

        {/* 피처 그리드 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div key={feature.title} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
