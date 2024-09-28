import Link from "next/link.js";
import { data } from "../data.js";
import Image from "next/image";
const Product = () => {
  return (
    <div className="container mx-auto flex flex-wrap text-red-500 ">
      {data.map((item) => (
        <Link
          className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-fuchsia-50"
          href={`/product/${item.id}`}
          key={item.id}
        >
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="" fill className="object-cover" />
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className="flex items-center justify-start font-bold">
            <h1 className="text-[12px] lg:text-xl uppercase p-2 mr-auto ">{item.title}</h1>
            <div className="flex space-x-2">
              <h2 className="text-3xl">${item.price}</h2>
              <button className="text-xs md:text-[16px] lg:text-[20px] uppercase bg-red-500 text-white p-2 rounded-md ">
                Add to Cart
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Product;
