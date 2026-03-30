'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { LayoutDashboard, BarChart3, Users, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { NavItem } from '@/types'

const sidebarItems: NavItem[] = [
  {
    title: '대시보드',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: '분석',
    href: '/dashboard/analytics',
    icon: BarChart3,
  },
  {
    title: '사용자',
    href: '/dashboard/users',
    icon: Users,
  },
  {
    title: '설정',
    href: '/dashboard/settings',
    icon: Settings,
  },
]

function SidebarNav() {
  const pathname = usePathname()

  return (
    <nav className="flex-1 p-4 space-y-1">
      {sidebarItems.map((item) => {
        const Icon = item.icon
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors',
              isActive
                ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
            )}
          >
            {Icon && <Icon className="h-4 w-4" />}
            <span>{item.title}</span>
          </Link>
        )
      })}
    </nav>
  )
}

export function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
      {/* 로고 영역 */}
      <div className="p-4 border-b border-sidebar-border">
        <Link href="/dashboard" className="flex items-center gap-2 font-bold">
          <div className="w-8 h-8 bg-sidebar-primary rounded-lg flex items-center justify-center text-sidebar-primary-foreground">
            M
          </div>
          <span>Dashboard</span>
        </Link>
      </div>

      {/* 네비게이션 */}
      <SidebarNav />

      {/* 하단 영역 */}
      <div className="p-4 border-t border-sidebar-border text-xs text-sidebar-foreground/60">
        <p>© 2024 Modern Kit</p>
      </div>
    </aside>
  )
}
