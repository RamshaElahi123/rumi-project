"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { useWishlist } from "@/app/context/WishlistContext";
import { Heart, HeartOff } from "lucide-react";
import { toast } from "sonner";

const AllProducts = () => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const products = [
    // ✅ SCENTS
    { id: 1, name: "Uroosa", price: 99, originalPrice: 129, description: "Romantic blend...", images: ["/images/uroosa.jpeg"], category: "Scents" },
    { id: 2, name: "Miss Dior 5 in 1 set", price: 110, description: "A luxurious floral...", images: ["/images/M.Dior mini2.webp"], category: "Scents" },
    { id: 3, name: "Channel 5 in 1 Set", price: 105, description: "A fresh and light...", images: ["/images/channel 5.webp"], category: "Scents" },
    { id: 4, name: "Floral Desire", price: 125, originalPrice: 150, description: "Sensual floral...", images: ["/images/gucci purple.webp"], category: "Scents" },
    { id: 5, name: "Zarar", price: 120, originalPrice: 180, tag: "Gold Edition", images: ["/images/zaara..jpeg"], description: "Premium masculine...", category: "Scents" },
    { id: 6, name: "Janan", price: 95, tag: "Gold Edition", images: ["/images/golsz..jpeg"], description: "A blend of eastern...", category: "Scents" },
    { id: 7, name: "Exclusive", price: 135, images: ["/images/Exclusiv.webp"], description: "Signature scent...", category: "Scents" },
    { id: 8, name: "All rounder by Shoaib Malik", price: 150, originalPrice: 170, tag: "Exclusive", images: ["/images/all rounder j..jpeg"], description: "Sporty fragrance...", category: "Scents" },

    // ✅ WATCHES
    { id: 9, name: "Rich Gold Elegant Watch", price: 149, images: ["/images/fancy 3.jpeg"], tag: "New", description: "Luxurious gold...", category: "Watches" },
    { id: 10, name: "Black Aura", price: 149, images: ["/images/6 aura.jpeg"], tag: "New", description: "Bold black watch...", category: "Watches" },
    { id: 11, name: "Classic Silver Dial", price: 129, images: ["/images/wt.jpeg"], description: "Refined silver dial...", category: "Watches" },
    { id: 12, name: "Fancy Neavy Blue Watch", price: 299, images: ["/images/fancy 2.jpeg"], tag: "Luxury", description: "Luxury navy blue...", category: "Watches" },
    { id: 13, name: "Minimal Leather Strap", price: 109, images: ["/images/w5.jpeg"], description: "Minimalist design...", category: "Watches" },

    // ✅ BAGS
    { id: 14, name: "Elegant Tote Bag", price: 199, tag: "New", images: ["/images/full moon.jpeg"], description: "Spacious and stylish...", category: "Bags" },
    { id: 15, name: "Fancy Clutch", price: 179, images: ["/images/black bride.jpeg"], description: "Evening clutch...", category: "Bags" },
        {
      id: 3,
      name: 'Hijab Tote',
      price: 1800,
      tag: 'New',
      originalPrice: 2800,
      image: '/images/hijab tote.jpeg',
    },
    {
      id: 4,
      name: 'LV Leather Bag',
      price: 2199,
      tag: 'Sale',
      originalPrice: 2700,
      image: '/images/lv blac 2.jpeg',
    },
    {
      id: 5,
      name: 'Canva Design Tote',
      price: 1800,
      tag: 'New',
      originalPrice: 2400,
      image: '/images/CANVA.jpeg',
    },
    {
      id: 6,
      name: 'Fancy Gold Clutch',
      price: 1599,
      tag: 'Sale',
      originalPrice: 2000,
      image: '/images/ride gold.jpeg',
    },
    {
      id: 7,
      name: 'Luna Carry',
      price: 2999,
      tag: 'Sale',
      originalPrice: 3400,
      image: '/images/LUNA CARRY BROWN.jpeg',
    },
    {
      id: 8,
      name: 'LV Leather Bag',
      price: 2199,
      tag: 'Sale',
      originalPrice: 2700,
      image: '/images/lv black off white.jpeg',
    },
    // ✅ STOLES
    { id: 16, name: "Chiffon Plain Scarfs", price: 1200, originalPrice: 1500, tag: "Pastels", images: ["/images/3 stols.jpeg"], description: "Soft pastel chiffon...", category: "Stoles" },
    { id: 17, name: "Georgitt Plain Scarfs", price: 1800, tag: "6 Pieces Deal", images: ["/images/bundle.jpeg"], description: "Set of 6 plain...", category: "Stoles" },
    { id: 18, name: "Silk Stuff Scarf", price: 950, images: ["/images/silk1.webp"], description: "Smooth and elegant...", category: "Stoles" },
    { id: 19, name: "Cotton Stuff Scarfs", price: 1350, originalPrice: 1600, images: ["/images/cotton hijab.webp"], description: "Breathable cotton...", category: "Stoles" },
  ];

  const formatPrice = (price: number) => `$${price.toFixed(2)}`;

  const handleWishlistToggle = (product: any) => {
    toggleWishlist({
      _id: product.id.toString(),
      title: product.name,
      price: product.price,
      imgUrl: product.images?.[0] || "/images/placeholder.png",
    });

    const wishlisted = isInWishlist(product.id.toString());
    toast.success(wishlisted ? "Removed from Wishlist" : "Added to Wishlist");
  };

  const renderSection = (title: string, category: string) => {
    const filteredProducts = products.filter(
      (p) =>
        p.category &&
        p.category.trim().toLowerCase() === category.trim().toLowerCase()
    );

    console.log(`${title}: ${filteredProducts.length} items`);

    return (
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">{title}</h2>
        {filteredProducts.length === 0 ? (
          <p className="text-red-500">No products found in {category}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => {
              const isWishlisted = isInWishlist(product.id.toString());
              const productImage =
                product.images?.[0] || "/images/placeholder.png";

              return (
                <div
                  key={product.id}
                  className="relative border rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300 flex flex-col justify-between bg-white"
                >
                  {product.tag && (
                    <span
                      className={`absolute top-2 left-2 inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                        product.tag === "New"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {product.tag}
                    </span>
                  )}

                  <button
                    onClick={() => handleWishlistToggle(product)}
                    className="absolute top-2 right-2 text-rose-500 hover:text-rose-600 z-10 p-1 rounded-full bg-white bg-opacity-70 hover:bg-opacity-100 transition"
                    aria-label={
                      isWishlisted ? "Remove from wishlist" : "Add to wishlist"
                    }
                  >
                    {isWishlisted ? <HeartOff size={24} /> : <Heart size={24} />}
                  </button>

                  <Link
                    href={`/product/${product.id}`}
                    passHref
                    className="block"
                  >
                    <div className="w-full aspect-[3/4] mb-4 overflow-hidden rounded-md">
                      <Image
                        src={productImage}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h2>
                  </Link>

                  <p className="text-gray-700 font-bold text-lg mb-1">
                    {formatPrice(product.price)}
                    {product.originalPrice && (
                      <span className="line-through text-gray-500 text-base ml-2">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </p>

                  <button
                    onClick={() => {
                      addToCart({
                        _id: product.id.toString(),
                        title: product.name,
                        price: product.price,
                        imgUrl: productImage,
                        quantity: 1,
                      });
                      toast.success("Added to cart");
                    }}
                    className="mt-auto bg-[#272343] text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition w-full text-center"
                  >
                    Add to Cart
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-12 text-center">
        All Products
      </h1>

      {renderSection("Scents Collection", "Scents")}
      {renderSection("Watches Collection", "Watches")}
      {renderSection("Bags Collection", "Bags")}
      {renderSection("Stoles Collection", "Stoles")}
    </section>
  );
};

export default AllProducts;
