"use client";

import Footer from "@/components/footer";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <section className="relative w-full pt-20 bg-gradient-to-br from-offwhite via-rosa/30 to-turkis/10 text-dunkelblau overflow-hidden">
      {/* 🌸 Floating Decorative Icons */}
      <motion.img
        src="/images/scribbles-icons/beauty.svg"
        alt="floating stars"
        className="absolute top-10 left-8 w-16 md:w-24 opacity-50"
        animate={{ y: ["0px", "-10px", "0px"] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src="/images/scribbles-icons/hearts.svg"
        alt="floating sparkle"
        className="absolute bottom-10 right-8 w-20 md:w-32 opacity-50"
        animate={{ y: ["0px", "-12px", "0px"] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🧾 Heading */}
      <h1
        style={{ fontFamily: "'Heretical Smooth', sans-serif" }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
      >
        Privacy Policy
      </h1>

      {/* 📜 Content */}
      <div className="pb-10 max-w-5xl mx-auto bg-white/60 backdrop-blur-sm p-8 sm:p-10 rounded-3xl shadow-md border border-turkis/20 space-y-10 text-base leading-relaxed text-dunkelblau/90">
        {[
          {
            title: "1. Data Protection at a Glance",
            text: "General information: The following notes provide a simple overview of what happens to your personal data when you visit this website or inquire about my services. Personal data is any data that can be used to personally identify you. Data collection occurs directly when you provide information and automatically via technical means (e.g., browser, IP). Data is used to respond to service inquiries, send newsletters, provide contractual services using AI tools, and ensure website functionality. You have rights to access, rectify, or erase your data, withdraw consent, and lodge complaints with the competent authority."
          },
          {
            title: "2. General Information and Mandatory Disclosures",
            text: "I take the protection of your personal data very seriously. The data controller is Anna Korlath, Via Alcide de Gasperi 13, 20092 Cinisello Balsamo, MI, Italy, Email: anna@korlath.at. Data retention is until the purpose of processing ceases or until you request deletion, subject to legal obligations. Legal bases include Consent, Contract Performance, Legal Obligation, and Legitimate Interest. Data transfer to third countries (Google Workspace, Microsoft OneDrive) follows appropriate safeguards. You may withdraw consent and object to processing at any time. You have rights to access, rectify, erase, restrict processing, data portability, and lodge complaints."
          },
          {
            title: "3. Data Collection and Processing on this Website",
            text: "Server log files are collected automatically for technical error detection and website security. Service inquiries via email or form are stored to handle requests. Newsletter data is stored until unsubscription. Legal bases include legitimate interest, contract performance, and consent. Details of newsletter providers are included in their privacy policies."
          },
          {
            title: "4. Use of AI Tools and Third-Party Services",
            text: "Google Workspace (Gmail, Docs, Meet) and Microsoft OneDrive are used for communication, document creation, and storage. AI tools (e.g., Gemini) assist in discovery calls and project implementation for brainstorming, summarizing meetings, and text drafts. Data processed includes communication and project details. Purpose: efficient project handling and quality assurance. Legal basis: contract performance and legitimate interest. Data processing agreements (DPA) are in place. Audio/video conferencing data is also processed accordingly."
          },
          {
            title: "5. Hosting",
            text: "Website content is hosted with [Hosting Provider Name]. Legal basis: legitimate interest for reliable website display. Data processing agreements (DPA) have been concluded with the hosting provider. Details are in the provider's privacy policy."
          },
          {
            title: "6. Social Media Presences",
            text: "Applies to social media profiles: LinkedIn and Instagram. Data processing by networks occurs when visiting these profiles, even if not logged in. I maintain these profiles under my legitimate interest, jointly responsible with the platform operator. Details are in the social networks’ privacy policies."
          },
        ].map((section, i) => (
          <motion.section
            key={i}
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-turkis">{section.title}</h2>
            <p>{section.text}</p>
          </motion.section>
        ))}
      </div>

      {/* Footer spacing */}
      <div className="pb-16">
        <Footer />
      </div>
    </section>
  );
}
