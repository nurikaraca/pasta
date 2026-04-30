import { data } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaClock, FaLeaf } from "react-icons/fa";
import AddToCartButton from "@/components/AddToCartButton";

export function generateMetadata({ searchParams }) {
  const product = data.find((item) => item.id === Number(searchParams?.id));

  if (!product) {
    return {
      title: "Ürün bulunamadı",
    };
  }

  return {
    title: `${product.title} | Pasta Menu`,
    description: product.description,
  };
}

export default function ProductDetail({ searchParams }) {
  const product = data.find((item) => item.id === Number(searchParams?.id));

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-stone-50 px-4 pb-16 pt-32 text-stone-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/#menu"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-semibold transition hover:border-red-700 hover:text-red-700"
        >
          <FaArrowLeft className="text-xs" />
          Menüye Dön
        </Link>

        <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-stone-200 shadow-lg">
            <Image
              src={product.img}
              alt={product.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
            <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-red-800 shadow-sm">
              {product.badge}
            </div>
          </div>

          <div className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
              {product.category === "vegetarian" ? "Vejetaryen" : "Pasta"}
            </p>
            <h1 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              {product.title}
            </h1>
            <p className="mt-5 text-base leading-8 text-stone-600">{product.description}</p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-stone-100 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-stone-500">
                  <FaClock />
                  Hazırlanma
                </div>
                <p className="mt-2 text-xl font-bold">{product.prepTime}</p>
              </div>
              <div className="rounded-lg bg-stone-100 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-stone-500">
                  <FaLeaf />
                  Kategori
                </div>
                <p className="mt-2 text-xl font-bold">
                  {product.category === "vegetarian" ? "Vejetaryen" : "Klasik"}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-stone-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-4xl font-black text-red-700">{product.price} TL</p>
              <AddToCartButton product={product} className="px-6 py-3" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
