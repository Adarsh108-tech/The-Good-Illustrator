"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import FloatingImagesWithBackground from "@/components/floatingImageWithBack";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-900">
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

        {/* Navigation Links */}
        <div className="space-x-6 md:text-xl text-sm">
          <Link href="#about" className="hover:text-emerald-600 transition">
            About
          </Link>
          <Link href="#mission" className="hover:text-emerald-600 transition">
            Mission
          </Link>
          <Link href="#contact" className="hover:text-emerald-600 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center px-4 sm:px-6 pt-28 md:pt-0 bg-gradient-to-b from-emerald-50 to-white"
      >
        {/* Floating Images */}
        <div className="w-full md:w-1/2 h-80 sm:h-96 md:h-full relative mb-10 md:mb-0">
          <FloatingImagesWithBackground />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left px-2 sm:px-6">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-snug"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            I&#39;m Anna, the visual storyteller for <br />
            visionaries building urban sustainability.
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-gray-600 mb-8 max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            I would be honored to help you visualize your plans for a clean
            future, showcase your innovations, and spotlight the remarkable
            impact you are making on this beautiful blue planet!
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="#about"
              className="bg-emerald-600 text-white px-5 sm:px-6 py-3 rounded-2xl shadow-md hover:bg-emerald-700 transition text-sm sm:text-base"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-24 px-4 sm:px-6 bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto bg-[#CCDCE1] p-6 sm:p-10 rounded-xl flex flex-col md:flex-row items-center md:items-end gap-10">
          {/* Left Image */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <img
              src="/images/hero/earthLove.png"
              alt="Anna Illustration"
              className="rounded-lg shadow-lg object-cover w-64 sm:w-80 md:w-full h-auto"
            />
          </div>

          {/* About Content */}
          <div className="w-full md:w-1/3 text-left">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-emerald-700">
              About Me
            </h2>
            <ul className="text-gray-700 text-base sm:text-lg space-y-4 leading-relaxed list-disc list-inside">
              <li>
                <strong>In Vienna, Austria till 2019:</strong>
              </li>
              <ul className="list-inside list-disc ml-5 space-y-1">
                <li>Illustrator & Motion Graphics Designer @ The Gentlemen Creatives</li>
                <li>Digital Illustration Course @ Illuskills</li>
                <li>Anatomy for Artists Course @ Illuskills</li>
              </ul>

              <li>
                <strong>In Milan, Italy from 2019:</strong>
              </li>
              <ul className="list-inside list-disc ml-5 space-y-1">
                <li>Bachelor in 3D Design @ NABA</li>
                <li>Founded “The Good Illustrator”</li>
              </ul>

              <li>
                <strong>My Skills:</strong>
              </li>
              <ul className="list-inside list-disc ml-5 space-y-1">
                <li>Visual Wizardry: Turning complex ideas into visual masterpieces</li>
                <li>Infographic Sorcery: Making data sexy since 2015</li>
                <li>Doodle Diplomacy: Bridging gaps between complexity and clarity</li>
                <li>Multilingual: Speaking in Pictures and German, English, and Italian</li>
              </ul>

              <li>
                <strong>Other:</strong> cooking Knödel, Strudel, Carbonara and Pizza,
                wicked knowledge about sustainability, basic mountaineering, hugging
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <img
              src="/images/hero/Anna.png"
              alt="Anna Illustration 2"
              className="rounded-lg shadow-lg object-cover w-64 sm:w-80 md:w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        id="mission"
        className="py-20 sm:py-24 px-4 sm:px-6 bg-emerald-50 scroll-mt-24 text-center"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-emerald-700">
            My Work
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            This section will showcase work experience and selected projects.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-24 px-4 sm:px-6 bg-white scroll-mt-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-emerald-700">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-6">
            Have ideas, want to collaborate, or wish to support? We&#39;d love to hear from you!
          </p>
          <a
            href="mailto:ruralreach@gmail.com"
            className="bg-emerald-600 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-emerald-700 transition text-sm sm:text-base"
          >
            Email Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-700 text-white text-center py-6 text-sm sm:text-base">
        <p>&copy; {new Date().getFullYear()} The Good Illustrator. All rights reserved.</p>
      </footer>
    </main>
  );
}
