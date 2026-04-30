"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaMinus, FaPlus, FaShoppingBag, FaTrash } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

export default function CartButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const {
    items,
    totalQuantity,
    totalPrice,
    increaseItem,
    decreaseItem,
    removeItem,
    clearCart,
  } = useCart();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const cartDrawer =
    mounted && isOpen
      ? createPortal(
          <div className="fixed inset-0 z-[999]">
            <button
              type="button"
              className="absolute inset-0 bg-black/55"
              aria-label="Sepeti kapat"
              onClick={() => setIsOpen(false)}
            />

            <aside className="absolute right-0 top-0 flex h-dvh w-full max-w-md flex-col overflow-hidden bg-white text-stone-950 shadow-2xl">
              <div className="flex shrink-0 items-center justify-between border-b border-stone-200 bg-white p-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
                    Sepet
                  </p>
                  <h2 className="text-2xl font-black">{totalQuantity} ürün</h2>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold transition hover:border-red-700 hover:text-red-700"
                >
                  Kapat
                </button>
              </div>

              {items.length === 0 ? (
                <div className="flex flex-1 flex-col items-center justify-center bg-white px-6 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-stone-100 text-2xl text-stone-500">
                    <FaShoppingBag />
                  </div>
                  <h3 className="text-xl font-bold">Sepetin boş</h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    Giriş yapmadan da ürünleri sepete ekleyebilir ve daha sonra
                    geri döndüğünde sepetini görebilirsin.
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex-1 overflow-y-auto bg-stone-50 p-5">
                    <div className="space-y-4">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className="grid grid-cols-[72px_1fr] gap-4 rounded-lg border border-stone-200 bg-white p-3 shadow-sm"
                        >
                          <div className="relative h-20 overflow-hidden rounded-md bg-stone-100">
                            <Image
                              src={item.img}
                              alt={item.title}
                              fill
                              sizes="72px"
                              className="object-cover"
                            />
                          </div>

                          <div className="min-w-0">
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <h3 className="font-bold leading-tight">{item.title}</h3>
                                <p className="mt-1 text-sm text-stone-600">
                                  {item.price} TL
                                </p>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeItem(item.id)}
                                className="rounded-full p-2 text-stone-400 transition hover:bg-red-50 hover:text-red-700"
                                aria-label={`${item.title} ürününü sil`}
                              >
                                <FaTrash className="text-xs" />
                              </button>
                            </div>

                            <div className="mt-4 flex items-center justify-between">
                              <div className="flex items-center rounded-full border border-stone-300">
                                <button
                                  type="button"
                                  onClick={() => decreaseItem(item.id)}
                                  className="flex h-9 w-9 items-center justify-center rounded-l-full transition hover:bg-stone-100"
                                  aria-label="Adet azalt"
                                >
                                  <FaMinus className="text-xs" />
                                </button>
                                <span className="w-9 text-center text-sm font-bold">
                                  {item.quantity}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => increaseItem(item.id)}
                                  className="flex h-9 w-9 items-center justify-center rounded-r-full transition hover:bg-stone-100"
                                  aria-label="Adet artır"
                                >
                                  <FaPlus className="text-xs" />
                                </button>
                              </div>
                              <p className="font-bold text-red-700">
                                {item.price * item.quantity} TL
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="shrink-0 border-t border-stone-200 bg-white p-5">
                    <div className="mb-4 flex items-center justify-between text-lg font-black">
                      <span>Toplam</span>
                      <span>{totalPrice} TL</span>
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={clearCart}
                        className="flex-1 rounded-full border border-stone-300 px-4 py-3 text-sm font-bold transition hover:border-red-700 hover:text-red-700"
                      >
                        Temizle
                      </button>
                      <button
                        type="button"
                        className="flex-1 rounded-full bg-red-700 px-4 py-3 text-sm font-bold text-white transition hover:bg-red-800"
                      >
                        Ödeme
                      </button>
                    </div>
                  </div>
                </>
              )}
            </aside>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white transition hover:bg-white/25"
        aria-label="Sepeti ac"
      >
        <FaShoppingBag />
        {totalQuantity > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-700 px-1 text-xs font-bold text-white">
            {totalQuantity}
          </span>
        )}
      </button>
      {cartDrawer}
    </>
  );
}
