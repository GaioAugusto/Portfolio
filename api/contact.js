import nodemailer from "nodemailer";

export default async function handler(req, res) {

  if (req.method === "OPTIONS") {
    // Optional: add CORS headers
    console.log("contact.js --> Handling OPTIONS");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    console.log("contact.js --> Method not allowed:", req.method);
    return res.status(405).send("Method Not Allowed");
  }

  const { firstName, lastName, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: `Portfolio contact: ${subject}`,
    text: `${firstName} ${lastName} (${email}) says: ${message}`,
    replyTo: email
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Message sent!");
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).send("Internal Server Error");
  }
}