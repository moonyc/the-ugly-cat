import './globals.css'


export const metadata = {
  title: 'The Ugly Cat',
  description: 'A Netflix clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
