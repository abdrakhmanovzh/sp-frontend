import { LogoImage } from '@/shared/assets'
import Image from 'next/image'
import Link from 'next/link'

export function TextLogo() {
  return (
    <Link className="flex items-center gap-2" href={'/'}>
      <Image src={LogoImage} height={28} width={28} alt="logo" />
      <span className="text-primary text-2xl font-medium">learnhub</span>
    </Link>
  )
}
