import { createClientFromRequest } from 'npm:@base44/sdk@0.8.20';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    
    const { name, email, message } = await req.json();

    // Validate inputs
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email to artist
    await base44.integrations.Core.SendEmail({
      to: 'hello@artistry.com',
      subject: `New Contact Form Submission from ${name}`,
      body: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      from_name: 'Artistry Contact Form'
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
});