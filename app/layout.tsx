import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ChangelogAI — Auto-generate changelogs from commits & PRs',
  description: 'Connect GitHub or GitLab, analyze commits and PR descriptions, and ship beautiful user-facing changelogs automatically with AI.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6da44b6a-6279-4094-b648-4b0435e85b88"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
