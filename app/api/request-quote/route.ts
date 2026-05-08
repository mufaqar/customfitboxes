// app/api/request-quote/route.ts

import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData()

        const length = formData.get("length")
        const width = formData.get("width")
        const depth = formData.get("depth")
        const unit = formData.get("unit")
        const product = formData.get("product")
        const color = formData.get("color")
        const quantity = formData.get("quantity")
        const name = formData.get("name")
        const phone = formData.get("phone")
        const email = formData.get("email")
        const message = formData.get("message")
        const file = formData.get("file") as File | null

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        })

        let attachments = []

        if (file && file.size > 0) {
            const bytes = await file.arrayBuffer()
            const buffer = Buffer.from(bytes)

            attachments.push({
                filename: file.name,
                content: buffer,
            })
        }

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "New Quote Request",
            html: `
                <h2>New Quote Request</h2>

                <p><strong>Length:</strong> ${length}</p>
                <p><strong>Width:</strong> ${width}</p>
                <p><strong>Depth:</strong> ${depth}</p>
                <p><strong>Unit:</strong> ${unit}</p>
                <p><strong>Product:</strong> ${product}</p>
                <p><strong>Color:</strong> ${color}</p>
                <p><strong>Quantity:</strong> ${quantity}</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
            attachments,
        })

        return NextResponse.json({
            success: true,
            message: "Quote request submitted successfully",
        })
    } catch (error) {
        console.log(error)

        return NextResponse.json(
            {
                success: false,
                message: "Something went wrong",
            },
            { status: 500 }
        )
    }
}