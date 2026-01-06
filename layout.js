cat <<EOF > app/layout.js
export const metadata = {
  title: 'mishTee Delivery Mitra',
  description: 'Delivery Agent Dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
EOF
