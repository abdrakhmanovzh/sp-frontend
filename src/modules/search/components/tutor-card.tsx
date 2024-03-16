import { GraduationCap, Languages, User, Star } from 'lucide-react'
import { Button } from '@/shared/components/ui/button'

export function TutorCard() {
  return (
    <div className="flex w-full gap-10 rounded-2xl border border-neutral-200 bg-white p-6">
      <div className="h-28 w-28 flex-none rounded-full bg-neutral-400"></div>

      <div className="flex flex-none flex-col gap-2">
        <h2 className="mb-2 text-xl font-semibold">Ryan Gosling</h2>

        <div className="flex items-center gap-2">
          <GraduationCap size={20} />
          <span className="text-sm text-neutral-700">English</span>
        </div>

        <div className="flex items-center gap-2">
          <User size={20} />
          <span className="text-sm text-neutral-700">19 active students</span>
        </div>

        <div className="flex items-center gap-2">
          <Languages size={20} />
          <span className="text-sm text-neutral-700">Speaks Russian, Kazakh</span>
        </div>
      </div>

      <div className="max-w-2xl text-base text-neutral-800">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laudantium, sint beatae
        voluptate excepturi illo reprehenderit officia nemo velit repellendus! Unde, ad. Dolores
        animi repellat consectetur minima dolorem ea voluptate.
      </div>

      <div className="flex flex-none flex-col justify-between">
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <Star className="text-black" />
              <span className="text-2xl font-bold text-black">4.9</span>
            </div>
            <p className="text-xs text-neutral-700">3 reviews</p>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-2xl font-bold tracking-tighter text-black">KZT 5,000</span>
            <p className="text-xs text-neutral-700">50 min lesson</p>
          </div>
        </div>

        <div className="flex gap-4">
          <Button>Book a Lesson</Button>
          <Button variant="secondary">Send Message</Button>
        </div>
      </div>
    </div>
  )
}
