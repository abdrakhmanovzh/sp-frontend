import { ChatType } from '@/models/core/chat'
import { baseURL } from '../core/constants'

export async function getChats(role: string, id: number | undefined) {
  const response = await fetch(`${baseURL}/api/${role}/${id}/chats`)

  return (await response.json()) as ChatType[]
}
