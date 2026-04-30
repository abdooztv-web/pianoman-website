import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await request.json();
  const { name, email, phone, service, message } = body as {
    name: string;
    email: string;
    phone?: string;
    service?: string;
    message: string;
  };

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    // TODO: After verifying pianoman-eg.com in Resend dashboard, change this to:
    // from: "Pianoman <info@pianoman-eg.com>"
    from: "Pianoman <onboarding@resend.dev>",
    // TODO: After verifying pianoman-eg.com in Resend, change back to ["info@pianoman-eg.com"]
    to: ["abdooztv@gmail.com"],
    replyTo: email,
    subject: `New enquiry from ${name}${service ? ` — ${service}` : ""}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
        <h2 style="color: #8C1A2B; margin-bottom: 24px;">New Contact Form Submission</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #666; width: 120px;"><strong>Name</strong></td><td style="padding: 8px 0;">${name}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;"><strong>Email</strong></td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
          ${phone ? `<tr><td style="padding: 8px 0; color: #666;"><strong>Phone</strong></td><td style="padding: 8px 0;"><a href="tel:${phone}">${phone}</a></td></tr>` : ""}
          ${service ? `<tr><td style="padding: 8px 0; color: #666;"><strong>Service</strong></td><td style="padding: 8px 0;">${service}</td></tr>` : ""}
        </table>
        <div style="margin-top: 20px; padding: 16px; background: #FAF8F5; border-left: 3px solid #8C1A2B;">
          <strong style="color: #666;">Message</strong>
          <p style="margin-top: 8px; color: #1A1A1A; white-space: pre-wrap;">${message}</p>
        </div>
        <p style="margin-top: 24px; font-size: 12px; color: #999;">Sent from pianoman-eg.com contact form</p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
