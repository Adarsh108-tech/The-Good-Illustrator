"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import GoodestHome from "@/components/GoodestHome";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <main className="bg-gray-50   font-myFont text-turkis text-3xl">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Company Logo */}
        <div className="flex items-center">
          <Image
            src="/Logo-for-Light.png" // Path to your logo
            alt="The Good Illustrator Logo"
            width={128}
            height={128}
            className="mr-3"
          />
        </div>

      </div>
    </nav>

      {/* Hero Section */}
    <section
  id="home"
  className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-4 sm:px-6 bg-gradient-to-b md:pt-0 pt-24 from-offwhite via-white to-offwhite overflow-hidden"
>
  {/* Left Text Content */}
  <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-4">
    <motion.h1
      className="text-3xl sm:text-4xl md:text-5xl font-bold text-dunkelblau leading-tight"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      I&#39;m <span className="text-turkis">Anna</span>, your visual
      storyteller for <br className="hidden sm:block" />
      <span className="text-rosa">urban sustainability</span>.
    </motion.h1>

    <motion.p
      className="text-dunkelblau/80 text-sm sm:text-base leading-relaxed max-w-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      I would be honored to help you visualize your plans for a cleaner
      future — showcasing your innovations and spotlighting the
      remarkable impact you&#39;re making on this beautiful blue planet.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
    >
      <Link
        href="#"
        className="inline-block bg-turkis hover:bg-dunkelblau text-offwhite px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium shadow-md hover:shadow-lg transition-all duration-300"
      >
        Learn More
      </Link>
    </motion.div>
  </div>

  {/* Right Image / Floating Illustration */}
  <motion.div
    initial={{ opacity: 0, scale: 0.95, y: 10 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="relative w-full md:w-1/2 flex justify-center"
  >
    <div className="relative w-72 sm:w-80 h-72 sm:h-80 rounded-[2rem] bg-gradient-to-tr from-turkis/10 to-offwhite shadow-lg overflow-hidden flex items-end justify-center pb-2">
      
      {/* 🌟 Top-Left Decorative Image */}
      <img
        src="/images/scribbles-icons/amaze.svg"
        alt="Decoration Top Left"
        className="absolute top-3 left-3 w-12 sm:w-14 opacity-90 rotate-[-10deg]"
      />

      {/* 🌟 Bottom-Right Decorative Image */}
      <img
        src="/images/scribbles-icons/amaze2.svg"
        alt="Decoration Bottom Right"
        className="absolute bottom-3 right-3 z-10 w-12 sm:w-14 opacity-90 rotate-[180deg]"
      />

      {/* 🖼️ Main Image */}
      <img
        src="/images/hero/Anna.png"
        alt="Anna Illustration"
        className="object-contain drop-shadow-2xl transition-transform duration-700 ease-out scale-105 hover:scale-100"
      />
    </div>
  </motion.div>
</section>




     
      <GoodestHome/>
      {/* Footer */}
      <footer className="bg-emerald-700 text-white text-center py-6 text-sm sm:text-base">
        <p>&copy; {new Date().getFullYear()} The Good Illustrator. All rights reserved.</p>
      </footer>
    </main>
  );
}
