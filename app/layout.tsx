import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'EVEPHORIA- Where Every Soul Comes Alive',
  description: 'From planning to execution, we handle every detail—so you can enjoy a seamless, stress-free celebration. Let’s create your event, your way—unforgettable, flawless, and full of joy!',
  icons: {
    icon: '/assets/images/image.png'
  },
  openGraph: {
    images: [
      {
        url: '/assets/images/image.png', // <-- Use a wide, banner-style image for best results
        width: 1200,
        height: 630,
        alt: 'EVEPHORIA - Where Every Soul Comes Alive',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
