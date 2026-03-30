'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Bell, Lock, Mail, Palette, Shield } from 'lucide-react'

const sections = [
  {
    title: '프로필 설정',
    description: '계정 정보를 관리합니다.',
    icon: Mail,
    fields: [
      { label: '이름', value: 'Kim Dong Gyu', type: 'text' },
      { label: '이메일', value: 'kim@example.com', type: 'email' },
      { label: '회사', value: 'Acme Inc.', type: 'text' },
    ],
  },
  {
    title: '보안 설정',
    description: '계정 보안을 관리합니다.',
    icon: Lock,
    fields: [
      { label: '현재 비밀번호', value: '', type: 'password' },
      { label: '새 비밀번호', value: '', type: 'password' },
      { label: '비밀번호 확인', value: '', type: 'password' },
    ],
  },
  {
    title: '알림 설정',
    description: '알림 및 메일 수신 설정을 관리합니다.',
    icon: Bell,
    items: [
      { label: '이메일 알림', enabled: true },
      { label: '푸시 알림', enabled: false },
      { label: '뉴스레터', enabled: true },
    ],
  },
  {
    title: '외관 설정',
    description: '앱의 모양과 느낌을 사용자화합니다.',
    icon: Palette,
    items: [
      { label: '다크모드', enabled: true },
      { label: '컴팩트 뷰', enabled: false },
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function SettingsPage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-8 max-w-4xl"
    >
      {/* 페이지 헤더 */}
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl font-bold">설정</h1>
        <p className="text-muted-foreground mt-2">
          계정과 애플리케이션 설정을 관리합니다.
        </p>
      </motion.div>

      {/* 프로필 설정 */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              프로필 설정
            </CardTitle>
            <CardDescription>계정 정보를 관리합니다.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {sections[0].fields?.map((field, idx) => (
              <div key={idx} className="space-y-2">
                <Label htmlFor={field.label}>{field.label}</Label>
                <Input
                  id={field.label}
                  type={field.type}
                  defaultValue={field.value}
                  placeholder={field.label}
                />
              </div>
            ))}
            <Button>변경사항 저장</Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* 보안 설정 */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              보안 설정
            </CardTitle>
            <CardDescription>계정 보안을 관리합니다.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {sections[1].fields?.map((field, idx) => (
              <div key={idx} className="space-y-2">
                <Label htmlFor={`password-${idx}`}>{field.label}</Label>
                <Input
                  id={`password-${idx}`}
                  type={field.type}
                  placeholder={field.label}
                />
              </div>
            ))}
            <Button>비밀번호 변경</Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* 알림 설정 */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              알림 설정
            </CardTitle>
            <CardDescription>알림 및 메일 수신 설정을 관리합니다.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {sections[2].items?.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <Label className="font-normal cursor-pointer">{item.label}</Label>
                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted">
                  <input
                    type="checkbox"
                    defaultChecked={item.enabled}
                    className="sr-only"
                  />
                  <div
                    className={`h-5 w-5 rounded-full transition-all ${
                      item.enabled ? 'translate-x-5 bg-primary' : 'translate-x-0.5 bg-muted-foreground'
                    }`}
                  />
                </div>
              </div>
            ))}
            <Button>저장</Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* 외관 설정 */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" />
              외관 설정
            </CardTitle>
            <CardDescription>앱의 모양과 느낌을 사용자화합니다.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {sections[3].items?.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <Label className="font-normal cursor-pointer">{item.label}</Label>
                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted">
                  <input
                    type="checkbox"
                    defaultChecked={item.enabled}
                    className="sr-only"
                  />
                  <div
                    className={`h-5 w-5 rounded-full transition-all ${
                      item.enabled ? 'translate-x-5 bg-primary' : 'translate-x-0.5 bg-muted-foreground'
                    }`}
                  />
                </div>
              </div>
            ))}
            <Button>저장</Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* 위험 영역 */}
      <motion.div variants={itemVariants}>
        <Card className="border-red-200 dark:border-red-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600">
              <Shield className="h-5 w-5" />
              위험 영역
            </CardTitle>
            <CardDescription>
              계정 삭제는 되돌릴 수 없습니다. 신중하게 진행하세요.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="destructive">계정 삭제</Button>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
