// app/api/ask-question/route.ts

import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {

    try {

        const body = await req.json()

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
            subject: "New Question",
            html: `
                <h2>New User Question</h2>
                <p>${body.question}</p>
            `,
        })

        return NextResponse.json({
            success: true,
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