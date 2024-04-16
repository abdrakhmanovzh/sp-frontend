import { InfoCardType } from '@/models/core/info-card'
import { forwardRef } from 'react'

interface Props {
  infoCard: InfoCardType
}

export const HoverInfoCard = forwardRef<HTMLDivElement, Props>(function FeatureCard(
  { infoCard }: Props,
  ref
) {
  return (
    <div className="hover-card relative cursor-pointer rounded-xl bg-border" ref={ref}>
      <div className="hover-card-border"></div>
      <div className="hover-card-content flex flex-col p-6">
        <infoCard.icon className="h-8 w-8 text-primary" />
        <h3 className="mt-4 text-lg font-semibold leading-none tracking-tight">{infoCard.title}</h3>
        <p className="mt-2 text-foreground">{infoCard.content}</p>
      </div>
    </div>
  )
})
