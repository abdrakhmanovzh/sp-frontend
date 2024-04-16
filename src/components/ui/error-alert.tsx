import { AlertDescription, AlertTitle, Alert } from '@/components/ui/alert'
import { AlertCircle } from 'lucide-react'

interface Props {
  message: undefined | string
  title?: string
}

export const ErrorAlert = ({ message, title }: Props) => {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{title ?? 'Error'}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  )
}
