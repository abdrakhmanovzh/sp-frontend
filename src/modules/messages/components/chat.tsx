import { AvatarImage, Avatar } from '@/shared/components/ui/avatar'

export function Chat() {
  return (
    <div className="flex cursor-pointer items-center gap-3 rounded-md px-4 py-3 hover:bg-secondary">
      <Avatar className="h-12 w-12">
        <AvatarImage src="https://i.pravatar.cc/150?img=32" alt="John Doe" />
      </Avatar>
      <div className="flex flex-1 flex-col">
        <div className="flex w-full items-center justify-between">
          <h3 className="font-semibold">John Doe</h3>
          <span className="text-sm text-gray-400">11:30 AM</span>
        </div>
        <p className="text-gray-500">Hello, how are you?</p>
      </div>
    </div>
  )
}
