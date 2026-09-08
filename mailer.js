import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const { GMAIL_USER, GMAIL_APP_PASSWORD } = process.env;

if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
  console.warn(
    "[mailer] GMAIL_USER / GMAIL_APP_PASSWORD not set. Copy .env.example to .env and fill in your Gmail App Password."
  );
}

// Gmail SMTP transporter using an App Password (NOT your normal password).
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_APP_PASSWORD,
  },
});

// Verify connection once on startup (non-blocking).
transporter.verify((err) => {
  if (err) {
    console.error("[mailer] SMTP connection failed:", err.message);
  } else {
    console.log("[mailer] Gmail SMTP ready to send messages.");
  }
});

export function buildContactEmail({ name, email, phone, subject, message }) {
  const safeSubject = subject?.trim() || "New Website Enquiry";

  const html = `
    <div style="font-family: Poppins, Arial, sans-serif; max-width: 560px; margin: 0 auto;">
      <div style="background:#0f3d1a; padding:20px 24px; border-radius:12px 12px 0 0;">
        <h2 style="color:#f6c60e; margin:0;">MAS Fruits — New Contact Message</h2>
      </div>
      <div style="border:1px solid #e5e5e5; border-top:none; padding:24px; border-radius:0 0 12px 12px;">
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p>
        <p><strong>Subject:</strong> ${escapeHtml(safeSubject)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; background:#fafcf7; padding:14px; border-radius:8px; border:1px solid #eee;">${escapeHtml(
          message
        )}</p>
      </div>
    </div>
  `;

  return {
    subject: `[MAS Fruits] ${safeSubject}`,
    html,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "—"}\nSubject: ${safeSubject}\n\nMessage:\n${message}`,
  };
}

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
