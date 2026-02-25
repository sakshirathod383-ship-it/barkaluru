import Link from "next/link"

export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Barkaluru</h1>
      <p>Redirecting to login…</p>
      <Link href="/login">Go to Login</Link>
    </div>
  )
}
