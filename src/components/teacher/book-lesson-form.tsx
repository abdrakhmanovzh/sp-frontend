'use client'

import {
  SelectContent,
  SelectTrigger,
  SelectGroup,
  SelectValue,
  SelectItem,
  Select
} from '@/components/ui/select'
import { CardContent, CardHeader, CardTitle, Card } from '@/components/ui/card'
import { ScheduleItem } from '@/models/users/user'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import dayjs from 'dayjs'
import { format, set } from 'date-fns'
import { addLesson } from '@/lib/student/actions'
import { SuccessAlert } from '../ui/success-alert'

interface Props {
  items: ScheduleItem[]
  student_id: number
  teacher_id: number
  subject_id: number
}

export function BookLessonForm({ items, student_id, subject_id, teacher_id }: Props) {
  const [selectedSlot, setSelectedSlot] = useState<string>()
  const [selectedItem, setSelectedItem] = useState<number>()

  const [success, setSuccess] = useState(false)

  const todayDate = dayjs(new Date().setHours(0, 0, 0, 0))
  const everydayInOneWeek = Array.from({ length: 6 }).map((_, i) => todayDate.add(i, 'day'))

  const getHours = (start_hour: number, end_hour: number) => {
    const hours = []
    for (let i = start_hour; i < end_hour; i++) {
      hours.push(i)
    }
    return hours
  }

  const handleButton = async () => {
    await addLesson({
      student_id,
      teacher_id,
      date: selectedSlot,
      subject_id,
      item_id: selectedItem
    })

    setSuccess(true)
  }

  return (
    <Card className="row-span-2">
      <CardHeader>
        <CardTitle>Book a Lesson</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {items
            .filter(
              (item) =>
                everydayInOneWeek.some(
                  (date) => date.format('dddd').toLowerCase() === item.weekday.toLowerCase()
                ) && item.status === 'Free'
            )
            .map((item) => {
              const date = everydayInOneWeek.filter(
                (date) => date.format('dddd').toLowerCase() === item.weekday.toLowerCase()
              )

              return (
                <div className="flex items-center justify-between gap-4" key={item.weekday}>
                  <h2 className="flex w-48 flex-col gap-1 text-lg font-semibold capitalize">
                    {item.weekday.toLowerCase()}
                    <span className="text-sm">{date[0]?.format('DD.MM.YYYY')}</span>
                  </h2>
                  <Select
                    onValueChange={(e) => {
                      setSelectedSlot(
                        format(date[0].add(Number(e), 'hours').toDate(), "yyyy-MM-dd'T'HH:mm:ss")
                      )
                      setSelectedItem(item.id)
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a slot" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {getHours(Number(item.start_time), Number(item.end_time)).map((hour) => (
                          <SelectItem value={hour.toString()} key={hour}>
                            {hour}:00 - {hour + 1}:00
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <Button onClick={handleButton} variant={'secondary'}>
                    Book
                  </Button>
                </div>
              )
            })}

          {/* {items.map((item) => (
            <div className="flex items-center justify-between gap-4" key={item.id}>
              <div className="flex w-64 items-center justify-between gap-4">
                <h2 className="w-48 text-lg font-semibold capitalize">
                  {item.weekday.toLowerCase()}
                </h2>

                <Select onValueChange={(e) => setSelectedSlot(e)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a slot" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {getHours(Number(item.start_time), Number(item.end_time)).map((hour) => (
                        <SelectItem value={hour.toString()} key={hour}>
                          {hour}:00 - {hour + 1}:00
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <Button variant={'secondary'}>Book</Button>
            </div>
          ))} */}

          {success && <SuccessAlert message="Lesson has been booked successfully" />}
        </div>
      </CardContent>
    </Card>
  )
}
