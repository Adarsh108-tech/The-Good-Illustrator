"use client";
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [isImprintOpen, setIsImprintOpen] = useState(false);

  const imprintSections = [
    {
      title: "1. Information on the Operator",
      content: `Sole Proprietorship
Name of Owner: Anna Korlath
Registered Address: Via Alcide de Gasperi 13, 20092 Cinisello Balsamo, MI, Italy
VAT ID (Partita IVA): 12937540966`,
    },
    {
      title: "2. Contact Information",
      content: `Standard Email Address: anna@korlath.at`,
    },
    {
      title: "3. Specific Information for Professionals (L. 4/2013)",
      content: `Professional Activity: Illustrator and Brand Designer
Professional Title: Brand Designer`,
    },
    {
      title: "4. Specific Information for E-commerce",
      content: `Sales Conditions: Link to your general Terms & Conditions
Dispute Resolution: The European Commission provides a platform for online dispute resolution (OS): https://ec.europa.eu/consumers/odr/
Consumer Dispute Resolution/Universal Arbitration Board: Not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.`,
    },
  ];

  return (
    <>
      {/* 🌙 Footer Section */}
      <footer className="bg-[#193643] text-[#F8F8F0] py-10 px-4 sm:px-8 md:px-16 border-t border-[#32817b]/30">
        <div
          className="
            max-w-7xl mx-auto 
            flex flex-row flex-wrap justify-between items-center 
            gap-6 sm:gap-8 md:gap-10
          "
        >
          {/* 🧾 Left Section - Legal Links */}
          <div
            className="
              flex flex-row flex-wrap items-center justify-center sm:justify-start 
              gap-4 sm:gap-6 md:gap-8
              text-[12px] sm:text-sm md:text-base font-medium
            "
          >
            <a
              href="/privacy-policy"
              className="hover:text-[#EEBDD1] transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <span className="text-[#32817b]/40">|</span>
            <a
              href="/terms-and-conditions"
              className="hover:text-[#EEBDD1] transition-colors duration-300"
            >
              Terms & Conditions
            </a>
            <span className="text-[#32817b]/40">|</span>
            <button
              onClick={() => setIsImprintOpen(true)}
              className="hover:text-[#EEBDD1] transition-colors duration-300"
            >
              Imprint
            </button>
          </div>

          {/* 🌐 Right Section - Logo & Socials */}
          <div
            className="
              flex flex-row flex-wrap justify-center md:justify-end 
              items-center gap-4 sm:gap-6 w-full md:w-auto
            "
          >
            {/* Logo */}
            <div className="flex-shrink-0 flex justify-center md:justify-end">
              <Image
                src="/Logo-for-dark.png"
                alt="The Good Illustrator Logo"
                width={100}
                height={100}
                className="rounded-full object-contain sm:w-[120px] md:w-[130px]"
              />
            </div>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-end gap-3 sm:gap-4">
              <a
                href="https://www.instagram.com/anna_korlath/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <img
                  src="/images/scribbles-icons/insta.svg"
                  alt="Instagram"
                  className="w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 hover:brightness-125"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/the-good-illustrator/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <img
                  src="/images/scribbles-icons/linkedin.svg"
                  alt="LinkedIn"
                  className="w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 hover:brightness-125"
                />
              </a>
            </div>
          </div>
        </div>

        {/* 🧡 Bottom Line */}
        <div className="border-t border-[#32817b]/30 mt-10 pt-6 text-center text-[10px] sm:text-xs md:text-sm text-gray-300 leading-relaxed">
          Built with Love by{" "}
          <span className="text-[#FFBB2C] font-semibold">
            The Good Illustrator
          </span>{" "}
          | All rights reserved © 2025
        </div>
      </footer>

      {/* 🪄 Imprint Modal */}
      {isImprintOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-center items-start overflow-auto pt-16 pb-16 px-4">
          <div className="bg-white text-[#193643] max-w-4xl w-full mx-auto rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl relative">
            {/* Close Button */}
            <button
              onClick={() => setIsImprintOpen(false)}
              className="absolute top-4 right-4 text-2xl font-bold hover:text-turkis transition-colors"
            >
              &times;
            </button>

            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8">
              Imprint
            </h1>

            {imprintSections.map((section, index) => (
              <div
                key={index}
                className="border border-turkis/40 rounded-2xl p-4 sm:p-6 mb-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h2 className="text-lg sm:text-xl font-semibold mb-3">
                  {section.title}
                </h2>
                <p className="whitespace-pre-line text-sm sm:text-base leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
