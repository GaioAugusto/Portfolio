import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
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