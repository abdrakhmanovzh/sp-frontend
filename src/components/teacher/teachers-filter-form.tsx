'use client'

import { SubjectType } from '@/models/subjects/subject'
import { languagesOptions } from '@/lib/auth/constants'
import { TeacherType } from '@/models/users/user'
import { useEffect, useState } from 'react'

import { SelectContent, SelectTrigger, SelectValue, SelectItem, Select } from '../ui/select'
import { TeacherCard } from './teacher-card'
import { Button } from '../ui/button'
import { Switch } from '../ui/switch'

interface Props {
  teachers: TeacherType[]
  subjects: SubjectType[]
}

export function TeachersFilterForm({ teachers, subjects }: Props) {
  const [filteredTeachers, setFilteredTeachers] = useState<TeacherType[]>([])
  const [subjectId, setSubjectId] = useState<string>()
  const [language, setLanguage] = useState<string>()

  const [onlyHighRated, setOnlyHighRated] = useState(false)

  useEffect(() => {
    if (!subjectId) {
      setFilteredTeachers(teachers)
      return
    }

    const filtered = teachers.filter((teacher) => {
      return teacher.subjects.some((teacherSubject) => teacherSubject.id === Number(subjectId))
    })

    setFilteredTeachers(filtered)
  }, [subjectId, teachers])

  useEffect(() => {
    if (!language) {
      setFilteredTeachers(teachers)
      return
    }

    const filtered = teachers.filter((teacher) => {
      return teacher.languages.split(',').includes(language)
    })

    setFilteredTeachers(filtered)
  }, [language, teachers])

  useEffect(() => {
    if (onlyHighRated) {
      const filtered = teachers.filter((teacher) => {
        return (
          teacher.reviews.reduce((acc, review) => acc + review.rating, 0) /
            teacher.reviews.length >=
          3
        )
      })
      setFilteredTeachers(filtered)
    } else {
      setFilteredTeachers(teachers)
    }
  }, [onlyHighRated, teachers])

  return (
    <div className="flex flex-1 flex-col gap-4 px-6">
      <div className="flex gap-4">
        <Select onValueChange={(e) => setSubjectId(e)} value={subjectId}>
          <SelectTrigger>
            <SelectValue placeholder="Select Subject" />
          </SelectTrigger>
          <SelectContent>
            {subjects.map((subject) => (
              <SelectItem value={subject.id.toString()} key={subject.id}>
                {subject.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={(e) => setLanguage(e)} value={language}>
          <SelectTrigger>
            <SelectValue placeholder="Select Language" />
          </SelectTrigger>
          <SelectContent>
            {languagesOptions.map((lang) => (
              <SelectItem value={lang.value} key={lang.value}>
                {lang.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="flex shrink-0 items-center gap-2 rounded-md border bg-background px-4 py-1">
          <span className="text-sm">High rating</span>
          <Switch onCheckedChange={(e) => setOnlyHighRated(e)} checked={onlyHighRated} />
        </div>

        <Button
          onClick={() => {
            setSubjectId('')
            setLanguage('')
            setOnlyHighRated(false)
          }}
        >
          Reset
        </Button>
      </div>

      {filteredTeachers?.map((teacher) => <TeacherCard teacher={teacher} key={teacher.id} />)}
    </div>
  )
}
