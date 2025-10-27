"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import GoodestHome from "@/components/GoodestHome";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";

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
     
    <HeroSection/>






     
      <GoodestHome/>
      {/* Footer */}
      <Footer/>
    </main>
  );
}
