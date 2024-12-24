import { NextResponse } from "next/server"

export async function GET() {
  const res = await fetch(`/browse/new-releases`, {
    headers: {
      'Content-Type': 'application/json',
    //   'API-Key': process.env.DATA_API_KEY,
    },
  })
  const data = await res.json();

  console.log(111, data);
 
  return NextResponse.json({ data })
}