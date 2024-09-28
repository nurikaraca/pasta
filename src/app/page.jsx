import Product from "@/components/Product";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import { FaRegSmileBeam } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative">
    {/* Video Background */}
    <div className="relative h-[300px]  lg:h-screen flex justify-center items-end">
      <div className="absolute flex items-center justify-center gap-2 bottom-10 ">
          <FaRegSmileBeam className="text-black text-2xl" />
         <h2 className="text-slate-700 text-2xl">Lezzetli ve  pahalı ...</h2>
      </div>
      <video
        autoPlay
        loop
        muted
        className="hidden lg:block absolute top-0 left-0 w-full h-screen object-cover z-[-100]"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </div>

     <div className="relative z-10 ">
        <Product />
      </div>
     
    </div>
  );
}
