import React from "react";
import Image from "next/image";

const Herosection = () => {
  return (
    <div className="min-h-screen max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-purple-600 to-pink-500 px-6 lg:px-16 py-12">
      <div className="hero-content flex flex-col items-start justify-center">
        <h1 className="text-5xl lg:text-6xl font-extrabold  mb-6">
          Unlock Your Tech Insights
        </h1>
        <p className="text-lg lg:text-2xl text-gray-200 mb-8">
          Stay ahead of the curve with the latest news, trends, and innovations
          in technology.
        </p>
        <a
          href="/fetchposts"
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          Explore Now
        </a>
      </div>
      <Image
        src="/book-1.jpeg"
        alt="Hero Image"
        width={500}
        height={300}
        className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
      />
    </div>
  );
};

export default Herosection;
