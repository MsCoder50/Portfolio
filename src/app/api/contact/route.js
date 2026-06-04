import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req) {
  try {
    const { name, email, message } = await req.json()

    // Validate the request data
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Format the current date
    const date = new Date()
    const formattedDate = date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })

    // Create email template
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: "mscoder50@gmail.com",
      subject: `New Contact Request from ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Request</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap');
            
            body {
              font-family: 'Inter', sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f5f5f5;
              color: #333;
            }
            
            .container {
              max-width: 600px;
              margin: 20px auto;
              background: #ffffff;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            }
            
            .header {
              background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
              padding: 30px;
              text-align: center;
              color: white;
            }
            
            .header h1 {
              font-family: 'Playfair Display', serif;
              margin: 0;
              font-size: 28px;
              font-weight: 700;
            }
            
            .content {
              padding: 30px;
            }
            
            .sender-info {
              background-color: #f8fafc;
              border-radius: 8px;
              padding: 20px;
              margin-bottom: 25px;
            }
            
            .sender-info p {
              margin: 8px 0;
              line-height: 1.6;
            }
            
            .label {
              font-weight: 600;
              color: #2563eb;
              display: inline-block;
              width: 60px;
            }
            
            .message-box {
              background-color: #f8fafc;
              border-left: 4px solid #2563eb;
              border-radius: 4px;
              padding: 20px;
              margin-top: 20px;
            }
            
            .message-box h2 {
              margin-top: 0;
              font-size: 18px;
              color: #2563eb;
            }
            
            .message-content {
              line-height: 1.8;
              white-space: pre-line;
            }
            
            .footer {
              background-color: #f1f5f9;
              padding: 20px;
              text-align: center;
              font-size: 14px;
              color: #64748b;
            }
            
            .timestamp {
              margin-top: 15px;
              font-size: 13px;
              color: #94a3b8;
            }
            
            .button {
              display: inline-block;
              background-color: #2563eb;
              color: white;
              text-decoration: none;
              padding: 10px 20px;
              border-radius: 6px;
              font-weight: 500;
              margin-top: 20px;
            }
            
            .button:hover {
              background-color: #1d4ed8;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Portfolio Contact</h1>
            </div>
            
            <div class="content">
              <div class="sender-info">
                <p><span class="label">Name:</span> ${name}</p>
                <p><span class="label">Email:</span> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></p>
                <p class="timestamp">Received on ${formattedDate} at ${formattedTime}</p>
              </div>
              
              <div class="message-box">
                <h2>Message</h2>
                <div class="message-content">${message.replace(/\n/g, "<br>")}</div>
              </div>
              
              <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${email}" class="button">Reply to ${name}</a>
              </div>
            </div>
            
            <div class="footer">
              <p>This email was sent from your portfolio website contact form.</p>
              <p>© ${new Date().getFullYear()} Mohammad Saad</p>
            </div>
          </div>
        </body>
        </html>
      `,
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    // Return success response
    return NextResponse.json({ success: true, message: "Message sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error("Error in contact form:", error)

    // Return error response
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}

