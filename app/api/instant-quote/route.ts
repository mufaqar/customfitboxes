import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {

    try {

        const formData = await req.formData()
        const title = formData.get("title")
        const name = formData.get("name")
        const email = formData.get("email")
        const phone = formData.get("phone")
        const quantity = formData.get("quantity")
        const length = formData.get("length")
        const width = formData.get("width")
        const depth = formData.get("depth")
        const message = formData.get("message")

        const file = formData.get("file") as File | null

        if (!name || !email || !phone) {
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

        let attachments = []

        if (file) {

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
            subject: "Instant Quote Request",

            html: `
                <h2>Instant Quote Request on ${title}</h2>

                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Quantity:</strong> ${quantity}</p>

                <h3>Dimensions</h3>

                <p><strong>Length:</strong> ${length}</p>
                <p><strong>Width:</strong> ${width}</p>
                <p><strong>Depth:</strong> ${depth}</p>

                <p><strong>Description:</strong></p>
                <p>${message}</p>
            `,

            attachments,
        })

        return NextResponse.json({
            success: true,
            message: "Quote request sent successfully",
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