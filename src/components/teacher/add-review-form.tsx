'use client'

import {
  FormControl,
  FormMessage,
  FormField,
  FormLabel,
  FormItem,
  Form
} from '@/components/ui/form'
import { ReviewFormType, reviewSchema, ReviewType } from '@/models/reviews/review'
import { zodResolver } from '@hookform/resolvers/zod'
import { Textarea } from '@/components/ui/textarea'
import { addReview } from '@/lib/teachers/actions'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { Star } from 'lucide-react'

interface Props {
  teacher_id: number
  student_id: number
  rating: number
}

export function AddReviewForm({ student_id, teacher_id, rating }: Props) {
  const form = useForm<ReviewFormType>({
    defaultValues: {
      description: '',
      rating: '',
      student_id,
      teacher_id
    },
    resolver: zodResolver(reviewSchema)
  })

  const onSubmit = async (values: ReviewFormType) => {
    const { message, status } = await addReview(values, teacher_id.toString())

    if (status === 'error') {
      form.setError('root', {
        message
      })
      return
    }

    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex h-full flex-col gap-3">
        <FormField
          render={({ field }) => (
            <FormItem className="h-full">
              <FormLabel>Review</FormLabel>
              <FormControl>
                <Textarea className="h-4/5 flex-1 resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          control={form.control}
          name="description"
        />

        <div className="flex items-center justify-between">
          <FormField
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rate the teacher</FormLabel>
                <FormControl>
                  <div className="flex gap-2">
                    {[...Array(5)].map((star, index) => (
                      <label key={index}>
                        <input className="hidden" type="radio" {...field} />
                        <Star
                          className={`cursor-pointer ${
                            index < Number(form.getValues('rating'))
                              ? 'fill-foreground text-foreground'
                              : 'text-foreground/30'
                          }`}
                          onClick={() => form.setValue('rating', `${index + 1}`)}
                        />
                      </label>
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            control={form.control}
            name="rating"
          />

          <Button>Submit</Button>
        </div>
      </form>
    </Form>
  )
}
