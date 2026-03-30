import type { LucideIcon } from 'lucide-react'

// 네비게이션 아이템
export interface NavItem {
  title: string
  href: string
  icon?: LucideIcon
  description?: string
  disabled?: boolean
  external?: boolean
}

// 피처 카드
export interface Feature {
  title: string
  description: string
  icon: LucideIcon
}

// 대시보드 통계 카드
export interface StatCard {
  title: string
  value: string | number
  description?: string
  icon: LucideIcon
  trend?: {
    value: number // 퍼센트
    direction: 'up' | 'down'
  }
}

// 최근 활동 아이템
export interface ActivityItem {
  id: string
  title: string
  description: string
  timestamp: string
  icon?: LucideIcon
  status?: 'success' | 'warning' | 'error' | 'info'
}
