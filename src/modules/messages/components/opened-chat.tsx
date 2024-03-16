import { ChatTopbar } from './chat-topbar'
import { ChatInput } from './chat-input'
import { Messages } from './messages'

export function OpenedChat() {
  return (
    <div className="col-span-3 flex flex-1 flex-col rounded-xl bg-white">
      <ChatTopbar />
      <div className="flex flex-1 pt-6">
        <Messages />
      </div>
      <ChatInput />
    </div>
  )
}
