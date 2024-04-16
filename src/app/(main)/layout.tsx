import { Sidenav } from '@/components/core/sidenav'
import { Header } from '@/components/core/header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-muted/40">
      <Sidenav />
      <main className="flex w-full flex-col gap-6 py-2 pl-16">
        <Header />
        {children}
      </main>
    </div>
  )
}
