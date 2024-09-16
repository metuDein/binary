// pages/api/sendEmail.js
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
export async function POST(req) {
    try {

        const { email, name } = await req.json();

        // Create reusable transporter object using SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com", // e.g., SMTP server (e.g., Gmail, Mailgun, etc.)
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: "maxmetadein@gmail.com", // your email username
                pass: "rqtt awsv uxmm kpcp", // your email password
            },
        });


        // Email content
        const mailOptions = {
            from: '"Horizonmarketcapital" <your-email@example.com>', // sender address
            to: email, // list of receivers
            subject: "Welcome to Our Platform", // Subject line
            html: `<p>Hello ${name},</p><p>Thank you for registering on our platform!</p>`, // HTML body
        };


        // Send email
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error sending email" }, { status: 500 });
    }

}
