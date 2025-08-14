"use client";

import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  title: string;
  price: number;
  priceWithoutDiscount?: number;
  imageUrl: string;
  badge?: string;
}

const staticProducts: Product[] = [
  {
    id: "1",
    title: "Elegant Rose Perfume",
    price: 45,
    priceWithoutDiscount: 60,
    imageUrl: "/images/product1.jpg",
    badge: "New",
  },
  {
    id: "2",
    title: "Luxury Leather Bag",
    price: 120,
    imageUrl: "/images/product2.jpg",
    badge: "Sale",
  },
  {
    id: "3",
    title: "Classic Men's Watch",
    price: 95,
    priceWithoutDiscount: 110,
    imageUrl: "/images/product3.jpg",
  },
  {
    id: "4",
    title: "Silk Scarf",
    price: 25,
    imageUrl: "/images/product4.jpg",
    badge: "Hot",
  },
];

export default function OurProduct() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl text-center font-semibold text-[#1C1B1F] tracking-tight mb-8">
        Our Products
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {staticProducts.map((product) => (
          <div
            key={product.id}
            className="group relative rounded-lg bg-white shadow-sm hover:shadow-md transition"
          >
            <div className="relative aspect-square overflow-hidden rounded-lg">
              {product.badge && (
                <span className="absolute left-3 top-3 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  {product.badge}
                </span>
              )}
              <Link href={`/product/${product.id}`}>
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  height={400}
                  width={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h3 className="text-sm text-[#1C1B1F]">{product.title}</h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-lg font-medium text-[#1C1B1F]">
                    ${product.price}
                  </span>
                  {product.priceWithoutDiscount && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.priceWithoutDiscount}
                    </span>
                  )}
                </div>
              </div>
              <button className="rounded-full bg-[#00B5A5] p-2 text-white transition-colors hover:bg-[#00A294]">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Add to cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
