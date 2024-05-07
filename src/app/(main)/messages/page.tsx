import { MessagesWrapper } from '@/components/messages/messages-wrapper'
import { getUser } from '@/lib/auth/queries'
import { getChats } from '@/lib/chats/queries'
import { getStudentById } from '@/lib/student/queries'
import { getTeacherById } from '@/lib/teachers/queries'

export default async function Page() {
  const user = await getUser()
  const chats = await getChats(user?.role === 'STUDENT' ? 'students' : 'teachers', user?.id)

  const receiverIds = chats.map((chat) => {
    return user?.role === 'STUDENT' ? chat.teacherId : chat.studentId
  })

  const receivers = await Promise.all(
    receiverIds.map(async (id) => {
      return user?.role === 'STUDENT' ? await getTeacherById(id) : await getStudentById(id)
    })
  )

  console.log('ME', user?.id, user?.name)

  console.log('RECEIVERS', receivers)

  return <MessagesWrapper receivers={receivers} chats={chats} senderInfo={user} />
}
