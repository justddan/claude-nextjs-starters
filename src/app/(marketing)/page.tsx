import { HeroSection } from '@/components/marketing/hero-section'
import { FeatureSection } from '@/components/marketing/feature-section'
import { CtaSection } from '@/components/marketing/cta-section'

export const metadata = {
  title: 'Modern Starter Kit - 빠른 웹 개발 시작',
}

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <CtaSection />
    </>
  )
}
