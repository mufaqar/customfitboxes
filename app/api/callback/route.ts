import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { name, phone, email } = body

    if (!name || !phone || !email) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
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
      subject: "New Callback Request",
      html: `
        <h2>New Callback Request</h2>

        <p>
          <strong>Name:</strong> ${name}
        </p>

        <p>
          <strong>Phone:</strong> ${phone}
        </p>

        <p>
          <strong>Email:</strong> ${email}
        </p>
      `,
    })

    return NextResponse.json({
      success: true,
      message: "Request sent successfully",
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