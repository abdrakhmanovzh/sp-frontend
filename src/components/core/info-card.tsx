import { InfoCardType } from '@/models//core/info-card'
import { cn } from '@/lib/cn'

interface Props {
  infoCard: InfoCardType
  className?: string
}

export function InfoCard({ className, infoCard }: Props) {
  return (
    <div className={cn('hover-card relative cursor-pointer rounded-xl bg-border', className)}>
      <div className="hover-card-border"></div>
      <div className="hover-card-content flex flex-col p-6">
        <infoCard.icon className="h-8 w-8 text-primary" />
        <h3 className="mt-4 text-lg font-semibold leading-none tracking-tight">{infoCard.title}</h3>
        <p className="mt-2 text-foreground">{infoCard.content}</p>
      </div>
    </div>
  )
}
