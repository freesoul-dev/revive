import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const RECIPIENT = 'connect@rev-ive.love'

export async function POST(request: Request) {
  try {
    const { name, email, whatCallsYou, question1, question2, question3 } =
      await request.json()

    if (!name || !email || !whatCallsYou || !question1 || !question2) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 },
      )
    }

    const offeringLabels: Record<string, string> = {
      ceremony: 'Ceremony',
      community: 'Community',
      conversation: 'Conversation',
      'fellow-collaborator': 'Prospective fellow or collaborator',
      'something-else': 'Something else is stirring',
    }

    const { error } = await resend.emails.send({
      from: `revive Inquiry <${RECIPIENT}>`,
      to: RECIPIENT,
      replyTo: email,
      subject: `New Inquiry from ${name} — ${offeringLabels[whatCallsYou] ?? whatCallsYou}`,
      html: `
        <h2>New Inquiry from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>What calls them here:</strong> ${offeringLabels[whatCallsYou] ?? whatCallsYou}</p>
        <hr />
        <h3>What brought you to my doorstep?</h3>
        <p>${question1}</p>
        <h3>If we were sharing tea, what would you want me to know?</h3>
        <p>${question2}</p>
        ${question3 ? `<h3>Anything your ancestors and/or future self would want present?</h3><p>${question3}</p>` : ''}
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send your inquiry. Please try again.' },
        { status: 500 },
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 },
    )
  }
}
