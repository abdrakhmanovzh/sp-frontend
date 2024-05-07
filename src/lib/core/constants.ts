import {
  MessageCircle,
  CalendarDays,
  UsersRound,
  BookCheck,
  Newspaper,
  PieChart,
  User
} from 'lucide-react'

export const baseURL = 'http://localhost:8080'

export const authEndpoint = `${baseURL}/api/v1/auth`

export const teacherEndpoint = `${baseURL}/api/teachers`

export const studentEndpoint = `${baseURL}/api/students`

export const subjectsEndpoint = `${baseURL}/api/subjects`

export const studentLinks = [
  {
    label: 'Dashboard',
    to: '/dashboard',
    icon: PieChart
  },
  {
    icon: UsersRound,
    label: 'Tutors',
    to: '/search'
  },
  {
    icon: MessageCircle,
    label: 'Messages',
    to: '/messages'
  },
  {
    icon: CalendarDays,
    label: 'Schedule',
    to: '/schedule'
  },
  {
    icon: Newspaper,
    label: 'Posts',
    to: '/posts'
  },
  {
    label: 'Profile',
    to: '/profile',
    icon: User
  }
]

export const tutorLinks = [
  {
    label: 'Dashboard',
    to: '/dashboard',
    icon: PieChart
  },
  {
    icon: MessageCircle,
    label: 'Messages',
    to: '/messages'
  },
  {
    icon: CalendarDays,
    label: 'Schedule',
    to: '/schedule'
  },
  {
    icon: Newspaper,
    label: 'Posts',
    to: '/posts'
  },
  {
    label: 'Profile',
    to: '/profile',
    icon: User
  }
]
