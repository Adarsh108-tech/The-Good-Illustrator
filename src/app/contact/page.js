"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    country: "",
    subject: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Navbar />

      {/* 🌸 Contact Section */}
      <section className="relative bg-gradient-to-br from-offwhite via-rosa/40 to-turkis/20 min-h-screen flex items-center justify-center py-20 px-6 sm:px-10 md:px-20 overflow-hidden">
        {/* 🌿 Decorative Background Icons */}
        <img
          src="/images/hero/earthLove.png"
          alt=""
          className="absolute top-20 left-0 w-28 sm:w-36 opacity-30 pointer-events-none select-none blur-[1px]"
        />
        <img
          src="/images/hero/bag.png"
          alt=""
          className="absolute top-30 right-0 w-24 sm:w-32 opacity-40 pointer-events-none select-none blur-[1px]"
        />
        <img
          src="/images/hero/nien.png"
          alt=""
          className="absolute bottom-20 left-5 w-20 sm:w-28 opacity-25 pointer-events-none select-none blur-[1px]"
        />
        <img
          src="/images/hero/width_200.png"
          alt=""
          className="absolute bottom-5 right-5 w-24 sm:w-32 opacity-30 pointer-events-none select-none blur-[1px]"
        />

        <div className="relative bg-[#F8F8F0]/80 backdrop-blur-lg rounded-3xl shadow-xl mt-10 p-8 sm:p-10 md:p-14 w-full max-w-3xl border border-turkis/20 z-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-dunkelblau text-center mb-8">
            Get in Touch
          </h1>
          <p className="text-center text-dunkelblau/70 mb-10">
            We&#39;d love to hear from you! Please fill out the form below and we&#39;ll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-dunkelblau font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="rounded-xl px-4 py-3 bg-offwhite border border-turkis/30 focus:border-turkis focus:ring-2 focus:ring-turkis/40 outline-none transition-all text-dunkelblau placeholder:text-gray-500"
              />
            </div>

            {/* Contact Number */}
            <div className="flex flex-col">
              <label className="text-dunkelblau font-medium mb-2">Contact Number</label>
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="+91 9876543210"
                required
                className="rounded-xl px-4 py-3 bg-offwhite border border-turkis/30 focus:border-turkis focus:ring-2 focus:ring-turkis/40 outline-none transition-all text-dunkelblau placeholder:text-gray-500"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-dunkelblau font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="rounded-xl px-4 py-3 bg-offwhite border border-turkis/30 focus:border-turkis focus:ring-2 focus:ring-turkis/40 outline-none transition-all text-dunkelblau placeholder:text-gray-500"
              />
            </div>

            {/* Country */}
            <div className="flex flex-col">
              <label className="text-dunkelblau font-medium mb-2">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Your country"
                required
                className="rounded-xl px-4 py-3 bg-offwhite border border-turkis/30 focus:border-turkis focus:ring-2 focus:ring-turkis/40 outline-none transition-all text-dunkelblau placeholder:text-gray-500"
              />
            </div>

            {/* Subject */}
            <div className="flex flex-col sm:col-span-2">
              <label className="text-dunkelblau font-medium mb-2">Subject</label>
              <textarea
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows="4"
                required
                className="rounded-xl px-4 py-3 bg-offwhite border border-turkis/30 focus:border-turkis focus:ring-2 focus:ring-turkis/40 outline-none transition-all text-dunkelblau placeholder:text-gray-500 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-2 flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-turkis text-offwhite font-semibold text-sm md:text-lg shadow-md hover:shadow-lg hover:bg-[#2b6f6a] transition-all duration-300"
              >
                Send Message ✨
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
