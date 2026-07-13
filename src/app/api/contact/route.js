import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, email, company, website, spend, goal, message } = body;

    // Basic server-side validation
    if (!name || !email || !company) {
      return NextResponse.json(
        { error: 'Name, email, and company are required.' },
        { status: 400 }
      );
    }

    // TODO: Integrate with Zoho CRM / email service
    // All API keys and secrets stay server-side — never exposed to client
    console.log('Contact form submission:', { name, email, company, website, spend, goal, message });

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
