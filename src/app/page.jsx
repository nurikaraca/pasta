import Product from "@/components/Product";
import { categories } from "@/data";
import Link from "next/link";
import { FaArrowDown, FaLeaf, FaRegSmileBeam } from "react-icons/fa";

export default function Home({ searchParams }) {
  const query = searchParams?.q || "";
  const requestedCategory = searchParams?.category || "all";
  const category = categories.some((item) => item.value === requestedCategory)
    ? requestedCategory
    : "all";

  return (
    <div className="relative min-h-screen bg-stone-50">
      <section className="relative flex min-h-[620px] items-end overflow-hidden px-4 pb-12 pt-36 text-white sm:px-6 lg:min-h-screen lg:px-8">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
              <FaRegSmileBeam />
              Günlük hazırlanan taze makarna menüsü
            </div>
            <h1 className="text-5xl font-black leading-tight md:text-7xl">PASTA</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
              Klasik İtalyan lezzetlerini sade, sıcak ve modern bir menü deneyimiyle
              keşfet. Favorini ara, kategori seç ve detayları incele.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-3">
              {categories.map((item) => (
                <Link
                  href={item.value === "all" ? "/" : `/?category=${item.value}`}
                  key={item.value}
                  className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${
                    category === item.value
                      ? "border-white bg-white text-stone-950"
                      : "border-white/30 bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link
              href="#menu"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-red-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-800"
            >
              Menüye Git
              <FaArrowDown className="text-xs" />
            </Link>
          </div>

          <div className="grid gap-3 border-t border-white/20 pt-6 text-sm text-white/80 sm:grid-cols-3">
            <span>10 imza lezzet</span>
            <span className="inline-flex items-center gap-2">
              <FaLeaf className="text-emerald-300" />
              Vejetaryen seçenekler
            </span>
            <span>15-30 dk servis aralığı</span>
          </div>
        </div>
      </section>

      <Product query={query} category={category} />
    </div>
  );
}
