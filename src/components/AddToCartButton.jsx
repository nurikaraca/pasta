"use client";

import { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ product, className = "" }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1200);
  };

  return (
    <button
      type="button"
      onClick={handleAdd}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-stone-950 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-red-700 ${className}`}
    >
      <FaShoppingBag />
      {added ? "Eklendi" : "Sepete Ekle"}
    </button>
  );
}
