import { AuthFooter } from '@/components/auth/auth-footer'
import { AuthHeader } from '@/components/auth/auth-header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-screen relative flex min-h-screen flex-col">
      <AuthHeader />
      <main className="flex flex-1">{children}</main>
      <AuthFooter />
    </div>
  )
}
