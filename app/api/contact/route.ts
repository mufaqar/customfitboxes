import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {

    try {

        const body = await req.json()

        const {
            firstName,
            lastName,
            email,
            phone,
            answer,
            message,
        } = body

        if (
            !firstName ||
            !lastName ||
            !email ||
            !phone ||
            !message
        ) {

            return NextResponse.json(
                {
                    success: false,
                    message: "Please fill all fields",
                },
                {
                    status: 400,
                }
            )
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        })

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "New Contact Form Submission",

            html: `
                <h2>New Contact Inquiry</h2>

                <p>
                    <strong>First Name:</strong> ${firstName}
                </p>

                <p>
                    <strong>Last Name:</strong> ${lastName}
                </p>

                <p>
                    <strong>Email:</strong> ${email}
                </p>

                <p>
                    <strong>Phone:</strong> ${phone}
                </p>

                <p>
                    <strong>Message:</strong>
                </p>

                <p>${message}</p>
            `,
        })

        return NextResponse.json({
            success: true,
            message: "Message sent successfully",
        })

    } catch (error) {

        console.log(error)

        return NextResponse.json(
            {
                success: false,
                message: "Something went wrong",
            },
            {
                status: 500,
            }
        )
    }
}