
import { NextRequest, NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const {
    name,
    email,
    address,
    city,
    postalCode,
    country,
    total,
    paymentMethod,
    items,
    paymentStatus,
  } = body;


  const orderDoc = {
    _type: 'order',
    customerName: name,
    email,
    address,
    city,
    postalCode,
    country,
    totalAmount: total,
    paymentMethod,
    paymentStatus,
    products: Array.isArray(items)
      ? items.map((item: any) => ({
          _type: 'cartItem',
          title: item.title,
          quantity: item.quantity,
          price: item.price,
        }))
      : [],
    createdAt: new Date().toISOString(),
  };

  try {
    
    await client.create(orderDoc);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Sanity order save error:", error);
    const errorMessage = (error instanceof Error) ? error.message : 'Unknown error';
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
