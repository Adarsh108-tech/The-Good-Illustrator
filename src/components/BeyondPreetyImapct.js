"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function BeyondPrettyImpact() {
  // Reusable variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 px-3 sm:px-6 md:px-8 overflow-hidden">
      {/* 🌿 Floating Decorative Icons */}
      <motion.img
        src="/images/scribbles-icons/beauty.svg"
        alt="decorative leaf"
        className="absolute top-3 left-1 w-10 xs:w-12 sm:w-16 md:w-24 lg:w-28 opacity-60"
        animate={{ y: ["0px", "-10px", "0px"] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src="/images/scribbles-icons/hearts.svg"
        alt="decorative hearts"
        className="absolute bottom-1 right-1 w-12 xs:w-16 sm:w-24 md:w-32 lg:w-40 opacity-60"
        animate={{ y: ["0px", "-10px", "0px"] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 📝 Animated Heading */}
      <motion.h2
        style={{ fontFamily: "'Heretical Smooth', sans-serif" }}
        className="text-xl xs:text-2xl sm:text-3xl md:text-5xl xl:text-6xl font-bold text-dunkelblau mb-8 sm:mb-10 md:mb-12 text-center leading-snug max-w-[95%] sm:max-w-4xl mx-auto relative z-10 px-2"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Beyond Pretty.{" "}
        <span className="text-orange">It&#39;s About Impact,</span>{" "}
        <span className="text-turkis">Integrity,</span> and{" "}
        <span className="text-gelb">Goodest Intention.</span>
      </motion.h2>

      {/* ✨ Content Section */}
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 md:gap-12 relative z-10">
        {/* 🌍 Left Text Content */}
        <motion.div
          className="flex-1 text-gray-800 text-[14px] xs:text-sm sm:text-base md:text-lg leading-relaxed space-y-4 sm:space-y-5 bg-white/80 backdrop-blur-md p-4 xs:p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-md border border-turkis/30 w-full"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-dunkelblau text-sm sm:text-lg md:text-xl font-medium">
            In a world where greenwashing is the norm, &quot;good&quot; isn&#39;t good enough. We operate with only
            <span className="text-turkis font-semibold"> goodest intentions</span>:
          </p>

          <ul className="space-y-2 sm:space-y-3">
            {[
              "Honest, transparent, and ethically aligned with your world-changing mission.",
              "Deep care for the planet, your vision, and the people you serve.",
              "Building your brand's visuals with actions toward a resilient future.",
              "A partnership where your vision is truly co-created, not just executed.",
              "Clarity in process, communication, and impact.",
            ].map((text, i) => (
              <motion.li
                key={i}
                className="bg-gradient-to-r from-turkis/20 via-rosa/20 to-gelb/20 px-3 py-2 sm:px-4 sm:py-3 rounded-xl border border-turkis/20 text-dunkelblau font-medium shadow-sm text-[13px] xs:text-sm sm:text-base"
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                custom={i * 0.2}
                viewport={{ once: true }}
              >
                {text}
              </motion.li>
            ))}
          </ul>

          <motion.p
            className="pt-2 sm:pt-4 text-dunkelblau/90 font-medium text-sm sm:text-base md:text-lg"
            variants={fadeUp}
            custom={0.4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            This isn&#39;t just about design — it&#39;s about building a legacy of trust and tangible change through
            <span className="text-orange font-semibold"> impactful visual storytelling</span> and
            <span className="text-turkis font-semibold"> ethical practices.</span>
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={0.6}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Button
              asChild
              className="mt-6 sm:mt-8 bg-turkis hover:bg-[#246d68] text-offwhite font-semibold px-5 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-xs md:text-lg shadow-md hover:shadow-lg transition-all text-center w-full"
            >
              <a href="#">This is a values match! Let&#39;s work together</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* 🌸 Right Image with Scroll Animation */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end mt-6 sm:mt-8 lg:mt-0 w-full"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src="/images/scribbles-icons/smile.svg"
            alt="impact illustration"
            className="w-28 xs:w-36 sm:w-48 md:w-64 xl:w-80 object-contain drop-shadow-lg"
            animate={{ y: ["0px", "-12px", "0px"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
