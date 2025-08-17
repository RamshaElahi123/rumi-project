"use client";

import { useEffect } from "react";

export default function OrdersPage() {
  useEffect(() => {
    const sendOrderEmail = async () => {
      const order = {
        name: "Rumi",
        email: "beattractivewithrumi@gamil.com", // ✅ Resend verified email
        address: "123 Street",
        city: "Karachi",
        postalCode: "75000",
        country: "Pakistan",
        orderItems: [
          { name: "Dior Perfume", qty: 1, price: 2499 },
          { name: "LV Bag", qty: 1, price: 9999 },
        ],
        totalPrice: 12498,
      };

      try {
        const res = await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(order),
        });

        const data = await res.json();
        if (data.success) {
          console.log("✅ Email sent successfully!");
        } else {
          console.error("❌ Email failed:", data.error);
        }
      } catch (err) {
        console.error("❌ Email API error:", err);
      }
    };

    // ✅ Sirf tab call karo jab URL me success=true ho
    if (window.location.search.includes("success=true")) {
      sendOrderEmail();
    }
  }, []);

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold">🎉 Order Placed Successfully!</h1>
      <p className="mt-2">A confirmation email has been sent to your inbox.</p>
    </div>
  );
}
