"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FloatingImagesWithBackground() {
  // Array of images and their random positions
  const images = [
    { src: "/images/hero/babies.png", top: "10%", left: "5%", width: 120, height: 120 },
    { src: "/images/hero/bag.png", top: "20%", left: "70%", width: 120, height: 120 },
    { src: "/images/hero/earthLove.png", top: "60%", left: "15%", width: 120, height: 120 },
    { src: "/images/hero/hello.png", top: "75%", left: "60%", width: 250, height: 250 },
    { src: "/images/hero/laptop.png", top: "40%", left: "40%", width: 120, height: 120 },
    { src: "/images/hero/mobile.png", top: "15%", left: "50%", width: 120, height: 120 },
  ];

  // Floating animation
  const floatAnimation = {
    y: ["0px", "-20px", "0px"], // move up and down
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      repeatType: "loop",
    },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero/Imgbackground.png" // your full-height background image
        alt="Background"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Floating Images */}
      {images.map((img, index) => (
        <motion.div
          key={index}
          style={{ position: "absolute", top: img.top, left: img.left, zIndex: 10 }}
          animate={floatAnimation}
        >
          <Image
            src={img.src}
            width={img.width}
            height={img.height}
            alt={`floating-${index}`}
          />
        </motion.div>
      ))}
    </div>
  );
}
