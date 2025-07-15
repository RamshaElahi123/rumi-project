'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/app/context/CartContext';
import { toast } from 'sonner';

const MenBagsPage = () => {
  const { addToCart } = useCart();

  const menBags = [
    {
      id: 1,
      name: 'Classic Leather Briefcase',
      price: 249,
      tag: 'Out Of Stock',
      image: '/images/mens-bag1.jpg',
    },
    {
      id: 2,
      name: 'Urban Messenger Bag',
      price: 189,
      image: '/images/mens-bag2.jpg',
    },
  ];

  return (
    <div>
      <Navbar />

      {/* ✅ Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-100 to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Image
            src="/images/men-bag-hero.jpg"
            alt="Men Bag Hero"
            width={600}
            height={500}
            className="rounded-2xl shadow-xl object-cover w-full"
          />
          <div className="text-center md:text-left">
            <h2 className="text-5xl font-bold text-[#272343] mb-4 leading-tight">
              Sophisticated <br />
              <span className="text-[#007580]">Men’s Bags</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Discover professional, rugged, and versatile bags built for your lifestyle.
            </p>
            <Link href="/allProducts">
              <button className="bg-[#007580] text-white px-6 py-3 rounded-full font-medium flex items-center mx-auto md:mx-0 hover:bg-[#005f66]">
                Shop Men’s Bags <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ Product Cards */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-semibold text-center text-[#007580] mb-10">Men's Bags</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
          {menBags.map((bag) => (
            <div key={bag.id} className="rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition">
              {/* Image & Tag */}
              <Link href={`/bagsmen/${bag.id}`}>
                <div className="relative cursor-pointer">
                  <Image
                    src={bag.image}
                    alt={bag.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  {bag.tag && (
                    <span className="absolute top-3 left-3 bg-[#007580] text-white text-xs px-3 py-1 rounded-full uppercase">
                      {bag.tag}
                    </span>
                  )}
                </div>
              </Link>

              {/* Product Name */}
              <Link href={`/bagsmem/${bag.id}`}>
                <h3 className="text-lg font-semibold text-gray-800 hover:underline mt-2 text-center">
                  {bag.name}
                </h3>
              </Link>

              {/* Price & Button */}
              <div className="p-4 text-center">
                <p className="text-[#007580] font-bold text-lg mt-1">
                  PKR {bag.price.toLocaleString()}
                </p>
                <button
                  onClick={() => {
                    addToCart({
                      _id: bag.id.toString(),
                      title: bag.name,
                      price: bag.price,
                      imgUrl: bag.image,
                      quantity: 1,
                    });
                    toast.success('Added to cart');
                  }}
                  className="mt-3 inline-flex items-center bg-[#007580] text-white px-4 py-2 rounded-full hover:bg-[#005f66]"
                >
                  <ShoppingBag className="h-4 w-4 mr-1" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MenBagsPage;
