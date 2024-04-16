import { AlertDescription, AlertTitle, Alert } from '@/components/ui/alert'
import { Check } from 'lucide-react'

interface Props {
  message: undefined | string
  title?: string
}

export const SuccessAlert = ({ message, title }: Props) => {
  return (
    <Alert>
      <Check className="h-4 w-4" />
      <AlertTitle>{title ?? 'Success'}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  )
}
