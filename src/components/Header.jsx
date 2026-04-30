import Link from "next/link";
import { FaUser } from "react-icons/fa";
import CartButton from "./CartButton";

const Header = () => {
  return (
    <header
      className="fixed left-0 top-0 z-50 w-full border-b border-white/15 bg-stone-950/75 text-sm text-white shadow-lg backdrop-blur-md md:text-base"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between lg:px-8">
        <Link
          href="/"
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/10 text-2xl font-black tracking-tight shadow-sm transition hover:bg-white/20 md:h-16 md:w-16 md:text-3xl"
        >
          PASTA
        </Link>

        <nav className="flex flex-1 items-center gap-2 overflow-x-auto md:justify-center md:gap-4">
          <Link href="/" className="rounded-full px-4 py-2 transition hover:bg-white/15">
            Ana Sayfa
          </Link>
          <Link
            href="/?category=pasta"
            className="rounded-full px-4 py-2 transition hover:bg-white/15"
          >
            Pasta
          </Link>
          <Link
            href="/?category=vegetarian"
            className="rounded-full px-4 py-2 transition hover:bg-white/15"
          >
            Vejetaryen
          </Link>
        </nav>

        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 text-sm font-semibold text-white transition hover:bg-white/25"
          >
            <FaUser className="text-xs" />
            Sign in
          </button>
          <CartButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
