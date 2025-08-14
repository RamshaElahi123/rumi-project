"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState<string | false>(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCategory = (category: string) => {
    setIsCategoriesOpen((prev) => (prev === category ? false : category));
  };

  return (
    <nav className="w-full bg-white py-2 shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0">
        {/* Left - Logo */}
        <div className="flex items-center gap-3">
          <div className="h-14 w-auto flex items-center">
            <Image
              src="/images/rumi.logo.png"
              alt="logo"
              width={80}
              height={80}
              className="object-contain h-full w-auto"
            />
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 ml-3 items-center">
          <Link href="/" className="text-[#007580] text-[14px] font-medium">Home</Link>
          <Link href="/allProducts" className="text-[14px] font-medium">Products</Link>

          {/* Desktop Dropdowns */}
          {["scents", "watch", "bags"].map((cat) => (
            <div className="relative" key={cat}>
              <button
                onClick={() => toggleCategory(cat)}
                className="flex items-center text-[14px] font-medium"
              >
                {cat === "scents" && "Scents"}
                {cat === "watch" && "Watchies"}
                {cat === "bags" && "Bags"}
                <FaChevronDown className="ml-1 text-sm" />
              </button>
              <div
                className={`absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md transition-all duration-300 overflow-hidden z-50 ${
                  isCategoriesOpen === cat
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0 pointer-events-none"
                }`}
              >
                <Link href={`/${cat}women`} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Women</Link>
                <Link href={`/${cat}men`} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Men</Link>
              </div>
            </div>
          ))}

          <Link href="/scarf" className="text-[14px] font-medium">Scarf</Link>
          <Link href="/pages" className="text-[14px] font-medium">Pages</Link>
          <Link href="/about" className="text-[14px] font-medium">About</Link>

          {/* WhatsApp Link */}
          <Link
            href="https://whatsapp.com/channel/0029Vb5zPkR6GcG9FVA90j2x"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#272343] text-[14px] font-medium hover:text-[#25D366]"
          >
            <FaWhatsapp className="text-[#25D366] w-5 h-5" />
            <span>Join Us On WhatsApp</span>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-2 mt-4 px-4 pb-4 border-t border-gray-200">
          <Link href="/" className="text-[#007580] text-[14px] font-medium py-2">Home</Link>
          <Link href="/allProducts" className="text-[14px] font-medium py-2">Products</Link>

          {/* Mobile Dropdowns */}
          {["scents", "watch", "bags"].map((cat) => (
            <div key={cat}>
              <button
                onClick={() => toggleCategory(cat)}
                className="flex items-center justify-between w-full text-left text-[14px] font-medium py-2"
              >
                {cat === "scents" && "Scents"}
                {cat === "watch" && "Watchies"}
                {cat === "bags" && "Bags"}
                <FaChevronDown
                  className={`ml-1 text-sm transition-transform duration-300 ${
                    isCategoriesOpen === cat ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`pl-4 transition-all duration-300 overflow-hidden ${
                  isCategoriesOpen === cat ? "max-h-40" : "max-h-0"
                }`}
              >
                <Link href={`/${cat}women`} className="block py-2 text-gray-700">Women</Link>
                <Link href={`/${cat}men`} className="block py-2 text-gray-700">Men</Link>
              </div>
            </div>
          ))}

          <Link href="/scarf" className="text-[14px] font-medium py-2">Scarf</Link>
          <Link href="/pages" className="text-[14px] font-medium py-2">Pages</Link>
          <Link href="/about" className="text-[14px] font-medium py-2">About</Link>

          {/* WhatsApp Link Mobile */}
          <Link
            href="https://whatsapp.com/channel/0029Vb5zPkR6GcG9FVA90j2x"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#272343] text-[14px] font-medium hover:text-[#25D366] py-2"
          >
            <FaWhatsapp className="text-[#25D366] w-5 h-5" />
            <span>Join Us On WhatsApp</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
