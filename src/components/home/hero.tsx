import { ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative flex h-[85svh] flex-col items-center justify-center gap-10 overflow-hidden">
      <div className="animate-blob absolute flex h-56 w-56 rounded-full bg-red-800 opacity-25 blur-3xl filter dark:bg-red-400 md:h-96 md:w-96"></div>

      <h1 className="text-7xl font-semibold text-primary">learnhub</h1>
      <h2 className="text-center text-3xl font-semibold text-foreground">
        Unlock Your Learning Journey
      </h2>
      <div className="absolute bottom-0 text-lg">
        <ChevronDown className="animate-bounce" />
      </div>
    </section>
  )
}
