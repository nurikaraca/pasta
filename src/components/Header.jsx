import Link from "next/link";
import React from "react";
import { Caveat, Roboto } from "next/font/google";
import Image from "next/image";
import SearchBar from "./SearchBar";

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
       className={` top-5 p-4 absolute z-[100] w-full h-15  text-base  md:text-lg lg:text-xl xl:text-2xl flex items-center justify-between border-b-2 border-[#F5F5DC] ${roboto.className}  `}
    >
      {/* LOGO */}
      <div className="flex-[1] xl:text-5xl lg:text-3xl md:text-xl sm:text-sm  pl-2  ">
        <Link
          href="/"
          className={`  flex items-center justify-center sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] lg:w-[100px] lg:h-[100px]  xl:w-[140px] xl:h-[140px] border-[#F5F5DC] border  rounded-full mx-auto ${caveat.className}  `}
        >
          PASTA
        </Link>
      </div>

      {/* LINKS */}

      <nav className="pl-4 flex gap-8 items-center flex-[2] h-full ">
        <Link href="/" className="transition-all ease-in-out  hover:scale-110  ">
          Home
        </Link>

        <Link
          href="/pasta"
          className="transition-all ease-in-out  hover:scale-110"
        >
          Pasta
        </Link>

        <Link
          href="/vegetarian"
          className="transition-all ease-in-out  hover:scale-110"
        >
          Vegetarian
        </Link>
      </nav>

     <div className=" flex-[2]">
     <SearchBar/>
     </div>
    </div>
  );
};

export default Header;
