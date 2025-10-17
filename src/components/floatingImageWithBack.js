"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FloatingImagesWithBackground() {
  // Array of images with responsive sizing
  const images = [
    { src: "/images/hero/babies.png", top: "10%", left: "5%", width: "12vw" },
    { src: "/images/hero/bag.png", top: "20%", left: "70%", width: "10vw" },
    { src: "/images/hero/earthLove.png", top: "60%", left: "15%", width: "11vw" },
    { src: "/images/hero/hello.png", top: "75%", left: "60%", width: "20vw" },
    { src: "/images/hero/laptop.png", top: "40%", left: "40%", width: "10vw" },
    { src: "/images/hero/mobile.png", top: "15%", left: "50%", width: "9vw" },
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
    <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero/Imgbackground.png"
        alt="Background"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Floating Images */}
      {images.map((img, index) => (
        <motion.div
          key={index}
          className="absolute z-10"
          style={{
            top: img.top,
            left: img.left,
            width: img.width,
            minWidth: "60px",
            maxWidth: "200px",
          }}
          animate={floatAnimation}
        >
          <Image
            src={img.src}
            alt={`floating-${index}`}
            width={500}
            height={500}
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
        </motion.div>
      ))}

      {/* Gradient Overlay for visibility on small screens */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/10 to-white/40 md:hidden"></div>
    </div>
  );
}
