'use client'

import { MessageCircle } from 'lucide-react'
import { Button } from '../ui/button'
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogHeader } from '../ui/dialog'
import { Textarea } from '../ui/textarea'
import { useState } from 'react'
import { sendMessageToStudent, sendMessageToTeacher } from '@/lib/chats/actions'
import { useRouter } from 'next/navigation'

interface Props {
  teacher_id: number | undefined
  student_id: number | undefined
  senderRole: 'STUDENT' | 'TEACHER' | undefined
}

export function SendMessageDialog({ senderRole, student_id, teacher_id }: Props) {
  const [message, setMessage] = useState('')
  const router = useRouter()

  const handleClick = () => {
    if (senderRole === 'STUDENT') {
      sendMessageToTeacher(message, teacher_id, student_id)
    } else {
      sendMessageToStudent(message, teacher_id, student_id)
    }
    router.push('/messages')
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'secondary'} className="flex gap-2">
          <MessageCircle size={16} />
          Message
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Message</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Message"
            className="resize-none"
          />
          <Button onClick={handleClick}>Send</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
