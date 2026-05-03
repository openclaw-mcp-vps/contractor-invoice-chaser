import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Invoice Chaser — Auto-chase overdue invoices with smart escalation',
  description: 'Automatically sends payment reminders with escalating urgency, tracks payment patterns, and flags risky clients. Built for freelancers and small agencies.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d6a17f07-991f-4461-98b3-78497ee8d42b"></script>
      </head>
      <body style={{ backgroundColor: '#0d1117', color: '#c9d1d9', fontFamily: 'system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
