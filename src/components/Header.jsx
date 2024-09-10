import Link from "next/link";
import React from "react";
import { Caveat, Roboto } from "next/font/google";
import Image from "next/image";

const caveat = Caveat({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Header = () => {
  return (
    <div
      className={`top-5 p-4 absolute w-full h-15 text-xl flex items-center justify-between border-b-2 border-[#F5F5DC] ${roboto.className}  `}
    >
      {/* LOGO */}
      <div className="text-5xl  flex-[1] pl-28 ">
        <Link
          href="/"
          className={`flex items-center justify-center w-[140px] h-[140px] border-[#F5F5DC] border  rounded-full mx-auto ${caveat.className}  `}
        >
          PASTA
        </Link>
      </div>
      {/* LINKS */}
      <div className="flex-[4] flex gap-8 items-center  ">
        <Link href="/">Home</Link>
        <Link href="/pasta">Pasta</Link>
        <Link href="/italianfood">Italian Food</Link>
        <Link href="/vegetarian">Vegetarian</Link>
        <Link href="/about">About Us</Link>
      </div>

      {/* SEARCH BAR */}
      <div className="flex-[2] flex items-center justify-center">
        <input
          className="bg-transparent w-[200px] max-w-60 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#F5F5DC]"
          type="text"
          placeholder="Search ..."
        />
           <Image src="/images/search.png" alt="" width={20} height={20}/>
      </div>

      {/* LOGIN/REGISTER */}
      <div className="flex-[1] flex items-center justify-end gap-2 pr-28">
        <Link href="/login">Sign In</Link>
        <Link href="/register" className="mx-2">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Header;
