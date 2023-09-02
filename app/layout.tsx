import { barlow_regular } from './fonts'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'FEM Coffee Roasters Challenge',
    description: 'Frontend Mentor Coffee Roasters Challenge',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={barlow_regular.className}>{children}</body>
        </html>
    )
}
