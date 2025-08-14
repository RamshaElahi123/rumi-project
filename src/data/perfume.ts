// src/data/perfumes.ts

export interface Perfume {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string; // optional field if you want to show details
}

export const perfumes: Perfume[] = [
  {
    id: 1,
    name: "Rose Elegance",
    price: 120,
    image: "/images/perfume1.jpg",
    description: "A timeless floral scent with fresh rose and warm undertones.",
  },
  {
    id: 2,
    name: "Jasmine Whisper",
    price: 150,
    image: "/images/perfume2.jpg",
    description: "A soft and delicate blend of jasmine and vanilla.",
  },
  {
    id: 3,
    name: "Citrus Bloom",
    price: 95,
    image: "/images/perfume3.jpg",
    description: "Refreshing citrus notes with a touch of white blossoms.",
  },
  {
    id: 4,
    name: "Velvet Oud",
    price: 200,
    image: "/images/perfume4.jpg",
    description: "Luxurious oud wood with hints of spice and amber.",
  },
  {
    id: 5,
    name: "Vanilla Dream",
    price: 110,
    image: "/images/perfume5.jpg",
    description: "A sweet and comforting vanilla blend with soft musk.",
  },
  {
    id: 6,
    name: "Ocean Breeze",
    price: 130,
    image: "/images/perfume6.jpg",
    description: "Cool marine notes with fresh mint and green apple.",
  },
];
