'use client'

import { Users, TrendingUp, ShoppingCart, DollarSign } from 'lucide-react'
import { StatCard } from '@/components/dashboard/stat-card'
import { ActivityList } from '@/components/dashboard/activity-list'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import type { StatCard as StatCardType, ActivityItem } from '@/types'

const stats: StatCardType[] = [
  {
    title: '총 사용자',
    value: '2,345',
    icon: Users,
    trend: { value: 12, direction: 'up' },
  },
  {
    title: '월 매출',
    value: '₩1.2M',
    icon: DollarSign,
    trend: { value: 8, direction: 'up' },
  },
  {
    title: '주문 수',
    value: '456',
    icon: ShoppingCart,
    trend: { value: 3, direction: 'down' },
  },
  {
    title: '전환율',
    value: '3.2%',
    icon: TrendingUp,
    trend: { value: 1.5, direction: 'up' },
  },
]

const recentActivity: ActivityItem[] = [
  {
    id: '1',
    title: '새 사용자 가입',
    description: 'kim-donggyu@example.com이 가입했습니다.',
    timestamp: '2분 전',
    status: 'success',
  },
  {
    id: '2',
    title: '주문 완료',
    description: '주문 #12345가 완료되었습니다.',
    timestamp: '15분 전',
    status: 'success',
  },
  {
    id: '3',
    title: '시스템 경고',
    description: 'API 응답 시간이 높습니다.',
    timestamp: '1시간 전',
    status: 'warning',
  },
  {
    id: '4',
    title: '결제 처리',
    description: '결제가 거부되었습니다.',
    timestamp: '3시간 전',
    status: 'error',
  },
  {
    id: '5',
    title: '시스템 공지',
    description: '정기 점검이 완료되었습니다.',
    timestamp: '1일 전',
    status: 'info',
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

export default function DashboardPage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-8"
    >
      {/* 페이지 헤더 */}
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl font-bold">대시보드</h1>
        <p className="text-muted-foreground mt-2">
          시스템의 주요 메트릭을 한눈에 확인하세요.
        </p>
      </motion.div>

      {/* 통계 카드 그리드 */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </motion.div>

      {/* 컨텐츠 그리드 */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* 최근 활동 */}
        <div className="lg:col-span-2">
          <ActivityList items={recentActivity} />
        </div>

        {/* 빠른 액션 */}
        <Card>
          <CardHeader>
            <CardTitle>빠른 액션</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              새 사용자 추가
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-4 py-2 rounded-lg border hover:bg-muted transition-colors text-sm font-medium"
            >
              보고서 생성
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-4 py-2 rounded-lg border hover:bg-muted transition-colors text-sm font-medium"
            >
              설정으로 이동
            </motion.button>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
