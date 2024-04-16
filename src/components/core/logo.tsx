import { cn } from '@/lib/cn'

interface Props {
  className?: string
}

export function Logo({ className }: Props) {
  return (
    <svg
      className={cn('mt-[2px] stroke-primary', className)}
      strokeLinejoin="round"
      strokeLinecap="round"
      viewBox="0 0 24 24"
      strokeWidth="3"
      height="18"
      fill="none"
      width="18"
    >
      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"></path>
    </svg>
  )
}
