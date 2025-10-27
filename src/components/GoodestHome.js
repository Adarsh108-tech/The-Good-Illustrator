"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import FloatingImagesWithBackground from "./floatingImageWithBack";
import Banner from "./Banner";
import TrustedPartnersSection from "./TrustedPartners";
import BeyondPretty from "./BeyondPreetySection";
import BeyondPrettyImpact from "./BeyondPreetyImapct";
import HallOfFameSection from "./HallOfFame";

const GoodestHome = () => {
  return (
    <main className=" text-gray-900 font-myFont">
      {/* 🌟 Hero Section */}
      <section className="bg-turkis py-24 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
    {/* 🌟 Functional Component (Replaces Image) */}
    <FloatingImagesWithBackground />

    {/* ✨ Text Content */}
    <div className="text-center md:text-left flex-1 space-y-5">
      {/* Heading */}
      <motion.h1
        style={{ fontFamily: "'Heretical Smooth', sans-serif" }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }} // 👈 triggers when 30% of element is visible
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug text-offwhite"
      >
        Branding & Handcrafted Illustrations for{" "}
        <span className="text-gelb">Unforgettable Impact</span>.
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-2xl text-base sm:text-lg text-offwhite mx-auto md:mx-0"
      >
        For impact founders, we translate profound purpose into clear, compelling, and deeply trusted visual brands.
        Your mission is vital — let&#39;s make it visible.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Button
          asChild
          className="mt-4 bg-turkis hover:bg-dunkelblau text-offwhite px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <a href="https://www.canva.com/design/DAGiD8C1vxc/24DhYHZqlb0C_iIxFVS47g/view?utm_content=DAGiD8C1vxc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hcdc65df1eb">
            See Our Portfolio
          </a>
        </Button>
      </motion.div>
    </div>
  </div>
</section>

<section className="relative px-6 bg-offwhite overflow-hidden">
      {/* 🌱 Decorative Accent Circles */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-rosa/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-24 w-72 h-72 bg-turkis/10 rounded-full blur-3xl" />

      {/* Content Wrapper */}
      <div className="relative max-w-6xl my-24 mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Text Section */}
        <motion.div
          className="flex-1 text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-semibold mb-3 text-turkis"
            style={{ fontFamily: "'Heretical Smooth', sans-serif" }}
          >
            For The Goodest People.
          </motion.h2>

          <motion.h3
            className="text-lg md:text-2xl font-medium mb-6 text-dunkelblau"
            style={{ fontFamily: "'Heretical Smooth', sans-serif" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            You&#39;re Building a Resilient Future. We&#39;ll Help You Lead It.
          </motion.h3>

          <motion.p
            className="max-w-2xl text-gray-700 leading-relaxed text-base mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            You create tangible, positive change in urban spaces, restoring ecological
            balance, or redesigning broken systems. Your work needs clarity, conviction,
            and connection. How do you articulate your profound impact in a way that
            truly resonates, earns trust, and inspires action?
          </motion.p>

          <motion.p
            className="max-w-2xl text-gray-700 leading-relaxed text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The Good Illustrator is a full-service studio dedicated to the good stuff —
            transforming your complex, critical work into a powerful, human-centered
            visual brand. With strategic insights and bespoke illustration, we craft
            brands that don&#39;t just look good — they build credibility and attract your
            ideal allies.
          </motion.p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <img
            src="/images/another-planet.svg"
            alt="People Creating Impact Illustration"
            className="w-full max-w-md rounded-2xl drop-shadow-lg"
          />
        </motion.div>
      </div>
    </section>

      {/* 🌱 For The Goodest People */}
    <Banner/>
      {/* 🤝 Partner Logos */}
      <TrustedPartnersSection/>
      <BeyondPretty/>
      <BeyondPrettyImpact/>

      <HallOfFameSection/>

    </main>
  );
};
export default GoodestHome;