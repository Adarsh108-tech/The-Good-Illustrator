"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import GoodestHome from "@/components/GoodestHome";
import Footer from "@/components/footer";

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
      {/* Hero Section */}
<section
  id="home"
  className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-4 py-4 sm:px-6 bg-offwhite overflow-hidden md:pt-0 pt-24"
>
  {/* Left Text Content */}
  <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-5">
    <motion.h1
      className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A2540] leading-tight"
      style={{ fontFamily: "'Heretical Smooth', sans-serif" }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      I&#39;m <span className="text-[#00BFA6]">Anna</span>, your visual
      storyteller for <br className="hidden sm:block" />
      <span className="text-[#E57373]">urban sustainability</span>.
    </motion.h1>

    <motion.p
      className="text-[#2C3E50]/80 text-sm sm:text-base leading-relaxed max-w-md"
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
        className="inline-block bg-[#00BFA6] hover:bg-[#0A2540] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-semibold shadow-md hover:shadow-xl transition-all duration-300"
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
    <div className="relative w-72 sm:w-80 h-72 sm:h-80 rounded-[2rem] bg-gradient-to-tr from-[#00BFA6]/10 to-white shadow-lg overflow-hidden flex items-end justify-center pb-2">
      
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
      <Footer/>
    </main>
  );
}
