import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import Logo from '../../public/green.png'
import Link from 'next/link'

const poppins = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export const metadata: Metadata = {
  title: 'Greenscape',
  description: 'Support eco-business with your reviews!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gray-200`}>
        {/* Header */}
        <header className='py-3 px-28 flex items-center justify-between border-b border-zinc-300'>
          <Link href='/'>
            <Image src={Logo} alt='Logo' height={50} width={50} />
          </Link>

          <nav className='text-zinc-800 text-lg flex gap-6 font-normal'>
            <Link className='transition-colors hover:text-zinc-500' href='/#about'>About</Link>
            <Link className='transition-colors hover:text-zinc-500' href='/#business'>Business</Link>
          </nav>
        </header>

        {children}
      </body>
    </html>
  )
}
