'use client'

import Link from 'next/link'
import { ArrowRight, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36 lg:py-48">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          {/* 새로운 배지 */}
          <motion.div variants={itemVariants}>
            <Badge className="gap-2">
              <Zap className="h-3 w-3" />
              새로운 버전 출시
            </Badge>
          </motion.div>

          {/* 메인 제목 */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            빠른 웹 개발을 위한
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              모던 스타터킷
            </span>
          </motion.h1>

          {/* 설명 */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Next.js, TypeScript, Tailwind CSS, ShadcnUI로 구성된 완벽한 보일러플레이트.
            프로젝트 설정 없이 바로 개발을 시작하세요.
          </motion.p>

          {/* CTA 버튼 */}
          <motion.div variants={itemVariants} className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/dashboard" className="gap-2">
                시작하기
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/#features">더 알아보기</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
