import { MessageCircle, UsersRound, Newspaper, PieChart, User } from 'lucide-react'

import { TSidebarLink } from '../models'

export const studentLinks: TSidebarLink[] = [
  {
    label: 'Dashboard',
    to: '/dashboard',
    icon: PieChart
  },
  {
    label: 'Profile',
    to: '/profile',
    icon: User
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
    icon: Newspaper,
    label: 'Posts',
    to: '/posts'
  }
]

export const tutorLinks: TSidebarLink[] = [
  {
    label: 'Dashboard',
    to: '/dashboard',
    icon: PieChart
  },
  {
    label: 'Profile',
    to: '/profile',
    icon: User
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
    icon: Newspaper,
    label: 'Posts',
    to: '/posts'
  }
]
