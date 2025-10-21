"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import FloatingImagesWithBackground from "./floatingImageWithBack";
import Banner from "./Banner";

const GoodestHome = () => {
  return (
    <main className=" text-gray-900 font-myFont">
      {/* 🌟 Hero Section */}
  <section className="px-4 sm:px-6 bg-turkis">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
    
    {/* 🌟 Functional Component (Replaces Image) */}
    <FloatingImagesWithBackground />

    {/* ✨ Text Content */}
    <div className="text-center md:text-left pb-8 flex-1 space-y-5">
      
      {/* Heading */}
      <motion.h1
        style={{ fontFamily: "'Heretical Smooth', sans-serif" }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug text-offwhite"
      >
        Branding & Handcrafted Illustrations for{" "}
        <span className="text-gelb">Unforgettable Impact</span>.
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-2xl text-base sm:text-lg text-offwhite mx-auto md:mx-0"
      >
        For impact founders, we translate profound purpose into clear, compelling, and deeply trusted visual brands.
        Your mission is vital — let&#39;s make it visible.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Button
          asChild
          className="mt-4 bg-turkis hover:bg-dunkelblau text-offwhite px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <a href="https://www.canva.com/design/DAGiD8C1vxc/24DhYHZqlb0C_iIxFVS47g/view?utm_content=DAGiD8C1vxc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hcdc65df1eb">See Our Portfolio</a>
        </Button>
      </motion.div>

    </div>
  </div>
</section>





      {/* 🌱 For The Goodest People */}
 <section className="relative px-6 bg-offwhite overflow-hidden">
      {/* 🌱 Decorative Accent Circles (optional, subtle background art) */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-rosa/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-24 w-72 h-72 bg-turkis/10 rounded-full blur-3xl" />

      {/* Content Wrapper */}
      <div className="relative max-w-6xl my-24 mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Text Section */}
        <div className="flex-1 text-left">
          <h2
            className="text-3xl md:text-5xl font-semibold mb-3 text-turkis"
            style={{ fontFamily: "'Heretical Smooth', sans-serif" }}
          >
            For The Goodest People.
          </h2>
          <h3
            className="text-lg md:text-2xl font-medium mb-6 text-dunkelblau"
            style={{ fontFamily: "'Heretical Smooth', sans-serif" }}
          >
            You&#39;re Building a Resilient Future. We&#39;ll Help You Lead It.
          </h3>

          <p className="max-w-2xl text-gray-700 leading-relaxed text-base mb-4">
            You create tangible, positive change in urban spaces, restoring ecological
            balance, or redesigning broken systems. Your work needs clarity, conviction,
            and connection. How do you articulate your profound impact in a way that
            truly resonates, earns trust, and inspires action?
          </p>

          <p className="max-w-2xl text-gray-700 leading-relaxed text-base">
            The Good Illustrator is a full-service studio dedicated to the good stuff —
            transforming your complex, critical work into a powerful, human-centered
            visual brand. With strategic insights and bespoke illustration, we craft
            brands that don&#39;t just look good — they build credibility and attract your
            ideal allies.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/images/another-planet.svg"
            alt="People Creating Impact Illustration"
            className="w-full max-w-md rounded-2xl drop-shadow-lg"
          />
        </div>
      </div>
    </section>

    <Banner/>

      {/* 🤝 Partner Logos */}
<section className="py-16 bg-[#F9FBFA] text-center">
  <h3 className="text-xl sm:text-2xl font-semibold mb-10 text-gray-800" style={{ fontFamily: "'Heretical Smooth', sans-serif" }}>
    Proud Member & Trusted Partner Of
  </h3>

  {/* 🌍 Trusted Partners */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 sm:gap-10 justify-items-center max-w-6xl mx-auto px-4">
    {[
      { name: "Dazzel", logo: "/images/logo-Proud-member-trusted-partner/dazzle.png" },
      { name: "GWO", logo: "/images/logo-Proud-member-trusted-partner/gwo.png" },
      { name: "Imma", logo: "/images/logo-Proud-member-trusted-partner/imma.png" },
      { name: "ODC", logo: "/images/logo-Proud-member-trusted-partner/odc.png" },
      { name: "Terra", logo: "/images/logo-Proud-member-trusted-partner/terra.png" },
      { name: "Tone", logo: "/images/logo-Proud-member-trusted-partner/tone def.png" },
    ].map((partner) => (
      <motion.div
        key={partner.name}
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
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
  </div>
</section>


{/* ✨ Beyond Pretty Section */}
<section className="bg-offwhite text-center py-20  relative overflow-hidden">
  
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

    {/* Center Heading */}
    <div className="relative max-w-3xl text-center z-10">
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
        <a href="#">Get in Touch</a>
      </Button>
    </div>
  </div>

  {/* Feature Cards */}
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
      <div
        key={index}
        className={`${card.bg} backdrop-blur-sm p-8 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#193643]/10 hover:-translate-y-1`}
      >
        <div className="flex flex-col items-center text-center">
          <img
            src={card.image}
            alt={card.title}
            className="w-24 md:w-32 mb-6"
          />
          <h4 
            className="text-xl md:text-2xl font-semibold text-dunkelblau mb-3"
            style={{ fontFamily: "'Heretical Smooth', sans-serif" }}
          >
            {card.title}
          </h4>
          <p className="text-base text-gray-700 leading-relaxed">{card.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>

<section className="relative w-full py-20 px-6 sm:px-8  overflow-hidden">
  {/* 🌿 Floating Decorative Icons */}
  <motion.img
    src="/images/scribbles-icons/beauty.svg"
    alt="decorative leaf"
    className="absolute top-0 left-0 w-20 md:w-32 opacity-60"
    animate={{ y: ["0px", "-10px", "0px"] }}
    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.img
    src="/images/scribbles-icons/hearts.svg"
    alt="decorative hearts"
    className="absolute bottom-0 right-0 w-24 md:w-40 opacity-60"
    animate={{ y: ["0px", "-10px", "0px"] }}
    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
  />

  {/* 📝 Heading */}
  <h2
    style={{ fontFamily: "'Heretical Smooth', sans-serif" }}
    className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-dunkelblau mb-12 text-center leading-snug max-w-5xl mx-auto relative z-10"
  >
    Beyond Pretty.{" "}
    <span className="text-orange">
      It&#39;s About Impact,
    </span>{" "}
    <span className="text-turkis">Integrity,</span> and{" "}
    <span className="text-gelb">Goodest Intention.</span>
  </h2>

  {/* ✨ Content Section */}
  <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12 relative z-10">
    {/* 🌍 Left Text Content */}
    <div className="flex-1 text-gray-800 text-base lg:text-lg leading-relaxed space-y-5 bg-white/60 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-md border border-turkis/30">
      <p className="text-dunkelblau text-lg md:text-xl font-medium">
        In a world where greenwashing is the norm, &quot;good&quot; isn&#39;t good enough. We operate with only
        <span className="text-turkis font-semibold"> goodest intentions</span>:
      </p>

      <ul className="space-y-3">
        {[
          "Honest, transparent, and ethically aligned with your world-changing mission.",
          "Deep care for the planet, your vision, and the people you serve.",
          "Building your brand's visuals with actions toward a resilient future.",
          "A partnership where your vision is truly co-created, not just executed.",
          "Clarity in process, communication, and impact.",
        ].map((text, i) => (
          <motion.li
            key={i}
            className="bg-gradient-to-r from-turkis/20 via-rosa/20 to-gelb/20 px-4 py-3 rounded-xl border border-turkis/20 text-dunkelblau font-medium shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            {text}
          </motion.li>
        ))}
      </ul>

      <p className="pt-4 text-dunkelblau/90 font-medium">
        This isn&#39;t just about design — it&#39;s about building a legacy of trust and tangible change through
        <span className="text-orange font-semibold"> impactful visual storytelling</span> and
        <span className="text-turkis font-semibold"> ethical practices.</span>
      </p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <Button
          asChild
          className="mt-8 bg-turkis hover:bg-[#246d68] text-offwhite font-semibold px-8 py-4 rounded-2xl text-lg shadow-md hover:shadow-lg transition-all"
        >
          <a href="#">This is a values match! Let&#39;s work together</a>
        </Button>
      </motion.div>
    </div>

    {/* 🌸 Floating Decorative Image */}
    <motion.div
      className="flex-1 flex justify-center lg:justify-end mt-10 lg:mt-0"
      animate={{ y: ["0px", "-12px", "0px"] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.img
        src="/images/scribbles-icons/smile.svg"
        alt="impact illustration"
        className="w-40 sm:w-56 md:w-72 xl:w-80 object-contain drop-shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </motion.div>
  </div>
</section>





{/* 🏆 Hall of Fame */}
<section className="relative py-24 px-6 text-center overflow-hidden bg-offwhite bg-gradient-to-br from-turkis/10 via-offwhite to-rosa/20">
  

  {/* 📝 Heading */}
  <h2
    style={{ fontFamily: "'Heretical Smooth', sans-serif" }}
    className="text-3xl sm:text-4xl md:text-5xl font-bold text-dunkelblau mb-10"
  >
    The <span className="text-turkis">Goodest Brands</span> Trust Us.
  </h2>

  <p className="text-lg md:text-xl mb-12 text-dunkelblau/80 max-w-3xl mx-auto leading-relaxed">
    Don&#39;t just take our word for it. Hear directly from the <span className="text-orange font-semibold">goodest brands</span> who are already making an unforgettable impact with their new visual identities.
  </p>

  {/* ✨ Testimonials */}
  <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-left relative z-10">
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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Quote */}
        <p className="italic text-dunkelblau/90 mb-6">&quot;{item.quote}&quot;</p>

        {/* Author Section */}
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
  </div>

  {/* 🌈 CTA Button */}
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <Button
      asChild
      className="mt-12 bg-turkis hover:bg-[#246d68] text-offwhite font-semibold px-8 py-4 rounded-2xl text-lg shadow-md hover:shadow-lg transition-all"
    >
      <a href="#">Become our next client</a>
    </Button>
  </motion.div>
</section>
    </main>
  );
};

export default GoodestHome;
