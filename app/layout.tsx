import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "rev'ive - Weaving Roots",
  description: "Paths through celebration, gathering, and transmutation. Ceremonies, Communities, and Conversations for those Seeking Wholeness.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

