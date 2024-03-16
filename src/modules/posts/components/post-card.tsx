import { GraduationCap } from 'lucide-react'

export function PostCard() {
  return (
    <div className="flex h-full w-full flex-col gap-6 rounded-2xl border border-neutral-200 bg-white p-6">
      <div className="flex items-center gap-6">
        <div className="h-20 w-20 flex-none rounded-full bg-neutral-400"></div>
        <div className="flex flex-none flex-col">
          <h2 className="mb-2 text-xl font-semibold">Ryan Gosling</h2>
          <div className="flex items-center gap-2">
            <GraduationCap size={20} />
            <span className="text-sm text-neutral-700">English</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Lorem Ipsum</h2>

        <p className="text-base text-neutral-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laudantium, sint beatae
          voluptate excepturi illo reprehenderit officia nemo velit repellendus! Unde, ad. Dolores
          animi repellat consectetur minima dolorem ea voluptate.
        </p>
        <span className="font-medium text-primary underline">continue reading</span>
      </div>
    </div>
  )
}
