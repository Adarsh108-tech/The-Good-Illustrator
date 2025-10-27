"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import GoodestHome from "@/components/GoodestHome";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-gray-50   font-myFont text-turkis text-3xl">
      {/* Navbar */}
      <Navbar/>

      {/* Hero Section */}
      {/* Hero Section */}
     
    <HeroSection/>
      <GoodestHome/>
      {/* Footer */}
      <Footer/>
    </main>
  );
}
