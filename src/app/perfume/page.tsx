// src/app/perfume/page.tsx
import { perfumes, Perfume } from "@/data/perfume";

export default function PerfumePage() {
  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {perfumes.map((perfume: Perfume) => (
        <div
          key={perfume.id}
          className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
        >
          <img
            src={perfume.image} // ✅ fixed
            alt={perfume.name} // ✅ fixed
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="mt-2 text-lg font-semibold">{perfume.name}</h3>
          <p className="text-gray-500">${perfume.price}</p>
        </div>
      ))}
    </div>
  );
}
