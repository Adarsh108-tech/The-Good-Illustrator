import { motion } from "framer-motion";

export default function TrustedPartnersSection() {
  // Parent container animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // 👈 Controls horizontal reveal timing
      },
    },
  };

  // Each logo’s animation
  const logoVariants = {
    hidden: { opacity: 0, y: 40, x: -20 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const partners = [
    { name: "Dazzel", logo: "/images/logo-Proud-member-trusted-partner/dazzle.png" },
    { name: "GWO", logo: "/images/logo-Proud-member-trusted-partner/gwo.png" },
    { name: "Imma", logo: "/images/logo-Proud-member-trusted-partner/imma.png" },
    { name: "ODC", logo: "/images/logo-Proud-member-trusted-partner/odc.png" },
    { name: "Terra", logo: "/images/logo-Proud-member-trusted-partner/terra.png" },
    { name: "Tone", logo: "/images/logo-Proud-member-trusted-partner/tone def.png" },
  ];

  return (
    <section className="py-16 bg-[#F9FBFA] text-center overflow-hidden">
      {/* 🌟 Heading */}
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-xl sm:text-2xl font-semibold mb-10 text-gray-800"
        style={{ fontFamily: "'Heretical Smooth', sans-serif" }}
      >
        Proud Member & Trusted Partner Of
      </motion.h3>

      {/* 🌍 Trusted Partners */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 sm:gap-10 justify-items-center max-w-6xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {partners.map((partner) => (
          <motion.div
            key={partner.name}
            variants={logoVariants}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="flex flex-col items-center justify-center cursor-pointer w-full"
          >
            {/* 🌀 Floating hover effect */}
            <motion.div
              whileHover={{
                y: [0, -6, 0],
                transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
              }}
              className="w-32 sm:w-36 md:w-40 h-16 sm:h-20 md:h-24 flex items-center justify-center bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-[80%] max-h-[80%] object-contain"
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
