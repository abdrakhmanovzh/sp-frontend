import { LogoImage } from '@/shared/assets'
import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href={'/'}>
      <Image src={LogoImage} height={28} width={28} alt="logo" />
    </Link>
  )
}
