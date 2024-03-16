import { LessonsCompleted, UpcomingLessons, Achievements, LikedPosts } from '@/modules/dashboard'

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex w-full gap-6">
        <LessonsCompleted />
        <Achievements />
      </div>

      <UpcomingLessons />

      <LikedPosts />
    </div>
  )
}
