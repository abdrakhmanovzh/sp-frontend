'use client'

import { PostType } from '@/models/core/post'
import { useState } from 'react'
import { PostCard } from './post-card'
import { UserType } from '@/models/users/user'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import { CreatePostForm } from './create-post-form'

interface Props {
  posts: PostType[]
  currentUser: UserType | null
}

export function AllPosts({ posts, currentUser }: Props) {
  const [open, setOpen] = useState(false)
  const [allPosts, setAllPosts] = useState(posts)

  return (
    <div className="flex flex-col gap-6 px-6 pb-6">
      <div className="flex w-1/2 items-center justify-between self-center">
        <h2 className="text-2xl font-semibold">Posts</h2>
        {currentUser?.role === 'TEACHER' && (
          <>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button>Create a Post</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>New Post</DialogTitle>
                </DialogHeader>

                <CreatePostForm setPosts={setAllPosts} setOpen={setOpen} />
              </DialogContent>
            </Dialog>
          </>
        )}
      </div>

      <div className="flex flex-col items-center gap-10">
        {allPosts.toReversed().map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
    </div>
  )
}
