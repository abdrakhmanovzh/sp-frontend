import { Chat } from './chat'

export function Chats() {
  return (
    <div className="flex flex-col gap-2 bg-white">
      <Chat />
      <Chat />
      <Chat />
    </div>
  )
}
