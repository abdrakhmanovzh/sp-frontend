import { AvatarImage, Avatar } from '@/shared/components/ui/avatar'
import { Button } from '@/shared/components/ui/button'
import { Info } from 'lucide-react'

export function ChatTopbar() {
  return (
    <div className="flex w-full items-center justify-between border-b border-neutral-200 p-6">
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src="https://i.pravatar.cc/150?img=32" alt="avatar" height={64} width={64} />
        </Avatar>

        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">John Doe</h3>
          <p className="text-sm text-neutral-500">Active 3m ago</p>
        </div>
      </div>

      <Button variant={'ghost'} size={'icon'}>
        <Info size={24} />
      </Button>
    </div>
  )
}
