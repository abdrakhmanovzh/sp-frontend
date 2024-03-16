import { TutorCard } from '@/modules/search'

export default function Page() {
  return (
    <div className="flex flex-col gap-10">
      <TutorCard />
      <TutorCard />
      <TutorCard />
    </div>
  )
}
