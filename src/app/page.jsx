import Product from "@/components/Product";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
    {/* Video Background */}
    <div className="relative h-screen flex justify-center items-end">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-screen object-cover z-[-100]"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </div>

     <div className="relative z-10">
        <Product />
      </div>
     
    </div>
  );
}
