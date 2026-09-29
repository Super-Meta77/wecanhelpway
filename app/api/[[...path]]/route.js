import { NextResponse } from 'next/server'

// Minimal API stub. This is a frontend prototype — no backend logic required.
export async function GET() {
  return NextResponse.json({ ok: true, service: 'WeCanHelpWay prototype', mode: 'frontend-only' })
}

export async function POST() {
  return NextResponse.json({ ok: true, received: true })
}
