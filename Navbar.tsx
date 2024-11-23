import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-pink-200 m-4 flex justify-center items-center rounded-full text-purple-800 py-3 px-6 lg:mx-80 shadow-md">
      <div className="space-x-6">
        <Link
          className="hover:underline hover:text-purple-500 transition duration-300 font-medium"
          href="/"
        >
          Home
        </Link>
        <Link
          className="hover:underline hover:text-purple-500 transition duration-300 font-medium"
          href="/fetchposts"
        >
          Posts
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
