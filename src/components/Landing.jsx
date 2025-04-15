import React from "react";
import optimas from "../assets/optimas.jpg"
import hello from "../assets/uni.jpeg"
import Navbar from "./Navbar";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen text-white">
      <img
        src={hello}
        alt="Full Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-blue-500/60 z-0" />
      <div className="relative z-10">

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center px-6 py-24 gap-8">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">Fastest Delivery</h1>
          <p className="text-xl md:text-2xl font-light">Providing Highest Quality Services</p>
          <p className="text-lg font-semibold">Available <span className="text-yellow-300">24 Hours a day</span></p>
          <button className="bg-white text-black px-6 py-3 text-lg rounded-md hover:bg-gray-300 transition duration-300">
            Contact Us
          </button>
        </section>
      </div>
    </div>
  );
}