'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { Clock, User } from 'lucide-react'

const posts = [
  {
    id: 1,
    title: 'Modern Starter Kit 1.0 출시',
    description: 'Next.js 16, React 19, Tailwind CSS v4를 지원하는 완전히 새로워진 스타터킷 출시',
    author: 'Admin',
    date: '2024-03-30',
    category: '공지',
    readTime: '5분',
  },
  {
    id: 2,
    title: 'Next.js App Router 완벽 가이드',
    description: 'Next.js 13+의 App Router를 처음부터 끝까지 배워보세요.',
    author: 'Developer',
    date: '2024-03-28',
    category: '튜토리얼',
    readTime: '12분',
  },
  {
    id: 3,
    title: 'Tailwind CSS v4의 새로운 기능들',
    description: 'CSS-first 방식의 Tailwind CSS v4에서 뭐가 달라졌을까요?',
    author: 'Designer',
    date: '2024-03-25',
    category: '가이드',
    readTime: '8분',
  },
  {
    id: 4,
    title: '다크모드 구현하기: next-themes 사용법',
    description: '사용자의 선호도를 저장하는 완벽한 다크모드 구현 방법',
    author: 'Developer',
    date: '2024-03-20',
    category: '튜토리얼',
    readTime: '10분',
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

export default function BlogPage() {
  return (
    <div className="min-h-screen py-12">
      {/* 헤더 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">블로그</h1>
        <p className="text-lg text-muted-foreground">
          웹 개발 팁, 튜토리얼 및 업데이트 소식을 확인하세요.
        </p>
      </motion.div>

      {/* 블로그 포스트 목록 */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl mx-auto px-4 space-y-6"
      >
        {posts.map((post) => (
          <motion.div key={post.id} variants={itemVariants}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="secondary">{post.category}</Badge>
                </div>
                <CardTitle className="text-xl hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.date}
                  </div>
                  <div>{post.readTime}</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
