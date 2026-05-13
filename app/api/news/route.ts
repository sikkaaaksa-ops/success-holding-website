import { NextResponse } from 'next/server'
import { newsArticles } from '@/data/news'

export async function GET() {
  try {
    // Attempt to fetch from Google Sheets for live data
    const { fetchNews } = await import('@/lib/googleSheets')
    const articles = await fetchNews()
    return NextResponse.json(articles)
  } catch {
    // Fall back to local data when Google Sheets is not configured
    return NextResponse.json(newsArticles)
  }
}

export const revalidate = 3600
