import { BookX } from 'lucide-react'

export function LessonsCompleted() {
  return (
    <div className="flex w-full flex-col gap-10 rounded-xl border border-neutral-200 bg-white p-6">
      <h2 className="text-xl font-medium">Lessons completed</h2>

      <div className="flex flex-col items-center gap-2 opacity-45">
        <BookX className="text-primary" size={32} />

        <span className="text-sm text-neutral-600">No lessons completed</span>
      </div>
    </div>
  )
}
