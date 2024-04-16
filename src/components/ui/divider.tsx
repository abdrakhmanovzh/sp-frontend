import { cn } from '@/lib/cn'

interface Props {
  text?: string
}

export const Divider = ({ text }: Props) => {
  return (
    <div className="my-2 flex items-center">
      <div className={cn('h-[1px] flex-1 bg-border')}></div>
      {text && <span className="mx-2 text-gray-500">{text}</span>}
      <div className={cn('h-[1px] flex-1 bg-border')}></div>
    </div>
  )
}
