'use client';

import Image from 'next/image';
import Link from 'next/link';
import ProductCards from '../Products/page';
import Navbar from '@/components/Navbar';

const WomenPerfume = () => {
  return (

    <div className="bg-white">
        <Navbar/>
      {/* ✅ Hero Section */}
      <div className="relative w-full h-[500px] bg-[#f4ebe4]">
        {/* Background Image from your upload */}
        <Image
          src="/images/BEST PERFUMES FOR WOMEN 170325 MAIN.webp"
          alt="Premium Perfume"
          fill
          className="object-cover object-center opacity-80  scale-90"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-[#f4ebe4]/60 flex items-center justify-center">
          <div className="text-center px-4 md:px-8">
            <h2 className="text-[#b13368] text-xl font-cursive italic mb-2">Women Perfume</h2>
            <h1 className="text-5xl md:text-6xl font-semibold text-[#272343] tracking-wide">PREMIUM</h1>
            <p className="text-lg text-[#272343] uppercase tracking-widest mt-1">Collection</p>
            <Link
              href="/products"
              className="inline-block mt-6 bg-[#b13368] text-white px-6 py-3 rounded-full shadow hover:bg-[#9b2c5b] transition"
            >
              ORDER NOW
            </Link>
          </div>
        </div>
      </div>

      {/* ✅ Product Cards Section */}
      {/* <section className="max-w-screen-xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-[#D63384] mb-10">Our Signature Perfumes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition">
              <Image
                src={`/images/images.jpg`}
                alt={`Perfume ${item}`}
                width={500}
                height={500}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-[#272343]">Elegant Scent {item}</h3>
                <p className="text-[#007580] font-medium mt-2">$49.99</p>
                <Link
                  href={`/product/${item}`}
                  className="inline-block mt-4 bg-[#D63384] text-white px-5 py-2 rounded-full hover:bg-[#c02974] transition"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section> */}
      <section>
        <ProductCards/>
      </section>
    </div>
  );
};

export default WomenPerfume;
