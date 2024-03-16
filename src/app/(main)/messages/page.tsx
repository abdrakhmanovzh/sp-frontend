import { OpenedChat, Chats } from '@/modules/messages'

export default function Page() {
  return (
    <div className="grid h-full grid-cols-4 gap-8">
      <Chats />
      <OpenedChat />
    </div>
  )
}
