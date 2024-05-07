'use client'

import { PostFormType, PostType, postSchema } from '@/models/core/post'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import Image from 'next/image'
import { Button } from '../ui/button'
import { SuccessAlert } from '../ui/success-alert'
import React from 'react'

interface Props {
  setPosts: React.Dispatch<React.SetStateAction<PostType[]>>
  setOpen: (open: boolean) => void
}

export function CreatePostForm({ setPosts, setOpen }: Props) {
  const form = useForm<PostFormType>({
    defaultValues: {
      title: '',
      content: '',
      image: ''
    },
    resolver: zodResolver(postSchema)
  })

  const onSubmit = async (values: PostFormType) => {
    setPosts((prev) => [
      ...prev,
      {
        id: Math.floor(Math.random() * 1000),
        title: values.title,
        content: values.content,
        image: values.image,
        isLiked: false
      }
    ])
    new Promise((resolve) => setTimeout(resolve, 1000)).then(() => setOpen(false))
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <FormField
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Title" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          control={form.control}
          name="title"
        />

        <FormField
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea placeholder="Content" className="resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          control={form.control}
          name="content"
        />

        <FormField
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <>
                  <Input type="text" placeholder="Image URL" {...field} />

                  {field.value && (
                    <div className="relative h-[400px] w-full rounded-md">
                      <Image
                        src={field.value}
                        alt="Post Image"
                        fill
                        className="rounded-md object-cover"
                      />
                    </div>
                  )}
                </>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          control={form.control}
          name="image"
        />

        <Button>Save</Button>
      </form>

      {form.formState.isSubmitSuccessful && <SuccessAlert message="Post created successfully" />}
    </Form>
  )
}
