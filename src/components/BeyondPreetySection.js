"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function BeyondPretty() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="bg-offwhite text-center py-20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-rosa/20 via-offwhite to-turkis/10 pointer-events-none"></div>

      {/* Top Decorative Images */}
      <div className="relative flex items-center justify-center mb-20">
        <img
          src="/images/scribbles-icons/hearts.svg"
          alt="Left Illustration"
          className="absolute top-0 left-0 md:top-1/2 transform -translate-y-1/2 w-28 md:w-40 opacity-80"
        />
        <img
          src="/images/scribbles-icons/hand-heart.svg"
          alt="Right Illustration"
          className="absolute bottom-0 right-0 md:top-1/2 transform -translate-y-1/2 w-28 md:w-40 opacity-80"
        />

        {/* ✨ Animated Heading Section */}
        <motion.div
          className="relative max-w-3xl text-center z-10"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-dunkelblau mb-6"
            style={{ fontFamily: "'Heretical Smooth', sans-serif" }}
          >
            Beyond Pretty
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
            Imagine if you could simply focus on the goodest work that needs to be done.
            Imagine attracting aligned clients as easily as breathing — because your brand
            is a perfect, magnetic reflection of your purpose.
          </p>
          <Button
            asChild
            className="bg-orange hover:bg-[#e66f00] text-offwhite px-10 py-4 rounded-2xl text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          >
            <a href="/contact">Get in Touch</a>
          </Button>
        </motion.div>
      </div>

      {/* ✨ Animated Feature Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
        {[
          {
            title: "Joyful Work",
            desc: "Your brand will repel energy-draining clients and call in the good-doers who value your expertise — allowing you to rediscover joy in your day-to-day business.",
            image: "/images/scribbles-icons/joyful.svg",
            bg: "bg-rosa/40",
          },
          {
            title: "Magnetic Client Attraction",
            desc: "Stop blending in. Your illustrated brand will be distinctive, memorable, and trusted — helping you clearly communicate your complex impact and attract the right allies.",
            image: "/images/scribbles-icons/magnetic.svg",
            bg: "bg-gelb/30",
          },
          {
            title: "Your Confidence Boost",
            desc: "No more hesitation when sharing your website or pitch deck. You'll feel aligned, confident, and ready to shine on any global stage — your brand as your strongest ally.",
            image: "/images/scribbles-icons/confidence.svg",
            bg: "bg-turkis/30",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            className={`${card.bg} backdrop-blur-sm p-8 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#193643]/10 hover:-translate-y-1`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
          >
            <div className="flex flex-col items-center text-center">
              <img src={card.image} alt={card.title} className="w-24 md:w-32 mb-6" />
              <h4
                className="text-xl md:text-2xl font-semibold text-dunkelblau mb-3"
                style={{ fontFamily: "'Heretical Smooth', sans-serif" }}
              >
                {card.title}
              </h4>
              <p className="text-base text-gray-700 leading-relaxed">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
