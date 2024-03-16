'use client'

import { FormControl, FormField, FormItem, Form } from '@/shared/components/ui/form'
import { Button } from '@/shared/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/shared/components/ui/input'
import { SendHorizonal } from 'lucide-react'
import { useForm } from 'react-hook-form'

import { TMessageRequest, messageSchema } from '../models'

export function ChatInput() {
  const form = useForm<TMessageRequest>({
    resolver: zodResolver(messageSchema),
    defaultValues: { content: '' }
  })

  const onSubmit = async (values: TMessageRequest) => {
    try {
      console.log(values)
    } catch (error) {
      if (error instanceof Error) {
        form.setError('root', {
          message: error.message
        })
      }
    }
  }

  return (
    <div className="p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-3">
          <FormField
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    className="text-md h-14"
                    type="text"
                    {...field}
                    placeholder="type here..."
                  />
                </FormControl>
              </FormItem>
            )}
            control={form.control}
            name="content"
          />

          <Button className="h-14 w-14" type="submit">
            <SendHorizonal size={18} />
          </Button>
        </form>
      </Form>
    </div>
  )
}
