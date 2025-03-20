import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "All fields are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: "mscoder50@gmail.com",
      subject: `New Contact Request from ${name}`,
      html: `
        <div style="max-width: 600px; margin: auto; padding: 20px; background: #181818; color: #f1f1f1; font-family: Arial, sans-serif; border-radius: 10px;">
          <header style="text-align: center; padding-bottom: 10px; border-bottom: 2px solid #38bdf8;">
            <h2 style="color: #38bdf8; margin: 0;">📩 New Contact Request</h2>
          </header>

          <main style="padding: 20px;">
            <p style="font-size: 16px; line-height: 1.5;">
              <strong style="color: #38bdf8;">Name:</strong> ${name} <br>
              <strong style="color: #38bdf8;">Email:</strong> 
              <a href="mailto:${email}" style="color: #f1f1f1; text-decoration: none;">${email}</a>
            </p>
            
            <div style="margin-top: 20px; background: #222; padding: 15px; border-radius: 8px;">
              <p style="font-size: 16px; line-height: 1.6; color: #f1f1f1;">"${message.replace(/\n/g, "<br>")}"</p>
            </div>
          </main>

          <footer style="margin-top: 20px; text-align: center; font-size: 14px; color: #888;">
            <p>Sent from your Portfolio Website</p>
          </footer>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, message: "Email sent successfully!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
