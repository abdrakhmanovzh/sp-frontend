import { BookX } from 'lucide-react'
import { UpcomingLessonsRow } from './upcoming-lesson-row'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '../ui/table'

interface Props {
  lessons: any[]
  role: 'STUDENT' | 'TEACHER'
}

export function UpcomingLessonsCard({ lessons, role }: Props) {
  return (
    <div className="flex w-full flex-col gap-10 rounded-md border bg-background p-6">
      <h2 className="text-2xl font-semibold">Upcoming lessons</h2>

      {lessons.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Subject</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>{role === 'STUDENT' ? 'Teacher' : 'Student'}</TableHead>
              <TableHead></TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {lessons.map((lesson) => (
              <UpcomingLessonsRow role={role} key={lesson.id} lesson={lesson} />
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="flex flex-col items-center gap-3 opacity-45">
          <BookX className="text-primary dark:text-foreground" size={40} />

          <span className="text-foreground">No Lessons</span>
        </div>
      )}
    </div>
  )
}
