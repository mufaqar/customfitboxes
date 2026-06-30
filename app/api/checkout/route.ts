import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const { billing, items, subtotal, shipping, total } = body

        if (!billing.firstName || !billing.lastName || !billing.email || !billing.phone) {
            return NextResponse.json(
                { success: false, message: "Please fill all required fields" },
                { status: 400 }
            )
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        })

        const itemsHtml = items.map((item: any) => `
            <tr>
                <td style="padding:8px;border-bottom:1px solid #ddd;">Custom ${item.name}</td>
                <td style="padding:8px;border-bottom:1px solid #ddd;text-align:center;">${item.quantity}</td>
                <td style="padding:8px;border-bottom:1px solid #ddd;text-align:right;">$${item.pricePerBox.toFixed(2)}</td>
                <td style="padding:8px;border-bottom:1px solid #ddd;text-align:right;">$${(item.pricePerBox * item.quantity).toFixed(2)}</td>
            </tr>
        `).join('')

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `New Order - ${billing.firstName} ${billing.lastName}`,
            html: `
                <h2>New Order Received</h2>

                <h3>Customer Details</h3>
                <p><strong>Name:</strong> ${billing.firstName} ${billing.lastName}</p>
                <p><strong>Email:</strong> ${billing.email}</p>
                <p><strong>Phone:</strong> ${billing.phone}</p>
                <p><strong>City:</strong> ${billing.city}</p>
                <p><strong>State:</strong> ${billing.state}</p>
                <p><strong>ZIP:</strong> ${billing.zip}</p>
                <p><strong>Country:</strong> ${billing.country}</p>
                ${billing.notes ? `<p><strong>Notes:</strong> ${billing.notes}</p>` : ''}

                <h3>Order Details</h3>
                <table style="width:100%;border-collapse:collapse;">
                    <thead>
                        <tr style="background:#f5f5f5;">
                            <th style="padding:8px;text-align:left;border-bottom:2px solid #ddd;">Product</th>
                            <th style="padding:8px;text-align:center;border-bottom:2px solid #ddd;">Qty</th>
                            <th style="padding:8px;text-align:right;border-bottom:2px solid #ddd;">Price</th>
                            <th style="padding:8px;text-align:right;border-bottom:2px solid #ddd;">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${itemsHtml}
                    </tbody>
                </table>

                <p><strong>Subtotal:</strong> $${subtotal.toFixed(2)}</p>
                <p><strong>Shipping:</strong> ${shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</p>
                <p><strong>Total:</strong> $${total.toFixed(2)}</p>
            `,
        })

        return NextResponse.json({
            success: true,
            message: "Order placed successfully",
        })

    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { success: false, message: "Something went wrong" },
            { status: 500 }
        )
    }
}
