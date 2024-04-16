import { MessageCircle, UsersRound, BookCheck, PieChart, User } from 'lucide-react'

export const baseURL = 'http://localhost:8080'

export const authEndpoint = `${baseURL}/api/v1/auth`

export const teacherEndpoint = `${baseURL}/api/teachers`

export const studentEndpoint = `${baseURL}/api/students`

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
    label: 'Lessons',
    icon: BookCheck,
    to: '/lessons'
  },
  {
    label: 'Students',
    icon: UsersRound,
    to: '/students'
  },
  {
    icon: MessageCircle,
    label: 'Messages',
    to: '/messages'
  },
  {
    label: 'Profile',
    to: '/profile',
    icon: User
  }
]
