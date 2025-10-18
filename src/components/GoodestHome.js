"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import FloatingImagesWithBackground from "./floatingImageWithBack";
import Banner from "./Banner";

const GoodestHome = () => {
  return (
    <main className="font-['Lexend'] text-gray-900 font-myFont">
      {/* 🌟 Hero Section */}
  <section className="px-4 sm:px-6 bg-turkis">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
    
    {/* 🌟 Functional Component (Replaces Image) */}
    <FloatingImagesWithBackground />

    {/* ✨ Text Content */}
    <div className="text-center md:text-left pb-8 flex-1 space-y-5">
      
      {/* Heading */}
      <motion.h1
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
          <a href="#">See Our Portfolio</a>
        </Button>
      </motion.div>

    </div>
  </div>
</section>





      {/* 🌱 For The Goodest People */}
<section className="relative py-24 px-6 bg-offwhite overflow-hidden">
  {/* Decorative Images */}
  <img
    src="/images/scribbles-icons/confidence.svg"
    alt="Decorative Leaf Top Left"
    className="absolute top-0 left-0 w-32 md:w-48 opacity-60 pointer-events-none"
  />
  <img
    src="/images/scribbles-icons/arrow1.svg"
    alt="Decorative Leaf Bottom Right"
    className="absolute bottom-0 right-0 w-36 md:w-56 opacity-60 pointer-events-none"
  />

  {/* Content Wrapper */}
  <div className="max-w-6xl my-28 mx-auto flex flex-col md:flex-row items-start gap-12">
    {/* Text Section */}
    <div className="flex-1 text-left">
      <h2 className="text-2xl md:text-4xl font-semibold mb-3 text-turkis">
        For The Goodest People.
      </h2>
      <h3 className="text-lg md:text-xl font-medium mb-6 text-gray-800">
        You&#39;re Building a Resilient Future. We&#39;ll Help You Lead It.
      </h3>
      <p className="max-w-2xl text-gray-600 leading-relaxed text-base mb-4">
        You create tangible, positive change in urban spaces, restoring ecological balance, 
        or redesigning broken systems. Your work needs clarity, conviction, and connection. 
        How do you articulate your profound impact in a way that truly resonates, earns trust, 
        and inspires action?
      </p>
      <p className="max-w-2xl text-gray-600 leading-relaxed text-base">
        The Good Illustrator is a full-service studio dedicated to the good stuff — transforming 
        your complex, critical work into a powerful, human-centered visual brand. With strategic 
        insights and bespoke illustration, we craft brands that don&#39;t just look good — they build 
        credibility and attract your ideal allies.
      </p>

      <Button
        asChild
        className="mt-8 bg-rosa hover:bg-[#e6a4bb] text-gray-900 font-semibold px-8 py-3 rounded-2xl text-base transition-all duration-300 shadow-sm hover:shadow-md"
      >
        <a href="#">Let&#39;s Get You Seen!</a>
      </Button>
    </div>

    {/* Right Image */}
    <div className="flex-1 flex justify-center md:justify-end">
      <img
        src="/images/another-planet.svg"
        alt="People Creating Impact Illustration"
        className="w-full max-w-md rounded-2xl "
      />
    </div>
  </div>
</section>


    <Banner/>

      {/* 🤝 Partner Logos */}
<section className="py-16 bg-[#F9FBFA] text-center">
  <h3 className="text-xl font-semibold mb-10 text-gray-800">
    Proud Member & Trusted Partner Of
  </h3>

  {/* 🌍 Trusted Partners */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 justify-items-center">
    {[
      { name: "Google for Startups", logo: "/images/google.png" },
      { name: "Adobe", logo: "/images/adobe.png" },
      { name: "Figma", logo: "/images/figma.png" },
      { name: "Notion", logo: "/images/notion.png" },
      { name: "AWS Activate", logo: "/images/aws.png" },
      { name: "OpenAI", logo: "/images/openai.png" },
    ].map((partner) => (
      <motion.div
        key={partner.name}
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="flex flex-col items-center justify-center cursor-pointer"
      >
        {/* 🌀 Float only on hover */}
        <motion.div
          whileHover={{
            y: [0, -6, 0],
            transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="w-28 h-12 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <img
            src={partner.logo}
            alt={partner.name}
            className="w-20 h-auto object-contain"
          />
        </motion.div>
        <span className="mt-3 text-sm text-gray-600 font-medium">
          {partner.name}
        </span>
      </motion.div>
    ))}
  </div>
</section>



      {/* ✨ Beyond Pretty Section */}
      <section className=" py-24 px-6  bg-white text-center">
          {/* Left Image */}

       <div className="relative flex items-center justify-center py-20 px-6">
  {/* Left Image */}
  <img 
    src="/images/scribbles-icons/hearts.svg" 
    alt="Left Illustration" 
    className="absolute top-0 left-0 md:left-0 md:top-1/2 transform -translate-y-1/2 w-32 md:w-48"
  />

  {/* Right Image */}
  <img 
    src="/images/scribbles-icons/hand-heart.svg" 
    alt="Right Illustration" 
    className="absolute md:right-0 -bottom-10 right-0 md:top-1/2 transform -translate-y-1/2 w-32 md:w-48"
  />

  {/* Center Content */}
  <div className="max-w-3xl text-center">
    <h2 className="text-4xl font-bold text-turkis mb-10">Beyond “pretty”</h2>
    <p className="text-lg text-gray-600 mb-16">
      Imagine if you could simply focus on the goodest work that needs to be done. 
      Imagine attracting aligned clients as easily as breathing because your brand is a perfect, magnetic reflection of your purpose.
    </p>
    <Button asChild className="bg-turkis hover:bg-[#246d68] text-white px-8 py-4 rounded-2xl text-lg mb-16">
      <a href="#">Get in touch</a>
    </Button>
  </div>
</div>


        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-left">
  {[
    {
      title: "Joyful Work",
      desc: "Your brand will repel energy-draining clients and call in the good-doers who value your expertise, allowing you to find a deeper joy in your day-to-day business operations.",
      image: "/images/scribbles-icons/joyful.svg",
    },
    {
      title: "Magnetic Client Attraction",
      desc: "Stop blending in. Your illustrated climate brand will be distinctive, memorable, and trusted, allowing you to clearly communicate your complex impact and attract the right opportunities.",
      image: "/images/scribbles-icons/magnetic.svg",
    },
    {
      title: "Your Confidence Boost",
      desc: "No more feeling the cringe when you send over your website or a deck. You'll feel professional, aligned, and ready to stand on any global stage, knowing your brand is your most powerful asset.",
      image: "/images/scribbles-icons/confidence.svg",
    },
  ].map((card, index) => (
    <div
      key={index}
      className={`bg-[#F3F7F5] p-6 md:p-8 rounded-2xl shadow-sm flex flex-col md:flex-col items-start md:items-center ${
        index % 2 === 1 ? "md:flex-col-reverse" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`w-full md:w-auto mb-4 md:mb-6 flex-shrink-0 ${
          index % 2 === 1 ? "md:order-1" : "md:order-0"
        }`}
      >
        <img
          src={card.image}
          alt={card.title}
          className="w-full md:w-32 lg:w-40 object-contain"
        />
      </div>

      {/* Text */}
      <div className="flex-1 text-left">
        <h4 className="text-xl md:text-xl font-semibold text-turkis mb-3">{card.title}</h4>
        <p className="text-sm md:text-lg text-gray-700">{card.desc}</p>
      </div>
    </div>
  ))}
</div>

      </section>
<section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#EAF3F0] overflow-hidden">
      <img
        src="/images/scribbles-icons/beauty.svg"
        alt="decorative leaf"
        className="absolute top-0 left-0 w-16 sm:w-24 md:w-32 lg:w-40 xl:w-48 opacity-70 pointer-events-none select-none"
      />
      <img
        src="/images/scribbles-icons/hearts.svg"
        alt="decorative hearts"
        className="absolute bottom-0 right-0 w-16 sm:w-24 md:w-32 lg:w-40 xl:w-48 opacity-70 pointer-events-none select-none"
      />

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-turkis mb-8 sm:mb-10 md:mb-12 relative z-10 text-center px-4 text-balance">
        Beyond Pretty. It&#39;s About Impact, Integrity, and the Goodest Intention.
      </h2>

      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-8 sm:gap-10 md:gap-12 lg:gap-16 relative z-10 px-4 sm:px-6 lg:px-0">
        {/* Left Text Content */}
        <div className="flex-1 w-full text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-4">
          <p className="text-base sm:text-lg">
            In a world where greenwashing is the norm, &quot;good&quot; isn&#39;t good enough. We operate with only goodest
            intentions:
          </p>

          <ul className="space-y-2 sm:space-y-3">
            <li className="bg-turkis/20 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base">
              Honest, transparent, and ethically aligned with your world-changing mission.
            </li>
            <li className="bg-turkis/20 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base">
              Deep care for the planet, your vision, and the people you serve.
            </li>
            <li className="bg-turkis/20 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base">
              Building your brand&#39;s visuals with actions towards a resilient future.
            </li>
            <li className="bg-turkis/20 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base">
              A partnership where your vision is truly co-created, not just executed.
            </li>
            <li className="bg-turkis/20 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base">
              Clarity in process, communication, and impact.
            </li>
          </ul>

          <p className="text-base sm:text-lg pt-2">
            This isn&#39;t just about design; it&#39;s about building a legacy of trust and tangible change through impactful
            visual storytelling and ethical practices.
          </p>

          <Button
            asChild
            className="mt-6 sm:mt-8 bg-rosa hover:bg-[#e6a4bb] text-gray-900 font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-2xl text-sm sm:text-base w-full sm:w-auto"
          >
            <a href="#">This is a values match! Let&#39;s work together</a>
          </Button>
        </div>

        {/* Right Decorative Image */}
        <div className="flex-1 w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
          <img
            src="/images/scribbles-icons/smile.svg"
            alt="impact illustration"
            className="w-40 sm:w-56 md:w-64 lg:w-72 xl:w-80 object-contain"
          />
        </div>
      </div>
    </section>




      {/* 🏆 Hall of Fame */}
      <section className="py-24 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-turkis mb-10">The Goodest Brands Trust Us.</h2>
        <p className="text-xl mb-10 text-gray-600">Don&#39;t just take our word for it. Hear directly from the goodest brands who are already making an unforgettable impact with their new visual identities.</p>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-left">
          <div className="bg-[#F3F7F5] p-8 rounded-2xl shadow-sm text-lg">
            <p className="italic">&quot;She brings a rare mix of creativity, empathy, and strategy to every project. If you&#39;re building a brand that matters, Anna is the partner you want by your side.&quot;</p>
            <p className="mt-4 font-semibold">— Anurag Maloo, Voice of Glacier Foundation</p>
          </div>
          <div className="bg-[#F3F7F5] p-8 rounded-2xl shadow-sm text-lg">
            <p className="italic">&quot;Anna has been an absolute joy to work with. We partnered with Anna to develop the cover and interior artwork for our upcoming book, and I have been overjoyed with the process and results.&quot;</p>
            <p className="mt-4 font-semibold">— Cassie Leonard, Best Selling Author</p>
          </div>
          <div className="bg-[#F3F7F5] p-8 rounded-2xl shadow-sm text-lg">
            <p className="italic">&quot;Every time I visit my own website, her illustrations make me smile, and remind me of what&#39;s at stake, why I do my job. They seem to do the same for my clients: Since we launched the new site, I had to set up a waitlist.&quot;</p>
            <p className="mt-4 font-semibold">— Nicole König, Ethical Marketer</p>
          </div>
        </div>
        <Button asChild className="mt-10 bg-turkis hover:bg-[#246d68] text-white px-8 py-4 rounded-2xl text-lg">
          <a href="#">Become our next client</a>
        </Button>
      </section>

      {/* 💌 Newsletter */}
<section className="py-16 sm:py-20 px-4 bg-[#EAF3F0] text-center">
  {/* 💚 Heading */}
  <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-turkis mb-8 leading-snug">
    Join the Goodest People Club!
  </h3>

  {/* ✉️ Form */}
  <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg sm:max-w-xl mx-auto">
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full sm:flex-1 px-5 sm:px-6 py-3 rounded-2xl border border-gray-300 text-gray-700 placeholder-gray-500
                 focus:outline-none focus:ring-2 focus:ring-turkis transition-all duration-200 text-base sm:text-lg"
    />

    <Button
      type="submit"
      className="w-full sm:w-auto bg-turkis hover:bg-[#246d68] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-2xl text-base sm:text-lg font-medium transition-all duration-200"
    >
      Subscribe
    </Button>
  </form>
</section>

    </main>
  );
};

export default GoodestHome;
