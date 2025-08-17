import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

type OrderItem = {
  name: string;
  qty: number;
  price: number;
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, address, city, postalCode, country, orderItems, total } = body;

    // Basic validation
    if (!name || !email || !orderItems || !total) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Prepare email HTML
    const itemsHtml = orderItems
      .map(
        (item: OrderItem) =>
          `<li>${item.name} x ${item.qty} - $${item.price}</li>`
      )
      .join("");

    const html = `
      <h1>Order Confirmation</h1>
      <p>Hi ${name},</p>
      <p>Thank you for your order! Here are the details:</p>
      <ul>${itemsHtml}</ul>
      <p>Total: $${total}</p>
      <p>Shipping Address: ${address}, ${city}, ${postalCode}, ${country}</p>
    `;

    // Send email
    try {
      const emailRes = await resend.emails.send({
        from: "your_verified_email@domain.com", // must be verified in Resend
        to: email,
        subject: "Your Order Confirmation",
        html,
      });
      console.log("Email sent successfully:", emailRes);
    } catch (err) {
      console.error("Email sending failed:", err);
      return NextResponse.json(
        { error: "Order received but email failed" },
        { status: 500 }
      );
    }

    // Return success response
    return NextResponse.json({ message: "Order placed successfully" }, { status: 200 });
  } catch (err) {
    console.error("Order API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
