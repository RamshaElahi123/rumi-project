'use client';

import Link from 'next/link';
import NextImage from 'next/image';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '@/app/context/CartContext';
import { useWishlist } from '@/app/context/WishlistContext';
import { Tangerine } from 'next/font/google';

const tangerine = Tangerine({ weight: '700', subsets: ['latin'] });

const Header = () => {
  const { cartItems } = useCart();
  const { wishlist } = useWishlist();

  return (
    <div className="w-full bg-[#F0F2F3] pt-5 pb-5 h-[84px]">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <NextImage src="/images/abr.png" alt="AbR Logo" width={40} height={23} className="ml-3" />
          <h1
            className={`text-[30px] sm:text-[38px] text-[#a1445d] flex items-center ${tangerine.className}`}
            style={{ letterSpacing: '-0.5px', textShadow: '0.4px 0.4px 0 currentColor', lineHeight: '1' }}
          >
            AbR <span className="ml-1 text-[22px]">❤</span>
          </h1>
        </div>

        {/* Wishlist + Cart */}
        <div className="flex space-x-3">
          <Link href="/wishlist">
            <button className="flex items-center space-x-2 bg-white py-2 px-4 rounded-md mr-3">
              <FaHeart className="text-xl" />
              <span className="hidden sm:inline">Wishlist</span>
              <div className="flex items-center justify-center w-6 h-6 bg-[#007580] text-white text-sm rounded-full">
                {wishlist.length}
              </div>
            </button>
          </Link>

          <Link href="/cart">
            <button className="flex items-center space-x-2 bg-white py-2 px-4 rounded-md mr-3">
              <FaShoppingCart className="text-xl" />
              <span className="hidden sm:inline">Cart</span>
              <div className="flex items-center justify-center w-6 h-6 bg-[#007580] text-white text-sm rounded-full">
                {cartItems.length}
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
