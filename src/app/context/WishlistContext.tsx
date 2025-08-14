// // // "use client";

// // // import React, { createContext, useContext, useState, ReactNode } from "react";

// // // export interface WishlistItem {
// // //   _id: string;
// // //   title: string;
// // //   price: number;
// // //   imgUrl: string;
// // // }

// // // export interface WishlistContextType {
// // //   wishlistItems: WishlistItem[]; // ✅ matches Header.tsx usage
// // //   isInWishlist: (id: string) => boolean;
// // //   toggleWishlist: (item: WishlistItem) => void;
// // // }

// // // const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// // // export const WishlistProvider = ({ children }: { children: ReactNode }) => {
// // //   const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

// // //   // ✅ Check if product is already in wishlist
// // //   const isInWishlist = (id: string) => {
// // //     return wishlistItems.some((item) => item._id === id);
// // //   };

// // //   // ✅ Add or remove from wishlist
// // //   const toggleWishlist = (item: WishlistItem) => {
// // //     setWishlistItems((prev) => {
// // //       if (isInWishlist(item._id)) {
// // //         return prev.filter((p) => p._id !== item._id); // remove
// // //       } else {
// // //         return [...prev, item]; // add
// // //       }
// // //     });
// // //   };

// // //   return (
// // //     <WishlistContext.Provider value={{ wishlistItems, isInWishlist, toggleWishlist }}>
// // //       {children}
// // //     </WishlistContext.Provider>
// // //   );
// // // };

// // // export const useWishlist = (): WishlistContextType => {
// // //   const context = useContext(WishlistContext);
// // //   if (!context) {
// // //     throw new Error("useWishlist must be used within a WishlistProvider");
// // //   }
// // //   return context;
// // // };
// // "use client";

// // import React, { createContext, useContext, useState, ReactNode } from "react";

// // type WishlistItem = {
// //   _id: string;
// //   title: string;
// //   imgUrl: string;
// //   price: number;
// // };

// // type WishlistContextType = {
// //   wishlist: WishlistItem[];
// //   addToWishlist: (item: WishlistItem) => void;
// //   removeFromWishlist: (id: string) => void;
// // };

// // const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// // export const WishlistProvider = ({ children }: { children: ReactNode }) => {
// //   const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

// //   const addToWishlist = (item: WishlistItem) => {
// //     setWishlist((prev) =>
// //       prev.find((i) => i._id === item._id) ? prev : [...prev, item]
// //     );
// //   };

// //   const removeFromWishlist = (id: string) => {
// //     setWishlist((prev) => prev.filter((item) => item._id !== id));
// //   };

// //   return (
// //     <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
// //       {children}
// //     </WishlistContext.Provider>
// //   );
// // };

// // export const useWishlist = () => {
// //   const context = useContext(WishlistContext);
// //   if (!context) {
// //     throw new Error("useWishlist must be used within a WishlistProvider");
// //   }
// //   return context;
// // };
// 'use client';

// import React, { createContext, useContext, useState, ReactNode } from 'react';

// interface WishlistItem {
//   _id: string;
//   title: string;
//   price: number;
//   imgUrl: string;
// }

// interface WishlistContextType {
//   wishlist: WishlistItem[];
//   toggleWishlist: (item: WishlistItem) => void;
//   removeFromWishlist: (id: string) => void;
//   isInWishlist: (id: string) => boolean;
// }

// const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// export const WishlistProvider = ({ children }: { children: ReactNode }) => {
//   const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

//   const isInWishlist = (id: string) => wishlist.some(item => item._id === id);

//   const toggleWishlist = (item: WishlistItem) => {
//     setWishlist(prev => {
//       if (isInWishlist(item._id)) {
//         return prev.filter(i => i._id !== item._id);
//       }
//       return [...prev, item];
//     });
//   };

//   const removeFromWishlist = (id: string) => {
//     setWishlist(prev => prev.filter(item => item._id !== id));
//   };

//   return (
//     <WishlistContext.Provider
//       value={{ wishlist, toggleWishlist, removeFromWishlist, isInWishlist }}
//     >
//       {children}
//     </WishlistContext.Provider>
//   );
// };

// // ✅ Custom hook (named export)
// export const useWishlist = () => {
//   const context = useContext(WishlistContext);
//   if (!context) {
//     throw new Error('useWishlist must be used within a WishlistProvider');
//   }
//   return context;
// };
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface WishlistItem {
  _id: string;
  title: string;
  imgUrl: string;
  price: number;
}

interface WishlistContextType {
  wishlist: WishlistItem[];
  toggleWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  const isInWishlist = (id: string) => wishlist.some(i => i._id === id);

  const toggleWishlist = (item: WishlistItem) => {
    setWishlist(prev => (isInWishlist(item._id) ? prev.filter(i => i._id !== item._id) : [...prev, item]));
  };

  const removeFromWishlist = (id: string) => {
    setWishlist(prev => prev.filter(i => i._id !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (!context) throw new Error('useWishlist must be used within a WishlistProvider');
  return context;
};
