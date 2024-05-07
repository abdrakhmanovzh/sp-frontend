import Image from 'next/image'
import { Divider } from '../ui/divider'
import { ChevronRight, MessageCircleX } from 'lucide-react'
import { ChatType } from '@/models/core/chat'
import { Fragment } from 'react'
import { UserType } from '@/models/users/user'

interface Props {
  chats: ChatType[]
  setOpenedChat: (chat: ChatType) => void
  setSelectedReceiver: (receiver: UserType | null) => void
  receivers: (UserType | null)[]
}

export function Chats({ chats, setOpenedChat, setSelectedReceiver, receivers }: Props) {
  return (
    <div className="flex flex-col gap-4 rounded-md border bg-background px-4 py-6">
      {chats.length > 0 ? (
        <>
          {chats.map((chat, index) => (
            <Fragment key={chat.id}>
              <div
                onClick={() => {
                  setOpenedChat(chat)
                  setSelectedReceiver(receivers[index])
                }}
                className="group relative flex cursor-pointer items-center gap-4 rounded-md px-2 py-3 hover:bg-accent"
              >
                <div className="relative h-14 w-14 rounded-full border">
                  <Image src={`/${3 % 6}.png`} className="rounded-full" alt="avatar" fill />
                </div>

                <div className="flex flex-col gap-1">
                  <h2 className="text-lg font-semibold">
                    {receivers[index]?.name} {receivers[index]?.surname}
                  </h2>
                </div>

                <ChevronRight className="absolute right-2 transform text-foreground/60 group-hover:scale-125" />
              </div>
              <Divider />
            </Fragment>
          ))}
        </>
      ) : (
        <div className="flex h-full items-center justify-center">
          <div className="flex flex-col items-center gap-3 opacity-45">
            <MessageCircleX className="text-primary dark:text-foreground" size={40} />

            <span className="text-foreground">No Chats</span>
          </div>
        </div>
      )}
    </div>
  )
}
