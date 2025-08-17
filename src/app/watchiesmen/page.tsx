"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";

const categories = [
   {
    id: "luxury",
    title: "Luxury Watches",
    link: "/watchiesmen/luxury",
    image: "/images/5 bracelet.jpeg",
  },
  {
    id: "leather",
    title: "Leather Watches",
    link: "/watchiesmen/leather",
    image: "/images/leatherwatch.jpeg", // ✅ fixed
  },
  {
    id: "smart",
    title: "Smart Watches",
    link: "/watchiesmen/smart",
    image: "/images/smartt.jpeg",
  },
 
 {
  id: "couple",
  title: "Couple Watches",
  link: "/watchiesmen/couple",
  image: "/images/wt.jpeg",
 }

];

const WatchesPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Men’s Watch Collections
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Explore our exclusive categories designed for every occasion.
        </p>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.link}
              className="group block bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <div className="relative w-full h-56">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {cat.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchesPage;
