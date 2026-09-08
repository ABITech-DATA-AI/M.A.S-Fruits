import { Router } from "express";
import { transporter, buildContactEmail } from "../mailer.js";

const router = Router();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "Name, email and message are required." });
    }
    if (!EMAIL_RE.test(email)) {
      return res.status(400).json({ success: false, error: "Please provide a valid email address." });
    }
    if (message.length > 5000) {
      return res.status(400).json({ success: false, error: "Message is too long." });
    }

    const { subject: mailSubject, html, text } = buildContactEmail({ name, email, phone, subject, message });
    const receiver = process.env.CONTACT_RECEIVER || process.env.GMAIL_USER;

    await transporter.sendMail({
      from: `"MAS Fruits Website" <${process.env.GMAIL_USER}>`,
      to: receiver,
      replyTo: email,
      subject: mailSubject,
      html,
      text,
    });

    // Optional auto-reply to the customer.
    await transporter.sendMail({
      from: `"MAS Fruits" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Thanks for contacting MAS Fruits 🍌",
      html: `
        <div style="font-family: Poppins, Arial, sans-serif; max-width: 520px; margin:0 auto;">
          <h2 style="color:#0f3d1a;">Thank you, ${escapeHtml(name)}!</h2>
          <p>We've received your message and our team will get back to you within 24 hours.</p>
          <p style="color:#777; font-size:13px;">— The MAS Fruits Team</p>
        </div>
      `,
    });

    return res.json({ success: true, message: "Message sent successfully." });
  } catch (err) {
    console.error("[contact route] Error sending email:", err);
    return res.status(500).json({ success: false, error: "Failed to send message. Please try again later." });
  }
});

function escapeHtml(str = "") {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export default router;
