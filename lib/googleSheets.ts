/**
 * Google Sheets data fetcher for SUCCESS Holding website.
 *
 * This module provides a typed interface for reading data from a Google Sheet
 * that serves as the CMS for dynamic content (news, careers, partners, etc.).
 *
 * Setup:
 * 1. Create a Google Cloud project and enable the Google Sheets API.
 * 2. Create a service account and download the JSON key file.
 * 3. Share the target Google Sheet with the service account email.
 * 4. Set GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, and GOOGLE_SHEET_ID
 *    in your .env.local file.
 *
 * Each public function fetches a specific named sheet/tab and returns typed data.
 */

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']

interface SheetRow {
  [key: string]: string
}

async function getAccessToken(): Promise<string> {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const key = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')

  if (!email || !key) {
    throw new Error(
      'Missing Google Sheets credentials. Set GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_PRIVATE_KEY in .env.local'
    )
  }

  // In production, use google-auth-library or jose to create a JWT and
  // exchange it for an access token via the Google OAuth2 token endpoint.
  // This is a placeholder showing the expected flow.
  //
  // const jwt = await createSignedJWT({ email, key, scopes: SCOPES })
  // const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //   body: new URLSearchParams({
  //     grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
  //     assertion: jwt,
  //   }),
  // })
  // const { access_token } = await tokenResponse.json()
  // return access_token

  throw new Error(
    'Google Sheets auth not yet implemented. Install google-auth-library or jose and complete the JWT flow.'
  )
}

async function fetchSheet(sheetName: string): Promise<SheetRow[]> {
  const sheetId = process.env.GOOGLE_SHEET_ID
  if (!sheetId) {
    throw new Error('Missing GOOGLE_SHEET_ID in .env.local')
  }

  const accessToken = await getAccessToken()
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(sheetName)}`

  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
    next: {
      revalidate: Number(process.env.REVALIDATION_INTERVAL) || 3600,
    },
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch sheet "${sheetName}": ${response.statusText}`)
  }

  const data = await response.json()
  const [headers, ...rows] = data.values as string[][]

  return rows.map((row) =>
    headers.reduce<SheetRow>((obj, header, i) => {
      obj[header] = row[i] ?? ''
      return obj
    }, {})
  )
}

/**
 * Fetch news articles from the "News" sheet tab.
 * Expected columns: id, slug, title_en, title_ar, excerpt_en, excerpt_ar,
 *                   content_en, content_ar, publishedAt, imageUrl, category
 */
export async function fetchNews() {
  const rows = await fetchSheet('News')
  return rows.map((row) => ({
    id: row.id,
    slug: row.slug,
    title: { en: row.title_en, ar: row.title_ar },
    excerpt: { en: row.excerpt_en, ar: row.excerpt_ar },
    content: { en: row.content_en, ar: row.content_ar },
    publishedAt: row.publishedAt,
    imageUrl: row.imageUrl,
    category: row.category,
  }))
}

/**
 * Fetch career openings from the "Careers" sheet tab.
 * Expected columns: id, title_en, title_ar, department_en, department_ar,
 *                   location_en, location_ar, type_en, type_ar,
 *                   description_en, description_ar
 */
export async function fetchCareers() {
  const rows = await fetchSheet('Careers')
  return rows.map((row) => ({
    id: row.id,
    title: { en: row.title_en, ar: row.title_ar },
    department: { en: row.department_en, ar: row.department_ar },
    location: { en: row.location_en, ar: row.location_ar },
    type: { en: row.type_en, ar: row.type_ar },
    description: { en: row.description_en, ar: row.description_ar },
  }))
}

/**
 * Fetch partner organizations from the "Partners" sheet tab.
 * Expected columns: id, name, logoUrl, website, category
 */
export async function fetchPartners() {
  const rows = await fetchSheet('Partners')
  return rows.map((row) => ({
    id: row.id,
    name: row.name,
    logoUrl: row.logoUrl,
    website: row.website,
    category: row.category,
  }))
}
