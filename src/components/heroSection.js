"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const floatingIcons = [
    { src: "/images/scribbles-icons/joyful.svg", top: "15%", left: "5%", delay: 0 },
    { src: "/images/floating planet.svg", top: "30%", right: "10%", delay: 0.4 },
    { src: "/images/hero/width_200.png", bottom: "10%", left: "20%", delay: 0.8 },
    { src: "/images/another-planet.svg", bottom: "15%", right: "15%", delay: 1.2 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 py-8 sm:px-10 overflow-hidden md:pt-0 pt-24 "
    >
      {/* 🖼️ Soft Light Overlay (Removed pink tones) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-turkis/10 via-offwhite/20 to-turkis/10 backdrop-blur-[2px]" />

      {/* 🌿 Floating Icons */}
      {floatingIcons.map((icon, i) => (
        <motion.img
          key={i}
          src={icon.src}
          alt="decorative icon"
          className="absolute w-10 sm:w-14 opacity-70"
          style={{ ...icon }}
          animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: icon.delay,
          }}
        />
      ))}

      {/* ✨ Left Content */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-dunkelblau leading-tight"
          style={{ fontFamily: "'Heretical Smooth', sans-serif" }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          I&#39;m <span className="text-turkis">Anna</span>, your visual
          storyteller for{" "}
          <br className="hidden sm:block" />
          <span className="text-turkis">urban sustainability</span>.
        </motion.h1>

        <motion.p
          className="text-dunkelblau/80 text-sm sm:text-base leading-relaxed max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          I would be honored to help you visualize your plans for a cleaner
          future — showcasing your innovations and spotlighting the remarkable
          impact you&#39;re making on this beautiful blue planet.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Link
            href="#"
            className="inline-block bg-turkis hover:bg-dunkelblau text-offwhite px-7 sm:px-8 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Learn More
          </Link>
        </motion.div>
      </div>

      {/* 🖼️ Right Side Image with Circular Border */}
      <motion.div
        className="relative z-10 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full border-4 border-turkis shadow-lg overflow-hidden mb-10 md:mb-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/images/hero/Anna.png"
          alt="Anna Portrait"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* 🌸 Decorative Gradient Blob (light blue only now) */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-turkis/30 to-offwhite/20 blur-3xl opacity-70"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: "-10%", right: "-10%" }}
      />
    </section>
  );
}
