// app/api/data/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Alice Brown', email: 'alice@example.com' },
  ];

  return NextResponse.json(data);
}
