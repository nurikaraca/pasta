import Link from "next/link.js";
import { data } from "../data.js";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton.jsx";

const Product = ({ query = "", category = "all" }) => {
  const normalizedQuery = query.toLowerCase().trim();
  const filteredProducts = data.filter((item) => {
    const matchesSearch =
      !normalizedQuery ||
      item.title.toLowerCase().includes(normalizedQuery) ||
      item.description.toLowerCase().includes(normalizedQuery);
    const matchesCategory = category === "all" || item.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="menu" className="bg-stone-50 px-4 py-14 text-stone-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
              Seçili Menü
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Taze hazırlanan pastalar</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-stone-600">
            {filteredProducts.length} ürün listeleniyor. Arama ve kategori seçimiyle menüyü
            hızlıca daraltabilirsin.
          </p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="rounded-lg border border-dashed border-stone-300 bg-white p-10 text-center">
            <h3 className="text-xl font-semibold">Sonuç bulunamadı</h3>
            <p className="mt-2 text-stone-600">Farklı bir kelime deneyebilir veya tüm menüye dönebilirsin.</p>
            <Link
              href="/"
              className="mt-5 inline-flex rounded-full bg-red-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-800"
            >
              Tüm menüyü göster
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((item) => (
              <article
                className="group overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                key={item.id}
              >
                <Link href={`/product?id=${item.id}`} className="block">
                  {item.img && (
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-red-800 shadow-sm">
                        {item.badge}
                      </div>
                    </div>
                  )}
                </Link>

                <div className="flex min-h-56 flex-col p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
                        {item.category === "vegetarian" ? "Vejetaryen" : "Pasta"}
                      </p>
                      <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
                    </div>
                    <p className="shrink-0 text-xl font-bold text-red-700">{item.price} TL</p>
                  </div>

                  <p className="mt-3 flex-1 text-sm leading-6 text-stone-600">{item.description}</p>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <span className="text-sm font-medium text-stone-500">{item.prepTime}</span>
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/product?id=${item.id}`}
                        className="rounded-full border border-stone-300 px-4 py-2.5 text-sm font-semibold transition hover:border-red-700 hover:text-red-700"
                      >
                        Detay
                      </Link>
                      <AddToCartButton product={item} className="px-4" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Product;
