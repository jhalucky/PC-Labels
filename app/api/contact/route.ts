import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || SMTP_USER;
const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || SMTP_USER || "no-reply@pclabels.com";

const transporter =
  SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS
    ? nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: Number(SMTP_PORT) === 465, // true for 465, false for other ports
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      })
    : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    if (!transporter || !CONTACT_TO_EMAIL) {
      console.error(
        "SMTP configuration is missing. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL."
      );
      return NextResponse.json(
        {
          success: false,
          error:
            "Email service is not configured on the server. Please try again later.",
        },
        { status: 500 }
      );
    }

    const subject = `New contact form submission from ${name}`;

    const textBody = `
New contact form submission:

Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}

Message:
${message}
`;

    const htmlBody = `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `;

    await transporter.sendMail({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! Your message has been sent successfully. We'll get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling contact form submission:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong while submitting the form.",
      },
      { status: 500 }
    );
  }
}

