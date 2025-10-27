"use client";
import Image from "next/image";

export default function Navbar() {

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Company Logo */}
        <div className="flex items-center">
          <Image
            src="/Logo-for-Light.png" // Path to your logo
            alt="The Good Illustrator Logo"
            width={128}
            height={128}
            className="mr-3"
          />
        </div>

      </div>
    </nav>    
  );
}
