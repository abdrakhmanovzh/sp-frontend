'use client'

import { MessageFormType, messageSchema } from '@/models/core/chat'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem } from '../ui/form'
import { SendHorizonal } from 'lucide-react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { sendMessageToStudent, sendMessageToTeacher } from '@/lib/chats/actions'

interface Props {
  sender_id: number | undefined
  receiver_id: number | undefined
  receiver_role: string | undefined
}

export function ChatInput({ receiver_id, sender_id, receiver_role }: Props) {
  console.log('receiver_id', receiver_id)
  console.log('sender_id', sender_id)
  console.log('receiver_role', receiver_role)

  const form = useForm<MessageFormType>({
    defaultValues: {
      text: ''
    },
    resolver: zodResolver(messageSchema)
  })

  const onSubmit = async (values: MessageFormType) => {
    if (receiver_role === 'TEACHER') {
      await sendMessageToTeacher(values.text, receiver_id, sender_id)
    } else {
      await sendMessageToStudent(values.text, sender_id, receiver_id)
    }

    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-3">
        <FormField
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input className="text-md h-14" type="text" {...field} placeholder="type here..." />
              </FormControl>
            </FormItem>
          )}
          control={form.control}
          name="text"
        />

        <Button className="h-14 w-14" type="submit">
          <SendHorizonal size={18} />
        </Button>
      </form>
    </Form>
  )
}
