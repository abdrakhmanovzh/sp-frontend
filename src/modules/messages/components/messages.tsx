import { ReceivedMessage } from './received-message'
import { SentMessage } from './sent-message'

export function Messages() {
  return (
    <div className="flex flex-1 flex-col gap-20">
      <div className="relative w-full">
        <SentMessage />
      </div>
      <div className="relative">
        <ReceivedMessage />
      </div>
    </div>
  )
}
