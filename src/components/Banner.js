import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Banner() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // starts when section enters viewport, ends when leaves
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]); // parallax 100px total

  return (
    <section ref={ref} className="relative w-full h-72 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/images/banner.png"
          alt="Promotional Banner"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>
    </section>
  );
}
