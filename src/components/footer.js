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
      <footer className="bg-[#193643] text-[#F8F8F0] py-10 px-6 md:px-16 border-t border-[#32817b]/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-0">
          {/* Left Section - Legal Links */}
          <div className="flex flex-col gap-3 text-sm font-medium">
            <a
              href="/privacy-policy"
              className="hover:text-[#EEBDD1] transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-and-conditions"
              className="hover:text-[#EEBDD1] transition-colors duration-300"
            >
              Terms & Conditions
            </a>
            <button
              onClick={() => setIsImprintOpen(true)}
              className="hover:text-[#EEBDD1] transition-colors duration-300 text-left"
            >
              Imprint
            </button>
          </div>

          {/* Right Section - Logo & Socials */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/Logo-for-dark.png"
                alt="The Good Illustrator Logo"
                width={150}
                height={150}
                className="rounded-full"
              />
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/anna_korlath/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <img
                  src="/images/scribbles-icons/insta.svg"
                  alt="Instagram"
                  className="w-10 h-10 hover:brightness-125"
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
                  className="w-10 h-10 hover:brightness-125"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-[#32817b]/30 mt-10 pt-6 text-center text-xs text-gray-300">
          Built with Love by <span className="text-[#FFBB2C] font-semibold">The Good Illustrator</span> | All rights reserved © 2025
        </div>
      </footer>

      {/* Imprint Modal */}
      {isImprintOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-center items-start overflow-auto pt-16 pb-16">
          <div className="bg-white text-[#193643] max-w-4xl w-full mx-4 rounded-3xl p-8 sm:p-12 shadow-xl relative">
            <button
              onClick={() => setIsImprintOpen(false)}
              className="absolute top-4 right-4 text-2xl font-bold hover:text-turkis transition-colors"
            >
              &times;
            </button>
            <h1 className="text-3xl font-bold text-center mb-8">Imprint</h1>

            {imprintSections.map((section, index) => (
              <div
                key={index}
                className="border border-turkis/40 rounded-2xl p-6 mb-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
                <p className="whitespace-pre-line text-sm">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
