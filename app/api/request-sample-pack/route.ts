import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
    try {

        const body = await req.json()

        const {
            name,
            email,
            phone,
            company,
            website,
            address,
            quantity,
            message,
        } = body

        if (
            !name ||
            !email ||
            !phone ||
            !company ||
            !quantity
        ) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please fill all required fields",
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
            subject: "New Sample Pack Request",
            html: `
                <h2>New Sample Pack Request</h2>

                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Company:</strong> ${company}</p>
                <p><strong>Website:</strong> ${website}</p>
                <p><strong>Address:</strong> ${address}</p>
                <p><strong>Quantity:</strong> ${quantity}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        })

        return NextResponse.json({
            success: true,
            message: "Request submitted successfully",
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