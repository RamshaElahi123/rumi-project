"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaSearch, FaTimes, FaChevronDown } from "react-icons/fa";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";

interface Product {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const fetchProducts = async (query: string) => {
    const searchQuery = groq`*[_type == "products" && title match $search] {
      _id,
      title,
      price,
      "imageUrl": image.asset->url
    }`;

    try {
      const results = await client.fetch(searchQuery, { search: `${query}*` });
      setSearchResults(results);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      fetchProducts(query);
    } else {
      setSearchResults([]);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setSearchQuery("");
      setSearchResults([]);
    }
  };

  return (
    <nav className="w-full bg-white py-2 shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0">
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8 ml-3 items-center">
          {/* ✅ Logo */}
          <div className="h-14 w-auto flex items-center">
            <Image
              src="/images/WhatsApp_Image_2025-07-03_at_18.52.10_45fd5108-removebg-preview.png"
              alt="logo"
              width={80}
              height={80}
              className="object-contain h-full w-auto"
            />
          </div>

          <Link href="/" className="text-[#007580] text-[14px] font-medium">
            Home
          </Link>
           <Link href="/allProducts" className="text-[14px] font-medium">
            Products
          </Link>

          {/* Categories Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsCategoriesOpen(true)}
            onMouseLeave={() => setIsCategoriesOpen(false)}
          >
            <button className="flex items-center text-[14px] font-medium">
              Scents <FaChevronDown className="ml-1 text-sm" />
            </button>
            {isCategoriesOpen && (
              <div className="absolute bg-white shadow-md rounded-md mt-2 w-40 z-50">
                <Link
                  href="/women"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Women
                </Link>
                <Link
                  href="/men"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Men
                </Link>
              </div>
            )}
          </div>

          <Link href="/watchies" className="text-[14px] font-medium">
            watchies
          </Link> 
           <Link href="/bags" className="text-[14px] font-medium">
            Bags
          </Link>
          <Link href="/scarf" className="text-[14px] font-medium">
            scarf
          </Link>
          <Link href="/faq" className="text-[14px] font-medium">
            Pages
          </Link>
          <Link href="/about" className="text-[14px] font-medium">
            About
          </Link>
          
         
           
        </div>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex items-center gap-4 ml-auto mr-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#007580]"
            />
            {searchQuery && (
              <div className="absolute top-12 left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                {searchResults.length > 0 ? (
                  searchResults.map((product) => (
                    <Link
                      key={product._id}
                      href={`/product/${product._id}`}
                      className="flex items-center gap-4 px-4 py-2 hover:bg-gray-100"
                    >
                      <img
                        src={product.imageUrl}
                        alt={product.title}
                        className="w-10 h-10 object-cover rounded-lg"
                      />
                      <div>
                        <p className="text-sm font-medium">{product.title}</p>
                        <p className="text-sm text-gray-600">${product.price}</p>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="px-4 py-2 text-gray-500">No results found</p>
                )}
              </div>
            )}
          </div>
          <Link href="/contact">
            <span className="font-normal text-[#636270] text-[14px]">
              Contact:
            </span>
          </Link>
          <span className="font-medium text-[#272343] text-[14px] ml-1">
            (808) 555-0111
          </span>
        </div>

        {/* Mobile Menu and Search Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <button onClick={toggleSearch} className="p-2">
            {isSearchOpen ? (
              <FaTimes className="w-5 h-5" />
            ) : (
              <FaSearch className="w-5 h-5" />
            )}
          </button>
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

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="lg:hidden px-4 py-2 border-t border-gray-200">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#007580]"
          />
          {searchQuery && (
            <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
              {searchResults.length > 0 ? (
                searchResults.map((product) => (
                  <Link
                    key={product._id}
                    href={`/product/${product._id}`}
                    className="flex items-center gap-4 px-4 py-2 hover:bg-gray-100"
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="w-10 h-10 object-cover rounded-lg"
                    />
                    <div>
                      <p className="text-sm font-medium">{product.title}</p>
                      <p className="text-sm text-gray-600">${product.price}</p>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="px-4 py-2 text-gray-500">No results found</p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col gap-4 mt-4 px-4">
          <Link href="/" className="text-[#007580] text-[14px] font-medium">
            Home
          </Link>
          <Link href="/category/women" className="text-[14px] font-medium">
            Women
          </Link>
          <Link href="/category/men" className="text-[14px] font-medium">
            Men
          </Link>
          <Link href="/allProducts" className="text-[14px] font-medium">
            Products
          </Link>
          <Link href="/faq" className="text-[14px] font-medium">
            Pages
          </Link>
          <Link href="/about" className="text-[14px] font-medium">
            About
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
