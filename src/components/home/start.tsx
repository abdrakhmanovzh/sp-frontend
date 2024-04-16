import { Button } from '@/components/ui/button'

export function Start() {
  return (
    <section className="md:px-[10%] lg:px-[15%]">
      <div className="flex w-full flex-col items-center justify-center rounded-3xl bg-primary/10 p-6 ring-1 ring-primary md:flex-row md:gap-10 md:p-20">
        <div className="flex w-full flex-col gap-4 md:w-2/3 md:gap-2">
          <h2 className="text-4xl font-semibold text-foreground">Get better every day!</h2>
          <p className="text-lg font-medium text-foreground/80">
            On leanrhub it is about mastering a timeless skill cultivating new perspectives, and
            connecting with fascinating people from around the world
          </p>
        </div>

        <Button className="h-20 rounded-full px-6 text-xl">Start learning</Button>
      </div>
    </section>
  )
}
