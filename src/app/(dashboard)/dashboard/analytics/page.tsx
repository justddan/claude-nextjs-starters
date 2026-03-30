'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart3, TrendingUp, Users, Activity } from 'lucide-react'

const stats = [
  {
    label: '월 방문자',
    value: '12,456',
    change: '+12.5%',
    icon: Users,
  },
  {
    label: '페이지뷰',
    value: '45,231',
    change: '+8.2%',
    icon: Activity,
  },
  {
    label: '평균 세션 시간',
    value: '4m 32s',
    change: '+3.1%',
    icon: BarChart3,
  },
  {
    label: '전환율',
    value: '3.24%',
    change: '+0.8%',
    icon: TrendingUp,
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

export default function AnalyticsPage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-8"
    >
      {/* 페이지 헤더 */}
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl font-bold">분석</h1>
        <p className="text-muted-foreground mt-2">
          웹사이트 트래픽 및 사용자 행동을 분석합니다.
        </p>
      </motion.div>

      {/* 통계 카드 */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-green-600 mt-2">{stat.change} from last month</p>
              </CardContent>
            </Card>
          )
        })}
      </motion.div>

      {/* 상세 분석 */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>월별 방문자 추이</CardTitle>
            <CardDescription>지난 12개월간의 방문자 통계</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, i) => (
                <div key={month} className="flex items-center gap-4">
                  <div className="w-12 font-medium text-sm">{month}</div>
                  <div className="flex-1 bg-muted rounded-full h-8">
                    <div
                      className="bg-primary rounded-full h-8 flex items-center justify-end pr-3"
                      style={{ width: `${60 + i * 10}%` }}
                    >
                      <span className="text-xs font-medium text-primary-foreground">
                        {2000 + i * 500}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* 방문자 소스 */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>트래픽 소스</CardTitle>
            <CardDescription>방문자의 유입 경로</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { source: 'Organic Search', users: '8,234', percentage: 65 },
                { source: 'Direct', users: '2,456', percentage: 20 },
                { source: 'Social Media', users: '1,234', percentage: 10 },
                { source: 'Referral', users: '512', percentage: 5 },
              ].map((item) => (
                <div key={item.source} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm">{item.source}</p>
                    <p className="text-xs text-muted-foreground">{item.users} users</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-16 bg-muted rounded-full h-2">
                      <div
                        className="bg-primary rounded-full h-2"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium w-8">{item.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
