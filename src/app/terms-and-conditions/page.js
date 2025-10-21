"use client";

import Footer from "@/components/footer";
import { motion } from "framer-motion";

export default function TermsAndConditions() {
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
        General Terms and Conditions (GTC)
      </h1>

      {/* 📜 Content */}
      <div className=" pb-10 max-w-5xl mx-auto bg-white/60 backdrop-blur-sm p-8 sm:p-10 rounded-3xl shadow-md border border-turkis/20 space-y-10 text-base leading-relaxed text-dunkelblau/90">
        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-semibold text-turkis mb-3">1. General</h2>
          <p>
            These General Terms and Conditions (GTC) take effect as soon as you (as the "Client")
            engage in any service provided by Anna Korlath (whether via email, acceptance of a quote,
            or other means). These terms govern the entire legal relationship and the provision of
            services between Anna Korlath (&apos;we&apos; or &apos;us&apos;) and you.
          </p>
          <p className="mt-3">
            Our business address is: <strong>Via Alcide de Gasperi 13, 20092 Cinisello Balsamo, MI, Italy.</strong><br />
            The owner and operator is <strong>Anna Korlath</strong> under the VAT Identification Number
            (Partita IVA) <strong>12937540966</strong>.
          </p>
          <p className="mt-3">
            The purpose of our business is the provision of the following services: Illustration,
            Brand Design, Visual Identity, Strategic Consulting, and the creation of creative concepts
            and accompanying texts.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-2xl font-semibold text-turkis mb-3">2. Definitions</h2>
          <p>
            For clarity, the following terms have the meanings defined below:
          </p>
          <ul className="list-disc ml-6 mt-3 space-y-1">
            <li><strong>Client:</strong> An individual, company, or organization that engages my services.</li>
            <li><strong>Confidential Information:</strong> All technical and non-technical information about you, your business, or a Project.</li>
            <li><strong>Final Work:</strong> The result of our services (e.g., illustration, brand manual, logo, design, final file).</li>
            <li><strong>Draft:</strong> A preliminary version of a work that we have created or developed for you.</li>
            <li><strong>Payment Schedule:</strong> The timeframe for settling individual invoices or installments.</li>
            <li><strong>Budget:</strong> The total amount payable by the Client for the provision of the service or the completion of the Project.</li>
            <li><strong>Deadline:</strong> The date on which the Project is expected to be fully completed and delivered.</li>
            <li><strong>Formal Offer:</strong> A legally binding document detailing the specifics of your Project (Budget, schedule, Project content).</li>
            <li><strong>Project:</strong> The entirety of all services, works, and deliverables commissioned by you.</li>
            <li><strong>Source Material:</strong> All texts, briefings, brand guidelines, or visual references you provide.</li>
            <li><strong>Third-Party Provider/Supplier:</strong> Any person or entity assisting us in performing the agreed services.</li>
          </ul>
        </section>

        {/* Add Remaining Sections */}
        {[
          { title: "3. Acceptance", text: "By placing an order..." },
          { title: "4. Service Provision and AI Usage", text: "Under these GTC..." },
          { title: "5. Scope of Service and Order Amendments", text: "Creative services..." },
          { title: "6. Early Cancellation and Inability to Perform", text: "Should you decide..." },
          { title: "7. Quality Assurance and Defects", text: "We will submit..." },
          { title: "8. Budget and Payment", text: "Payment is due..." },
          { title: "9. Intellectual Property and Portfolio Rights", text: "Ownership of Final Work..." },
          { title: "10. Client Obligations and Warranty", text: "You commit to diligent cooperation..." },
          { title: "11. Confidentiality and Electronic Communication", text: "We commit to applying appropriate procedures..." },
          { title: "12. Relationship, Subcontracting, and Entire Agreement", text: "We are independent contractors..." },
          { title: "13. Choice of Law & Jurisdiction", text: "These GTC are governed by the laws of Italy..." },
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

      {/* Footer Note */}
      <div className="pt-20">
        <Footer/>
      </div>
    </section>
  );
}
