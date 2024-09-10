import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
   <div className="relative h-screen ">
    <Header />
    <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-[80vh] object-fill z-[-1]">
          <source  src="/bg.video.mp4" type="video/mp4" />
        </video>
  
   </div>
  );
}
