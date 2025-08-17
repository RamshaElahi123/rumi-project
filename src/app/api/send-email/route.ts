import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, address, city, postalCode, country, orderItems, totalPrice } = body;

    await resend.emails.send({
      from: "Attractions <onboarding@resend.dev>", // fixed sender
      to: email, // user ka email
      subject: "Your Order Confirmation - Attractions",
      html: `
        <h2>Thank you for your order, ${name}!</h2>
        <p>We’ve received your order and it’s being processed.</p>

        <h3>📦 Shipping Information</h3>
        <p><strong>Address:</strong> ${address}, ${city}, ${postalCode}, ${country}</p>

        <h3>🛒 Order Summary</h3>
        <ul>
          ${orderItems
            .map(
              (item: any) =>
                `<li>${item.name} (x${item.qty}) - PKR ${item.price}</li>`
            )
            .join("")}
        </ul>

        <p><strong>Total:</strong> PKR ${totalPrice}</p>
        <br/>
        <p>We will notify you once your package is shipped.</p>
        <p>— Team Attractions</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
