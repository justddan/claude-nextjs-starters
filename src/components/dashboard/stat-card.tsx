'use client'

import { TrendingUp, TrendingDown } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import type { StatCard as StatCardType } from '@/types'

interface StatCardProps extends StatCardType {}

export function StatCard({ title, value, description, icon: Icon, trend }: StatCardProps) {
  const isTrendUp = trend?.direction === 'up'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="hover:shadow-md transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {title}
          </CardTitle>
          <Icon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="text-2xl font-bold">{value}</div>
          {description && (
            <CardDescription className="text-xs">{description}</CardDescription>
          )}
          {trend && (
            <div className="flex items-center gap-1 text-xs">
              {isTrendUp ? (
                <TrendingUp className="h-3 w-3 text-green-600" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-600" />
              )}
              <span className={isTrendUp ? 'text-green-600' : 'text-red-600'}>
                {trend.value}% 전월 대비
              </span>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
