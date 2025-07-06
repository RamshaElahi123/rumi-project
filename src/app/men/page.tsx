'use client';

import Image from 'next/image';
import Link from 'next/link';
import ProductCards from '../Products/page';
import Navbar from '@/components/Navbar';

const menPerfume = () => {
  return (
    <div className="bg-white">
      <Navbar />

      {/* ✅ Hero Section */}
      <div className="relative w-full h-[500px]">
        {/* 🔹 Background Image */}
        <Image
          src="/images/IMG_2925_1.webp"
          alt="Premium Perfume"
          fill
          className="object-cover object-center opacity-80"
        />

        {/* 🔹 Gradient Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* 🔹 Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Bold. Timeless. Masculine.
          </h1>
          <p className="text-white text-base md:text-lg max-w-xl mb-6">
            Discover our exclusive collection of men's perfumes crafted to elevate your presence.
          </p>
          <Link
            href="#products"
            className="bg-white text-black font-medium px-6 py-2 rounded-md hover:bg-gray-200 transition"
          >
            Explore Collection
          </Link>
        </div>
      </div>

      {/* ✅ Product Section */}
      <section id="products" className="py-12 px-4 max-w-screen-xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#2f2f2e] mb-6 text-center">
          Featured Men’s Perfumes
        </h2>

        <ProductCards />
      </section>
    </div>
  );
};

export default menPerfume;
