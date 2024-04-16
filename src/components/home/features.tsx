'use client'

import { GraduationCap, BadgeCheck, DollarSign, Calendar, Shield, Gift } from 'lucide-react'
import { HoverInfoCard } from '@/components/core/hover-info-card'
import { createRef } from 'react'

const features = [
  {
    content:
      'We encourage our community to vet and rate our instructors so that you get access to the best online instructors approved by former learners',
    title: 'Great instructors',
    icon: BadgeCheck
  },
  {
    content:
      'As our instructors and tutors come from all around the globe, they can offer high quality teaching at a more affordable local rate starting as low at $7/hour',
    title: 'Affordable classes',
    icon: DollarSign
  },
  {
    content:
      'Most of our tutors and instructors offer free trial classes. You can see if you enjoy the classes and the learning experience',
    title: 'Free Trial Lessons',
    icon: Gift
  },
  {
    content:
      'Rest assured with a secure online platform that prioritizes your privacy and provides a safe environment for learning',
    title: 'Secure Online Platform',
    icon: Shield
  },
  {
    content:
      'Our instructors offer flexible scheduling so that you can learn at a time that is convenient for you',
    title: 'Flexible Scheduling',
    icon: Calendar
  },
  {
    content:
      'Our instructors are experienced in teaching students of all ages and levels. You can find the perfect instructor for your learning needs',
    title: 'Experienced Instructors',
    icon: GraduationCap
  }
]

export function Features() {
  const hoverCardRefs = features.map(() => createRef<HTMLDivElement>())

  const handleOnMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    for (const hoverCardRef of hoverCardRefs) {
      if (!hoverCardRef.current) {
        continue
      }

      const rect = hoverCardRef.current.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top

      hoverCardRef.current.style.setProperty('--mouse-x', `${x}px`)
      hoverCardRef.current.style.setProperty('--mouse-y', `${y}px`)
    }
  }

  return (
    <section
      className="flex min-h-[90svh] scroll-my-20 flex-col items-center justify-center gap-10"
      onMouseMove={handleOnMouseMove}
      id="about"
    >
      <h2 className="text-center text-5xl font-medium text-foreground">
        Platform created for Online Tutoring
      </h2>

      <div className="hover-cards grid w-full grid-cols-1 gap-4 py-20 md:grid-cols-3 md:px-[10%]">
        {features.map((feature, index) => (
          <HoverInfoCard ref={hoverCardRefs[index]} key={feature.title} infoCard={feature} />
        ))}
      </div>
    </section>
  )
}
