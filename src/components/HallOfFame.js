"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HallOfFameSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative py-24 px-6 text-center overflow-hidden bg-offwhite bg-gradient-to-br from-turkis/10 via-offwhite to-rosa/20">
      {/* 📝 Animated Heading */}
      <motion.h2
        style={{ fontFamily: "'Heretical Smooth', sans-serif" }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-dunkelblau mb-10"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={0.1}
        viewport={{ once: true, amount: 0.3 }}
      >
        The <span className="text-turkis">Goodest Brands</span> Trust Us.
      </motion.h2>

      {/* 🪄 Subheading */}
      <motion.p
        className="text-lg md:text-xl mb-12 text-dunkelblau/80 max-w-3xl mx-auto leading-relaxed"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={0.3}
        viewport={{ once: true }}
      >
        Don&#39;t just take our word for it. Hear directly from the{" "}
        <span className="text-orange font-semibold">goodest brands</span> who are
        already making an unforgettable impact with their new visual identities.
      </motion.p>

      {/* ✨ Testimonials with stagger animation */}
      <motion.div
        className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-left relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {[
          {
            quote:
              "She brings a rare mix of creativity, empathy, and strategy to every project. If you're building a brand that matters, Anna is the partner you want by your side.",
            author: "Anurag Maloo",
            role: "Voice of Glacier Foundation",
            image: "/images/testimonials/anurag.webp",
          },
          {
            quote:
              "Anna has been an absolute joy to work with. We partnered with Anna to develop the cover and interior artwork for our upcoming book, and I have been overjoyed with the process and results.",
            author: "Cassie Leonard",
            role: "Best Selling Author",
            image: "/images/testimonials/cassie.webp",
          },
          {
            quote:
              "Every time I visit my own website, her illustrations make me smile, and remind me of what's at stake, why I do my job. They seem to do the same for my clients: Since we launched the new site, I had to set up a waitlist.",
            author: "Nicole König",
            role: "Ethical Marketer",
            image: "/images/testimonials/nicol.webp",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-gradient-to-br from-rosa/20 via-offwhite/60 to-turkis/15 p-8 rounded-3xl shadow-sm border border-turkis/20 text-lg backdrop-blur-sm"
            variants={fadeUp}
            custom={i * 0.2}
          >
            <p className="italic text-dunkelblau/90 mb-6">
              &quot;{item.quote}&quot;
            </p>

            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.author}
                className="w-12 h-12 rounded-full object-cover border-2 border-turkis shadow-sm"
              />
              <div>
                <p className="font-semibold text-turkis">{item.author}</p>
                <p className="text-sm text-dunkelblau/70">{item.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* 🌈 CTA Button */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={0.8}
        viewport={{ once: true }}
      >
        <Button
          asChild
          className="mt-12 bg-turkis hover:bg-[#246d68] text-offwhite font-semibold px-8 py-4 rounded-2xl text-lg shadow-md hover:shadow-lg transition-all"
        >
          <a href="/contact">Become our next client</a>
        </Button>
      </motion.div>
    </section>
  );
}
