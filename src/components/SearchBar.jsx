import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SearchBar = () => {
  return (
       
       <div className="flex items-center  text-yellow-300  text-2xl  ">

       <input     className="bg-transparent w-full max-w-60  p-4 pr-10  rounded-full focus:outline-none focus:ring-2 focus:ring-[#F5F5DC]  hover:scale-105 mr-2"
         type="text"
         placeholder="Search ..."
       />
       <Image src="/images/search.png" alt="" width={30} height={30} className=''/>
     </div>
  )
}

export default SearchBar