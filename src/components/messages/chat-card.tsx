import Image from 'next/image'
import { ChatType } from '@/models/core/chat'
import { TeacherType, UserType } from '@/models/users/user'
import { Divider } from '../ui/divider'
import { ChatInput } from './chat-input'
import { cn } from '@/lib/cn'

interface Props {
  chat: ChatType | undefined
  senderInfo: UserType | null
  selectedReceiver: UserType | null
}

export function ChatCard({ chat, selectedReceiver, senderInfo }: Props) {
  return (
    <div className="col-span-2 flex flex-1 flex-col rounded-md border bg-background px-8 py-6">
      {chat ? (
        <div className="flex h-full flex-col gap-4">
          <div className="relative flex items-center justify-between px-2 py-3">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 rounded-full border">
                <Image src={`/${3 % 6}.png`} className="rounded-full" alt="avatar" fill />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-lg font-semibold">
                  {selectedReceiver?.name} {selectedReceiver?.surname}
                </h2>
                <span className="text-sm capitalize">{selectedReceiver?.role.toLowerCase()}</span>
              </div>
            </div>

            <div className="rounded-xl bg-primary px-5 py-2 text-lg">
              {senderInfo?.role === 'STUDENT'
                ? (selectedReceiver as TeacherType)?.subjects[0].name
                : (senderInfo as TeacherType)?.subjects[0].name}
            </div>
          </div>

          <Divider />

          <div className="flex flex-1 flex-col gap-4">
            {chat.messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  'flex w-full flex-col gap-2',
                  senderInfo?.id === message.sender_id ? 'items-start' : 'items-end'
                )}
              >
                <span
                  className={cn(
                    'rounded-xl p-2',
                    senderInfo?.id === message.sender_id
                      ? 'rounded-tl-none bg-secondary'
                      : 'rounded-tr-none bg-primary'
                  )}
                >
                  {message.text}
                </span>
              </div>
            ))}
          </div>

          <ChatInput
            receiver_role={selectedReceiver?.role}
            sender_id={senderInfo?.id}
            receiver_id={selectedReceiver?.id}
          />
        </div>
      ) : (
        <div className="flex h-full items-center justify-center">
          <div className="flex flex-col items-center gap-3 opacity-45">
            <span className="text-foreground">Click on a chat on left to open </span>
          </div>
        </div>
      )}
    </div>
  )
}
