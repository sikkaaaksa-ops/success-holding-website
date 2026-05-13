import { NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(1),
  message: z.string().min(10),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const data = contactSchema.parse(body)

    // Integration point: send email via SendGrid, Resend, AWS SES, etc.
    // Integration point: store in database (Prisma, Supabase, etc.)
    // Integration point: forward to CRM (HubSpot, Salesforce, etc.)
    console.log('[Contact Form Submission]', data)

    return NextResponse.json(
      { success: true, message: 'Message received successfully.' },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { success: false, message: 'Internal server error.' },
      { status: 500 }
    )
  }
}
