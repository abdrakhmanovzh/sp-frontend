import { InfoCard } from '@/components/core/info-card'
import { Tally1, Tally2, Tally3 } from 'lucide-react'

const steps = [
  {
    content: 'Watch teacher’s introduction and read reviews from other students',
    title: 'Choose your tutor',
    icon: Tally1
  },
  {
    content: 'Schedule lessons at a time and date that suit you',
    title: 'Book your lesson',
    icon: Tally2
  },
  {
    content: 'Connect with your teacher via video chat, and let the learning begin!',
    title: 'Start learning',
    icon: Tally3
  }
]

export function Steps() {
  return (
    <section
      className="flex min-h-[80svh] scroll-m-10 flex-col items-center justify-center gap-10 md:px-[10%] lg:px-[15%]"
      id="how-it-works"
    >
      <h2 className="text-5xl font-medium text-foreground">How it works</h2>

      <div className="flex w-full flex-col justify-between gap-4 md:flex-row">
        {steps.map((step) => (
          <InfoCard className="max-w-md cursor-default" key={step.title} infoCard={step} />
        ))}
      </div>
    </section>
  )
}
