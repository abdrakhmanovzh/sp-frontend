import { Features } from '@/components/home/features'
import { Mission } from '@/components/home/mission'
import { Steps } from '@/components/home/steps'
import { Start } from '@/components/home/start'
import { Hero } from '@/components/home/hero'

export default function Page() {
  return (
    <div className="flex flex-1 flex-col px-4 pb-20">
      <Hero />
      <Features />
      <Mission />
      <Steps />
      <Start />
    </div>
  )
}
