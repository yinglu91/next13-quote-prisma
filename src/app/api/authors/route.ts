import { NextResponse } from 'next/server';
import db from '@/lib/prisma-db';

// http://localhost:3000/api/authors
export async function GET(request: Request) {
  const authors = await db.authors.findMany();

  return NextResponse.json(authors);
}