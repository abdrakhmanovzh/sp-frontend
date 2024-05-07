'use client'

import { useState } from 'react'
import { Chats } from './chats'
import { ChatType } from '@/models/core/chat'
import { UserType } from '@/models/users/user'
import { ChatCard } from './chat-card'

interface Props {
  chats: ChatType[]
  senderInfo: UserType | null
  receivers: (UserType | null)[]
}

export function MessagesWrapper({ chats, senderInfo, receivers }: Props) {
  const [openedChat, setOpenedChat] = useState<ChatType>()
  const [selectedReceiver, setSelectedReceiver] = useState<UserType | null>(null)

  return (
    <div className="grid h-full grid-cols-3 gap-6 px-6 pb-6">
      <Chats
        setSelectedReceiver={setSelectedReceiver}
        receivers={receivers}
        setOpenedChat={setOpenedChat}
        chats={chats}
      />
      <ChatCard selectedReceiver={selectedReceiver} senderInfo={senderInfo} chat={openedChat} />
    </div>
  )
}
